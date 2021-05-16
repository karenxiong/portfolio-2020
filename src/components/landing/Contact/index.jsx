import React from 'react';
import { Container, H1 } from 'components/common';
import contact from 'assets/illustrations/contact.svg';

import { Wrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';

export const Contact = ({ page }) => (
  <Wrapper style={{ padding: '1rem 0', margin: '0rem' }} as={Container} id="play">
    <Details>
      <H1>Lets connect</H1>
      <ContactForm />
    </Details>
    {page !== 'about' && (
      <Thumbnail>
        <img src={contact} alt="I’m Karen and I’m a UX Designer!" />
      </Thumbnail>
    )}
  </Wrapper>
);
