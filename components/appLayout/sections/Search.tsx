import React from 'react';
import Link from 'next/link';
import { ImageContainer } from 'components/commons';
import Mic from 'assets/Icons/MicIcons';
// import Mic from 'public/static/images/mic.svg';
import {
  Container,
  SearchLogoContainer,
  LogoContainer,
  Logo,
  Title,
  SearchForm,
  SearchInputContainer,
  SearchInput,
  SearchFormContainer,
  MicContainer,
} from './SearchStyles';

const Search = () => {
  return (
    <Container>
      <SearchLogoContainer>
        <SearchFormContainer>
          <LogoContainer>
            <Link href='https://naver.com'>
              <Logo>
                {/* <ImageContainer width='4.2rem' height='4.2rem'>
                  <Image src={GetitLogo} alt='getit logo' layout='fill' />
                </ImageContainer> */}
                G
              </Logo>
            </Link>
            <Title>Getit</Title>
          </LogoContainer>
          <SearchForm action='' name='search' role='search'>
            <SearchInputContainer>
              <SearchInput
                type='text'
                autoComplete='off'
                placeholder='검색어를 입력해주세요.'
              />
            </SearchInputContainer>
          </SearchForm>

          <MicContainer>
            {/* <ImageContainer width='3.6rem' height='3.6rem'> */}
            {/* <Image src={Mic} alt='mic' /> */}
            <Mic color='#4dd290' width={3.6} height={3.6} />
            {/* </ImageContainer> */}
          </MicContainer>
        </SearchFormContainer>
      </SearchLogoContainer>
    </Container>
  );
};

export default Search;
