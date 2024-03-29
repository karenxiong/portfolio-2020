import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro } from 'components/landing';

export default ({ location }) => (
  <>
    <SEO />
    <Layout location={location}>
      <Intro location={location} />
    </Layout>
  </>
);
