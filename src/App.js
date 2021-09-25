import './App.css';
import React from 'react';
import styled from 'styled-components';
import Sidebar from './Components/Sidebar';
import MainContent from './Components/MainContent';

function App() {
  return (
    <Container>
      <Sidebar />
      <MainContent />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 97vh;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 1rem;
  @media screen and (min-width: 320px) and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export default App;
