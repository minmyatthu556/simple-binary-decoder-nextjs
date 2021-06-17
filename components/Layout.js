import Header from './Header';
import Navbar from './Navbar';

const Layout = (props) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navbar />
      {props.children}
      <footer className="flex items-center justify-center absolute bottom-0 w-full py-4 border-t">
        <p className="text-gray-500 text-xs md:text-sm">Made by mmt</p>
      </footer>
    </div>
  );
};

export default Layout;
