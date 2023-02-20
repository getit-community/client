import React from 'react';
import Link from 'next/link';
import { MicIcons } from 'assets/Icons';
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
            <MicIcons width={'3.6rem'} height={'3.6rem'} color={'#4dd290'} />
          </MicContainer>
        </SearchFormContainer>
      </SearchLogoContainer>
    </Container>
  );
};

export default Search;
