import React from 'react';
import Aside from './sections/Aside';
import Mydata from './sections/Mydata';
import Search from './sections/Search';

interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <>
      <div style={{ position: 'relative' }}>
        <Aside />
        <Mydata />
        <Search />
      </div>

      <div>{children}</div>
    </>
  );
};

export default AppLayout;
