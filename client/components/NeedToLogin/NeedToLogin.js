import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Button from '../Button';
import { fadeIn } from '../../helpers/animations';

const Wrapper = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  margin: 24px 0 64px;

  a {
    text-decoration: none;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: -32px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 32px;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 300;
  padding-right: 32px;
  margin-bottom: 48px;

  @media only screen and (max-width: 768px) {
    font-size: 22px;
    text-align: center;
    padding-right: 0;
    margin-bottom: 32px;
    padding: 0 40px;
  }

  @media only screen and (max-width: 448px) {
    font-size: 18px;
    text-align: center;
    margin-bottom: 24px;
  }
`;

const Image = styled.img`
  flex: 0 0 60%;
  width: 60%;
  max-width: 100%;
  height: auto;

  @media only screen and (max-width: 768px) {
    flex-basis: 100%;
    width: 100%;
  }
`;

const NeedToLogin = () => (
  <Wrapper>
    <TitleWrapper>
      <Title>
        Creative Conners URL Shortener
      </Title>
      <Link href="https://creativeconners.com" prefetch>
        <a href="https://creativeconners.com" title="Creative Conners">
          <Button>Creative Conners Website</Button>
        </a>
      </Link>
    </TitleWrapper>
  </Wrapper>
);

export default NeedToLogin;
