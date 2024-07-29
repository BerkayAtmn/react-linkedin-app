// src/components/Header/Header.tsx
import React from 'react';
import styled from 'styled-components';
import LanguageSwitcher from './LanguageSwitcher';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #0073b1;
  color: white;
`;

const Logo = styled.div`
  font-size: 2.5em;
  font-weight: bold;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>Linkedln</Logo>
      <LanguageSwitcher />
    </HeaderContainer>
  );
};

export default Header;