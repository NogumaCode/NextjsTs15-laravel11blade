import React from 'react';
import TopNav from './top_nav/page';
import Menu from './menu/page';



const Header = () => {
  return (
    <header id="header">
      <TopNav />
      <Menu />
    </header>
  );
};

export default Header;
