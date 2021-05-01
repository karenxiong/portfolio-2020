import React, { useState, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { useRect } from '@reach/rect';
import { Tabs, TabList, Tab, TabPanels, TabPanel, useTabsContext } from '@reach/tabs';
import '@reach/tabs/styles.css';

import { H1 } from 'components/common';
import { RecentWork, Projects, Contact } from 'components/landing';
import AboutFirst from 'assets/illustrations/about-1.jpeg';
import AboutSecond from 'assets/illustrations/about-2.jpeg';
import AboutThird from 'assets/illustrations/about-3.png';

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
    <Tabs id="feed" ref={ref} {...props}>
      {props.children}
    </Tabs>
  ))
)`
  @media (min-width: 961px) {
    display: none;
  }
`;

const About = () => {
  const PhotoWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 2vmin;

    img {
      max-height: 100%;
      object-fit: cover;
      border-radius: 1vmin;

      height: 40vh;
      flex-grow: 1;
      margin: 2vmin;
    }

    @media (max-width: 960px) {
    }
    @media (max-width: 680px) {
    }
  `;

  return (
    <div>
      <H1 style={{ marginTop: '1rem' }}>Hey there!</H1>
      <p>
        I’m Karen and I’m passionate about improving the lives of others through design. I started my journey at the
        University of Toronto studying New Media Studies with my focus being in web design. Studying web design has
        helped jump start my UX journey by providing me with an understanding of both the design and development world.
      </p>
      <p>
        Since graduating UofT, I've taken the initiative in learning more about UI/UX design through reading and taking
        several UX related courses such as the User Experience Design Circuit at General Assembly, the Process
        Masterclass with Nguyen, and most recently, the User Experience Design Diploma Program at BrainStation.
      </p>
      <p>
        When i’m not designing you can catch me cooking, sketching, trying out new restaurants, watching horror movies,
        or playing with my dog, Snowie!
      </p>
      <div style={{ width: '100%' }}>
        <PhotoWrapper>
          <img src={AboutFirst} alt="Karen side" />
          <img src={AboutSecond} alt="Karen front" />
          <img src={AboutThird} alt="Karen back" />
        </PhotoWrapper>
      </div>
    </div>
  );
};
const PAGE_TABS = {
  home: [
    {
      text: 'recent work',
      TabComponent: () => (
        <TabPanel>
          <RecentWork />
        </TabPanel>
      ),
    },
    {
      text: 'coding',
      TabComponent: () => (
        <TabPanel style={{ padding: '0 .75rem' }}>
          <Projects />
        </TabPanel>
      ),
    },
  ],
  about: [
    {
      text: 'about',
      TabComponent: () => (
        <TabPanel>
          <About />
        </TabPanel>
      ),
    },
    {
      text: 'message',
      TabComponent: () => (
        <TabPanel>
          <Contact page="about" />
        </TabPanel>
      ),
    },
  ],
};

export const Feed = ({ page, mobile }) => {
  const TAB_BORDER_BOTTOM_HEIGHT = 4;
  const TAB_LIST_BOTTOM_BORDER_HEIGHT = 2;
  const theme = useContext(ThemeContext);
  const tabs = [
    {
      text: PAGE_TABS[page][0].text,
      TabComponent: PAGE_TABS[page][0].TabComponent,
      color: theme.color[1],
      borderColor: theme.borderColor[1],
      darkColor: theme.darkColor[1],
      darkBorderColor: theme.darkBorderColor[1],
    },
    {
      text: PAGE_TABS[page][1].text,
      TabComponent: PAGE_TABS[page][1].TabComponent,
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
  function AnimatedTab({ index, darkColor, ...props }) {
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
              : darkColor
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
            {tabs.map(({ TabComponent }, i) => (
              <TabComponent key={i} />
            ))}
          </TabPanels>
        </>
      )}
    </AnimatedTabs>
  );
};
