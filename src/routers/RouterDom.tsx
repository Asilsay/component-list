import ScrollToTop from '@/components/ScrollToTop';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('@/pages/Homepage'));
const Alert = lazy(() => import('@/pages/AlertPage'));

const RouterDom = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={'loading ...'}>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/alert"
            element={<Alert />}
          />
        </Routes>
      </Suspense>
      <ScrollToTop />
    </BrowserRouter>
  );
};

export default RouterDom;
