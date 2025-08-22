import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppShell } from '@mantine/core';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';

const App: React.FC = () => {
  return (
    <Router>
      <AppShell 
        header={{ height: 60 }} 
        padding={0}
        styles={{
          main: {
            minHeight: 'calc(100vh - 60px)',
          }
        }}
      >
        <AppShell.Header>
          <Navbar />
        </AppShell.Header>
        <AppShell.Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </AppShell.Main>
      </AppShell>
    </Router>
  );
};

export default App;
