import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import DestinationDetails from './pages/DestinationDetails';
import Tours from './pages/Tours';
import TourDetails from './pages/TourDetails';
import Booking from './pages/Booking';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Experiences from './pages/Experiences';
import Wishlist from './pages/Wishlist';
import NotFound from './pages/NotFound';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    React.useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);

    return null;
};

const App = () => (
    <>
        <ScrollToTop />
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="destinations" element={<Destinations />} />
                <Route path="destinations/:slug" element={<DestinationDetails />} />
                <Route path="tours" element={<Tours />} />
                <Route path="tours/:slug" element={<TourDetails />} />
                <Route path="experiences" element={<Experiences />} />
                <Route path="booking" element={<Booking />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="blog" element={<Blog />} />
                <Route path="blog/:slug" element={<BlogDetails />} />
                <Route path="wishlist" element={<Wishlist />} />
                <Route path="home" element={<Navigate to="/" replace />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    </>
);

export default App;