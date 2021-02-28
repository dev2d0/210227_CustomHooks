import React from 'react';
import styled from 'styled-components';

//import { Button, TextField } from '../../../components';
//import { contactImage } from '../../../assets';
import  useScrollFadeIn  from '../hooks/useScrollFadeIn';

const S = {
  Wrapper: styled.section`
    width: 100%;
    width: 1180px;
    margin: auto;
    padding: 120px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  Image: styled.div`
    width: 580px;
    height: 580px;
    
  `,
  TextWrapper: styled.div`
    box-sizing: border-box;
    width: 580px;
    padding-left: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  Label: styled.p`
    display: inline-block;
   

    margin-bottom: 1rem;
  `,
  Title: styled.h2`


    margin-bottom: 1rem;
  `,
  Description: styled.p`


    margin-bottom: 2rem;
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
    input {
      margin-bottom: 1rem;
      width: 70%;
    }
    button {
      width: 70%;
    }
  `,
};

const Contact = () => {
  const animatedItem = {
    0: useScrollFadeIn('up', 1, 0),
    1: useScrollFadeIn('down', 1, 0.2),
    2: useScrollFadeIn('left', 1, 0.3),
    3: useScrollFadeIn('up', 1, 0.4),
  };

  return (
    <S.Wrapper>

      <S.TextWrapper>
        <S.Label {...animatedItem[0]}>Contact us</S.Label>
        <S.Title {...animatedItem[1]}>
          Est placerat in egestas
          <br />
          erat imperdiet
        </S.Title>
        <S.Description {...animatedItem[2]}>
          Consequat interdum varius sit amet mattis vulputate enim. Sit amet
          nulla facilisi morbi tempus. Nulla facilisi cras fermentum odio eu.
        </S.Description>
        <S.Form {...animatedItem[3]}>
        
        </S.Form>
      </S.TextWrapper>
    </S.Wrapper>
  );
};

export default Contact;