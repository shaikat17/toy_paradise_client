
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const CommonLayout = () => {
    return (
        <>
        <Navbar />
        <Outlet />
        <Footer />
        </>
    );
};

export default CommonLayout;