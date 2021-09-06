import React from 'react';
import { Layout, SEO } from 'components/common';
import { Writing } from 'components/writing';

export default ({ location }) => (
  <>
    <SEO />
    <Layout location={location}>
      <Writing location={location} />
    </Layout>
  </>
);
