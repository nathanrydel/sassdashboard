import './App.css';
import styled from 'styled-components';
import sidebar from './Components/sidebar';
import mainContent from './Components/mainContent';

function App() {
  return (
    <Container>
      <sidebar />
      <mainContent />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 97vh;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 1rem;
`;

export default App;
