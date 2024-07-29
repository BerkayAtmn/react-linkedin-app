// src/components/Languages/Languages.tsx
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

// Styled components for the languages section
const LanguagesContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 60px;
  background-color: white;
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  margin-bottom: 20px;
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 20px;
`;

const LanguagesHeader = styled.h2`
  margin-right: 50px;
`;

const LanguageList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const LanguageItem = styled.li`
  margin: 10px;
  padding: 10px 15px;
  
`;

const Languages: React.FC = () => {
    // Sample languages data
    const languages = ['English', 'Spanish', 'French'];
    const { t } = useTranslation();

    return (
      <LanguagesContainer>
        <LanguagesHeader>{t('languages.languages')}</LanguagesHeader>
        <LanguageList>
          {languages.map((language, index) => (
            <LanguageItem key={index}>{language}</LanguageItem>
          ))}
        </LanguageList>
      </LanguagesContainer>
    );
  };

export default Languages;
