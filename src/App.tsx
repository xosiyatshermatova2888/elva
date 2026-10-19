import { motion } from 'framer-motion';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Cart from './components/Cart';
import Footer from './components/Footer';
import MobileQuickNav from './components/MobileQuickNav';
import Navbar from './components/Navbar';
import ScrollManager from './components/ScrollManager';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Menu from './pages/Menu';
import NotFound from './pages/NotFound';

function Layout() {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollManager />
      <Navbar />
      <motion.main key={pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <Outlet />
      </motion.main>
      <Footer />
      <Cart />
      <MobileQuickNav />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
