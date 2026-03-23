import { Outlet } from 'react-router-dom';
// import Navbar from '../Components/Navbar/Navbar';
import Background from '../Components/Background/Background';
import './Layout.scss';

const Layout = () => {
  return (
    <Background color="default">
      {/* <Navbar /> */}
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </Background>
  );
};

export default Layout;