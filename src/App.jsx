import Home from './pages/HomePage';
import GlobalStyles from './styles/GlobalStyles';
import AppLayout from './ui/AppLayout';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import ProjectDetail from './features/work-exp/ProjectDetail';
import { Query, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ModalLayout from './features/road/ModalLayout';
import WorkExperience from './features/work-exp/WorkExperience';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route index element={<Navigate replace to='home' />} />
            <Route path='home' element={<Home />}>
              <Route
                path='work-experience/:jobId'
                element={<WorkExperience />}
              />
              <Route path='project' element={<ProjectDetail />} />
            </Route>
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
