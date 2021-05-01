import React from 'react';
import { Layout, SEO } from 'components/common';
import { Locals } from 'components/locals';

export default ({ location }) => (
  <Layout>
    <SEO />
    <Locals location={location} />
  </Layout>
);
