import Header from './Header';
import Navbar from './Navbar';

const Layout = (props) => {
  return (
    <div className="bg-transparent-white box-border overflow-hidden">
      <div className="max-h-screen flex justify-center overflow-hidden">
        <div className="bg-blue-400 h-3/4 w-5/6 absolute opacity-75 animate-blob top-1/5 right-1/5 filter blur-4xl"></div>
        <div className="bg-yellow-200 h-4/5 w-5/6 absolute opacity-75 animate-blob bottom-1/5 right-1/3 filter blur-4xl animation-delay-2000"></div>
        <div className="bg-red-500 h-4/5 w-4/6 absolute opacity-75 animate-blob top-20 left-1/5 filter blur-4xl animation-delay-4000"></div>
      </div>

      <div>
        <Header />
        <Navbar />
        {props.children}
        <footer className="flex items-center justify-center w-full py-4 border-t">
          <p className="text-gray-400 text-xs md:text-sm">Made by mmt</p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
