import React from 'react';
import { Layout, SEO, PasswordProtect } from 'components/common';
import { MyShoperon } from 'components/myshoperon';

export default ({ location }) => (
  <>
    <SEO />
    <PasswordProtect>
      <Layout location={location}>
        <MyShoperon location={location} />
      </Layout>
    </PasswordProtect>
  </>
);
