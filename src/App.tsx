import React, { useState } from 'react';
import './App.css';
import GlobalStyles from './styles/GlobalStyles';
import Profile from './components/Profile/Profile';
import ExperienceList from './components/Experience/ExperienceLists';
import Skills from './components/Skills/Skills'
import Header from './components/Header/Header';
import Education from './components/Education/EducationList';
import Login from './components/Login/Login';
import Languages from './components/Languages/Languages';
import Awards from './components/Awards/Awards';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <Header />
          <div>
            <Profile />
            <ExperienceList />
            <Skills />
            <Education />
            <Awards />
            <Languages />
          </div>
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;