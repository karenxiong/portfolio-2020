import React, { useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useRect } from '@reach/rect';
import { Tabs, TabList, Tab, TabPanels, TabPanel, useTabsContext } from '@reach/tabs';
import '@reach/tabs/styles.css';

import { Projects } from 'components/landing';

export const Feed = () => {
  const TAB_BORDER_BOTTOM_HEIGHT = 4;
  const TAB_LIST_BOTTOM_BORDER_HEIGHT = 2;
  const theme = useContext(ThemeContext);
  const tabs = [
    { text: 'recent work', color: theme.color[0], borderColor: theme.borderColor[0] },
    { text: 'coding', color: theme.color[7], borderColor: theme.borderColor[7] },
  ];

  const AnimatedContext = React.createContext();
  function AnimatedTabs({ color, children, ...rest }) {
    // some state to store the position we want to animate to
    const [[activeRect, index], setActiveRect] = React.useState([null, 0]);
    const ref = React.useRef();
    const rect = useRect(ref);

    return (
      // put the function to change the styles on context so an active Tab
      // can call it, then style it up
      <AnimatedContext.Provider value={setActiveRect}>
        {/* make sure to forward props since we're wrapping Tabs */}
        <Tabs {...rest} ref={ref} style={{ ...rest.style, position: 'relative' }}>
          {children(index)}
          <div
            style={{
              position: 'absolute',
              height: TAB_BORDER_BOTTOM_HEIGHT,
              // background: color,
              background: theme.mode === 'light' ? tabs[index].color : 'white',
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
        </Tabs>
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
          textTransform: 'uppercase',
          fontWeight: isSelected ? '600' : '500',
          color: isSelected ? (theme.mode === 'light' ? props.color : 'white') : '#7A7A7A',
        }}
      />
    );
  }
  return (
    <AnimatedTabs id="work">
      {currentTabIndex => (
        <>
          <TabList
            style={{
              background: 'inherit',
              height: '2rem',
              borderBottom: `${TAB_LIST_BOTTOM_BORDER_HEIGHT}px solid ${
                theme.mode === 'light' ? tabs[currentTabIndex].borderColor : 'white'
              }`,
            }}
          >
            {tabs.map((tab, i) => (
              <AnimatedTab key={i} index={i} color={tab.color}>
                {tab.text}
              </AnimatedTab>
            ))}
          </TabList>
          <TabPanels style={{ padding: 10 }}>
            <TabPanel>
              <p>Check it out! It's ~animated~</p>
            </TabPanel>
            <TabPanel>
              <p>Coming soon!</p>
              {/* <Projects /> */}
            </TabPanel>
          </TabPanels>
        </>
      )}
    </AnimatedTabs>
  );
};
