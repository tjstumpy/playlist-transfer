import { useEffect } from 'react';
import { Container } from '@mui/material';
import './App.scss';
import Navbar from './components/common/Navbar/Navbar';
import Layout from './components/pages/Layout/Layout';

function App() {

  useEffect(() => {
    document.title = "Playlist Transfer";
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Container sx={{ bgcolor: '$bg-dark', height: '100%' }}>
        <Layout /> {/* This is the component that will be rendered in the main content area */}
      </Container>
    </div>
  );
}

export default App;
