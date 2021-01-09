import React, { useState, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { useRect } from '@reach/rect';
import { Tabs, TabList, Tab, TabPanels, TabPanel, useTabsContext } from '@reach/tabs';
import '@reach/tabs/styles.css';

import { RecentWork, Projects } from 'components/landing';

const DesktopFeed = styled(
  React.forwardRef((props, ref) => (
    <Tabs ref={ref} {...props}>
      {props.children}
    </Tabs>
  ))
)`
  @media (max-width: 960px) {
    display: none;
  }
`;

const MobileFeed = styled(
  React.forwardRef((props, ref) => (
    <Tabs ref={ref} {...props}>
      {props.children}
    </Tabs>
  ))
)`
  @media (min-width: 961px) {
    display: none;
  }
`;

export const Feed = ({ mobile }) => {
  const TAB_BORDER_BOTTOM_HEIGHT = 4;
  const TAB_LIST_BOTTOM_BORDER_HEIGHT = 2;
  const theme = useContext(ThemeContext);
  const tabs = [
    {
      text: 'recent work',
      color: theme.color[1],
      borderColor: theme.borderColor[1],
      darkColor: theme.darkColor[1],
      darkBorderColor: theme.darkBorderColor[1],
    },
    {
      text: 'coding',
      color: theme.color[7],
      borderColor: theme.borderColor[7],
      darkColor: theme.color[7],
      darkBorderColor: theme.darkBorderColor[7],
    },
  ];

  const AnimatedContext = React.createContext();
  function AnimatedTabs({ color, children, ...rest }) {
    // some state to store the position we want to animate to
    const [[activeRect, index], setActiveRect] = React.useState([null, 0]);
    const ref = React.useRef();
    const rect = useRect(ref);

    const FeedComponent = mobile ? MobileFeed : DesktopFeed;
    return (
      // put the function to change the styles on context so an active Tab
      // can call it, then style it up
      <AnimatedContext.Provider value={setActiveRect}>
        {/* make sure to forward props since we're wrapping Tabs */}
        <FeedComponent
          {...rest}
          ref={ref}
          style={{
            ...rest.style,
            position: 'relative',
            height: '100%',
            overflow: 'hidden',
          }}
        >
          {children(index)}
          <div
            style={{
              borderRadius: '8px',
              position: 'absolute',
              height: TAB_BORDER_BOTTOM_HEIGHT,
              // background: color,
              background: theme.mode === 'light' ? tabs[index].color : tabs[index].darkColor,
              transition: 'all 300ms ease',
              left: (activeRect && activeRect.left) - (rect && rect.left),
              top:
                (activeRect && activeRect.bottom) -
                (rect && rect.top) -
                TAB_BORDER_BOTTOM_HEIGHT +
                TAB_LIST_BOTTOM_BORDER_HEIGHT,
              // subtract both sides of horizontal padding to center the div
              width: activeRect && activeRect.width,
            }}
          />
        </FeedComponent>
      </AnimatedContext.Provider>
    );
  }
  function AnimatedTab({ index, ...props }) {
    // get the currently selected index from useTabsContext
    const { selectedIndex } = useTabsContext();
    const isSelected = selectedIndex === index;
    // measure the size of our element, only listen to rect if active
    const ref = React.useRef();
    const rect = useRect(ref, { observe: isSelected });
    // get the style changing function from context
    const setActiveRect = useContext(AnimatedContext);
    // callup to set styles whenever we're active
    React.useLayoutEffect(() => {
      if (isSelected) {
        setActiveRect([rect, index]);
      }
    }, [index, isSelected, rect, setActiveRect]);
    return (
      <Tab
        ref={ref}
        {...props}
        style={{
          ...props.style,
          border: 'none',
          padding: 0,
          // padding: `4px ${HORIZONTAL_PADDING}px`,
          marginRight: '3rem',
          fontVariant: 'small-caps',
          fontWeight: isSelected ? '600' : '500',
          color: isSelected
            ? theme.mode === 'light'
              ? props.color
              : props.darkColor
            : theme.mode === 'light'
            ? '#7A7A7A'
            : '#CECECE',
        }}
      />
    );
  }
  return (
    <AnimatedTabs>
      {currentTabIndex => (
        <>
          <TabList
            style={{
              background: 'inherit',
              height: '2rem',
              borderBottom: `${TAB_LIST_BOTTOM_BORDER_HEIGHT}px solid ${
                theme.mode === 'light' ? tabs[currentTabIndex].borderColor : tabs[currentTabIndex].darkBorderColor
              }`,
            }}
          >
            {tabs.map((tab, i) => (
              <AnimatedTab key={i} index={i} color={tab.color} darkColor={tab.darkColor}>
                {tab.text}
              </AnimatedTab>
            ))}
          </TabList>
          <TabPanels style={{ marginTop: '.75rem', height: '100%', overflow: 'auto' }}>
            <TabPanel>
              <RecentWork />
            </TabPanel>
            <TabPanel style={{ padding: '0 .75rem' }}>
              <Projects />
            </TabPanel>
          </TabPanels>
        </>
      )}
    </AnimatedTabs>
  );
};
