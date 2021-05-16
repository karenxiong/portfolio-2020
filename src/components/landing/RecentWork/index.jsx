import React, { useContext } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import { ThemeContext } from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Container, Card, TitleWrap, CaseStudyCard, CaseStudyDetailsCard, CaseStudyButton } from 'components/common';
import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';
import Locals from 'assets/icons/locals.svg';
import Lock from 'assets/icons/lock.svg';
import Arrow from 'assets/icons/arrow.svg';
import {
  Wrapper,
  Grid,
  Item,
  Content,
  Stats,
  Languages,
  StatusWrapper,
  Title,
  Date,
  Hyphen,
  CaseStudyButtonWrapper,
} from './styles';

const Status = ({ date, children }) => (
  <StatusWrapper>
    <Title>{children}</Title>
    <Hyphen>{' - '}</Hyphen>
    <Date>{date}</Date>
  </StatusWrapper>
);

export const RecentWork = () => {
  const theme = useContext(ThemeContext);
  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(first: 8, orderBy: { field: STARGAZERS, direction: DESC }) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                  languages(first: 3) {
                    nodes {
                      id
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  return (
    <Wrapper id="work">
      <Grid>
        <Item as={Link} to="/myshoperon" theme={theme}>
          <CaseStudyCard Icon={Locals} label="MyShoperon" background="#4F4E90" font="SF Pro Rounded" />
        </Item>
        <Item as={Link} to="/myshoperon" theme={theme}>
          <CaseStudyDetailsCard>
            <Content>
              <h4>MyShoperon</h4>
              <Status date="ongoing">Lead UI/UX Designer</Status>
              <p>An online platform that connects verified and rated neighbours to collect packages for each other.</p>
            </Content>
            <CaseStudyButtonWrapper>
              <CaseStudyButton color="#4F4E90" Icon={Arrow} as={Link} to="/myshoperon">
                View case study
              </CaseStudyButton>
            </CaseStudyButtonWrapper>
          </CaseStudyDetailsCard>
        </Item>
        <Item as={Link} to="/locals" theme={theme}>
          <CaseStudyCard Icon={Locals} label="Locals" background="#25A2B8" font="SF Pro Rounded" />
        </Item>
        <Item as={Link} to="/locals" theme={theme}>
          <CaseStudyDetailsCard>
            <Content>
              <h4>Locals</h4>
              <Status date="Mar. 2020">UX Designer & Researcher</Status>
              <p>Build meaningful relationship with your neighbors.</p>
            </Content>
            <CaseStudyButtonWrapper>
              <CaseStudyButton color="#25A2B8" Icon={Arrow} as={Link} to="/locals">
                View case study
              </CaseStudyButton>
            </CaseStudyButtonWrapper>
          </CaseStudyDetailsCard>
        </Item>
      </Grid>
    </Wrapper>
  );
};
