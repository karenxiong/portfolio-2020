import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'styled-components';

import { Container, Card, TitleWrap } from 'components/common';
import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';
import { Wrapper, Grid, Item, Content, Stats, Languages } from './styles';

const PROJECTS_TO_IGNORE = ['strategic-content', 'strategic-content-v2', 'UXPortfolio'];

export const Projects = () => {
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
        {edges
          .filter(({ node }) => !PROJECTS_TO_IGNORE.includes(node.name))
          .map(({ node }) => (
            <Item key={node.id} as="a" href={node.url} target="_blank" rel="noopener noreferrer" theme={theme}>
              <Card>
                <Content>
                  <h4>{node.name}</h4>
                  <p>{node.description}</p>
                </Content>
                <TitleWrap>
                  <Stats>
                    <div>
                      <Star color={theme.mode === 'light' ? '#000' : '#fff'} />
                      <span>{node.stargazers.totalCount}</span>
                    </div>
                    <div>
                      <Fork color={theme.mode === 'light' ? '#000' : '#fff'} />
                      <span>{node.forkCount}</span>
                    </div>
                  </Stats>
                  <Stats>
                    <Languages>
                      {node.languages.nodes.map(({ id, name }) => (
                        <span key={id}>{name}</span>
                      ))}
                    </Languages>
                  </Stats>
                </TitleWrap>
              </Card>
            </Item>
          ))}
      </Grid>
    </Wrapper>
  );
};
