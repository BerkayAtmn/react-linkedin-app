import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import backgroundGif from '../../images/linked.gif';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../Header/LanguageSwitcher';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  height: 100vh;
  background-image: url(${backgroundGif});
  background-size: cover;
  background-position: center;
`;

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  width: 200px;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px;
  width: 220px;
`;

const ErrorMessage = styled.p`
  color: red;
`;

const Login: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { t } = useTranslation();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', { username, password });
      if (response.status === 200) {
        onLogin();
      }
    } catch (err) {
      setError(t('login.error'));
    }
  };

  return (
    <><LanguageSwitcher /><LoginContainer>
      <h1>Linkedln</h1>
      <Input type="text" placeholder={t('login.username')} value={username} onChange={e => setUsername(e.target.value)} />
      <Input type="password" placeholder={t('login.password')} value={password} onChange={e => setPassword(e.target.value)} />
      <Button onClick={handleLogin}>{t('login.button')}</Button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </LoginContainer></>
  );
};

export default Login;
