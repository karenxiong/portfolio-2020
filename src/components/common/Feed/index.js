import React, { useContext } from 'react';
import styled from 'styled-components';
import Rect, { useRect } from '@reach/rect';
import { Tabs, TabList, Tab, TabPanels, TabPanel, useTabsContext } from '@reach/tabs';
import '@reach/tabs/styles.css';

export const Feed = () => {
  const HORIZONTAL_PADDING = 8;
  const TAB_BORDER_BOTTOM_HEIGHT = 4;
  const TAB_LIST_BOTTOM_BORDER_HEIGHT = 2;

  const AnimatedContext = React.createContext();
  function AnimatedTabs({ color, children, ...rest }) {
    // some state to store the position we want to animate to
    const [activeRect, setActiveRect] = React.useState(null);
    const ref = React.useRef();
    const rect = useRect(ref);
    return (
      // put the function to change the styles on context so an active Tab
      // can call it, then style it up
      <AnimatedContext.Provider value={setActiveRect}>
        {/* make sure to forward props since we're wrapping Tabs */}
        <Tabs {...rest} ref={ref} style={{ ...rest.style, position: 'relative' }}>
          {children}
          <div
            style={{
              position: 'absolute',
              height: TAB_BORDER_BOTTOM_HEIGHT,
              background: color,
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
        setActiveRect(rect);
      }
    }, [isSelected, rect, setActiveRect]);
    return (
      <Tab
        ref={ref}
        {...props}
        style={{
          ...props.style,
          border: 'none',
          padding: 0,
          // padding: `4px ${HORIZONTAL_PADDING}px`,
          'margin-right': '3rem',
          'text-transform': 'uppercase',
          'font-weight': isSelected ? '500' : '400',
          color: !isSelected && '#7A7A7A',
        }}
      />
    );
  }
  return (
    <AnimatedTabs color="black" style={{}}>
      <TabList
        style={{
          background: 'inherit',
          height: '2rem',
          'border-bottom': `${TAB_LIST_BOTTOM_BORDER_HEIGHT}px solid rgba(51, 51, 51, 0.7)`,
        }}
      >
        <AnimatedTab index={0} style={{}}>
          recent work
        </AnimatedTab>
        <AnimatedTab index={1} style={{}}>
          coding
        </AnimatedTab>
      </TabList>
      <TabPanels style={{ padding: 10 }}>
        <TabPanel>
          <p>Check it out! It's ~animated~</p>
        </TabPanel>
        <TabPanel>
          <p>Yeah yeah. What's up?</p>
        </TabPanel>
      </TabPanels>
    </AnimatedTabs>
  );
};
