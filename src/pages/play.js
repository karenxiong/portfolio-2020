import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro } from 'components/landing';

export default ({ location }) => (
  <Layout>
    <SEO />
    <Intro location={location} page="play" />
  </Layout>
);
