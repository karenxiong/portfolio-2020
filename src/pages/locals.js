import React from 'react';
import { Layout, SEO, PasswordProtect } from 'components/common';
import { Locals } from 'components/locals';

export default ({ location }) => (
  <>
    <SEO />
    <PasswordProtect>
      <Layout location={location}>
        <SEO />
        <Locals location={location} />
      </Layout>
    </PasswordProtect>
  </>
);
