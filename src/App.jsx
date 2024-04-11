import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './assets/style.css'
import Loader from "./components/Loader";
const Home = lazy(() => import('./page/Home'));
function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
  return (
    <>
      <Suspense fallback={<Loader />}>
      <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<h1>No Match</h1>} />
        </Routes>
      </Suspense>
    {/* <Footer /> */}
    </>
  )
}

export default App
