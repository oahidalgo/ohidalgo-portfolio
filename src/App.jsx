import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import { UIProvider } from './context/UIContext';
import AppLayout from './ui/AppLayout';
import HomePage from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';
import WorkExperience from './features/work-exp/WorkExperience';
import ProjectDetail from './features/work-exp/ProjectDetail';

function App() {
  return (
    <UIProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route index element={<Navigate replace to='home' />} />
            <Route path='home' element={<HomePage />} />
            <Route path='experience' element={<WorkExperience />} />
            <Route path='experience/:companyId' element={<WorkExperience />} />
            <Route
              path='experience/:companyId/:projectId'
              element={<ProjectDetail />}
            />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </UIProvider>
  );
}

export default App;
