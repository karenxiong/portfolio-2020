import React from 'react';
import { Layout, SEO } from 'components/common';
import { MyShoperon } from 'components/myshoperon';

export default ({ location }) => (
  <Layout>
    <SEO />
    <MyShoperon location={location} />
  </Layout>
);
