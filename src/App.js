import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from './components/NavMenu';
import ThemeProvider from './context/ThemeContext';

function App() {
  
  return (
    <>
      <ThemeProvider>
        <NavMenu/> 
      </ThemeProvider>
    </>
  );
}

export default App;
