import React from 'react';
import { Layout, SEO, Feed } from 'components/common';
import { Intro } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro Feed={Feed} />
  </Layout>
);
