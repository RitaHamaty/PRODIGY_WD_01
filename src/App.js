import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from './components/NavMenu';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import { useThemeContext } from './context/ThemeContext';

function App() {

  const {theme} = useThemeContext();
  
  return (
    <>
      <NavMenu/> 
      <div className={`back ${theme}`}>
        <Home/>
        <Services />
        <About />
      </div>
    </>
  );
}

export default App;