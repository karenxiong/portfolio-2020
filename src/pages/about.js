import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro page="about" />
  </Layout>
);
