import './App.css';
import Commit from './Components/Commit/Commit';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Latest from './Components/LatestPost/Latest';
import Learn from './Components/Learning/Learn';
import Student from './Components/Students/Student';

function App() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <>
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <Header />
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <Learn />
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <Student />
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <Latest />
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <Commit />
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <Footer />
    </>
  );
}

export default App;
