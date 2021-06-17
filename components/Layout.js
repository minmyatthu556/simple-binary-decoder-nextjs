import Header from './Header';
import Navbar from './Navbar';

const Layout = (props) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navbar />
      {props.children}
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p className="text-gray-500 text-sm">Made by mmt</p>
      </footer>
    </div>
  );
};

export default Layout;
