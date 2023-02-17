import React from 'react';
import Link from 'next/link';
import Getit from 'public/static/images/getit.webp';
import { ImageContainer } from 'components/commons';
import { Title } from './SearchStyles';
import Image from 'next/image';

const Logo = () => {
  return (
    <div>
      <Link href='https://naver.com'>
        <a>
          <ImageContainer width='4.2rem' height='4.2rem'>
            <Image src={Getit} alt='getit logo' layout='fill' />
          </ImageContainer>
        </a>
      </Link>
      <Title>Getit</Title>
    </div>
  );
};

export default Logo;
