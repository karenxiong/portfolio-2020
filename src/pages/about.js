import React from 'react';
import { Layout, SEO } from 'components/common';

import { About } from 'components/about';

export default ({ location }) => (
  <>
    <SEO />
    <Layout location={location}>
      <About />
    </Layout>
  </>
);
