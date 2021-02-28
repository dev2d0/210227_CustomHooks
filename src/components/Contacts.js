import React from 'react';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn.js';

const Contacts = () => {
  const animatedItem = useScrollFadeIn();
  
  return (
  	<Wrapper>
    	<Title>Contacts</Title>
      <Description>
      	Consequat interdum varius sit amet mattis vulputate enim.
      </Description>
      <Form {...animatedItem} />
    </Wrapper>
  )
}

export default Contacts
