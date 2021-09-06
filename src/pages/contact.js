import React from 'react';
import { Layout, SEO } from 'components/common';
import { Contact } from 'components/landing';

export default ({ location }) => (
  <>
    <SEO />
    <Layout location={location}>
      <Contact />
    </Layout>
  </>
);
