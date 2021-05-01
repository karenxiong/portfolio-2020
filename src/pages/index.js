import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact } from 'components/landing';

export default ({ location }) => (
  <Layout>
    <SEO />
    <Intro location={location} />
    {/* <Skills />
    <Contact /> */}
  </Layout>
);
