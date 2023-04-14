import './App.css';
import Commit from './Components/Commit/Commit';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Latest from './Components/LatestPost/Latest';
import Learn from './Components/Learning/Learn';
import Student from './Components/Students/Student';

function App() {
  return (
    <>
      <Header />
      <Learn />
      <Student />
      <Latest />
      <Commit />
      <Footer />
    </>
  );
}

export default App;
