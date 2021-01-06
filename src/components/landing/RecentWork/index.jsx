import React, { useContext } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import { ThemeContext } from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Container, Card, TitleWrap, CaseStudyCard, CaseStudyButton } from 'components/common';
import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';
import Locals from 'assets/icons/locals.svg';
import lock from 'assets/icons/lock.svg';
import { Wrapper, Grid, Item, Content, Stats, Languages, StatusWrapper, Title, Date, Hyphen } from './styles';

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
    <Wrapper as={Container} id="work">
      <Grid>
        {edges.map(({ node }, index) => {
          const CardComponent = index % 2 === 0 ? CaseStudyCard : Card;
          return (
            <Item key={node.id} as="a" href={node.url} target="_blank" rel="noopener noreferrer" theme={theme}>
              <CardComponent Icon={Locals} label="Locals" background="#4F4E90" font="SF Pro Rounded">
                <Content>
                  <h4>Locals</h4>
                  <Status date="Mar. 2020">UX Designer & Researcher</Status>
                  <p>Build meaningful relationship with your neighbors.</p>
                </Content>
                <CaseStudyButton color="#4F4E90" Icon={lock} as={Link} to="/locals">
                  View case study
                </CaseStudyButton>
              </CardComponent>
            </Item>
          );
        })}
      </Grid>
    </Wrapper>
  );
};
