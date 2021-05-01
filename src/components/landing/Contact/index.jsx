import React from 'react';
import { Container } from 'components/common';
import contact from 'assets/illustrations/contact.svg';
import { Wrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';

export const Contact = ({ page }) => (
  <Wrapper style={{ padding: '1rem 0', margin: '0 0 0 1rem' }} as={Container} id="play">
    <Details>
      <ContactForm />
    </Details>
    {page !== 'about' && (
      <Thumbnail>
        <img src={contact} alt="I’m Karen and I’m a UX Designer!" />
      </Thumbnail>
    )}
  </Wrapper>
);
