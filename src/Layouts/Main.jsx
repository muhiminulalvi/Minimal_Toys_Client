
import { Outlet } from 'react-router-dom';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';

const Main = () => {
    return (
        <>
            <Header />
            <Outlet></Outlet>
            <Footer />
        </>
    );
};

export default Main;