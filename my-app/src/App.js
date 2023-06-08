import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';
import ExplorePage from './pages/ExplorePage';
import ProblemsPage from './pages/ProblemsPage';
import InterviewPage from './pages/InterviewPage';
import ContestPage from './pages/ContestPage';
import DiscussPage from './pages/DiscussPage';
import StorePage from './pages/StorePage';

//you can als
const HomePage = () => (
  <>
    <Header />
    <Content />
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/problems" element={<ProblemsPage />} />
        <Route path="/interview" element={<InterviewPage />} />
        <Route path="/contest" element={<ContestPage />} />
        <Route path="/discuss" element={<DiscussPage />} />
        <Route path="/store" element={<StorePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
