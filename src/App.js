import './App.css';
import Footer from './component/footer/Footer';
import Logo from './component/logo/Logo';
import { Main } from './component/main/Main';
import Navbar from './component/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Footer/> 
      <Logo/>
    </div>
  );
}

export default App;
