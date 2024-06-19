import Home from './pages/HomePage';
import GlobalStyles from './styles/GlobalStyles';
import AppLayout from './ui/AppLayout';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route index element={<Navigate replace to='home' />} />
            <Route path='home' element={<Home />} />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
