import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import Form from './components/Form/CreateGame';

import { ThemeProvider } from 'styled-components';
import { themes } from './styles/themes';
import { useDarkMode } from './DarkLight/DarkMode';
import NavBar from './components/NavBar/NavBar';

function App() {
  const [theme, setTheme] = useDarkMode();
  const themeMode = theme === 'light' ? 'light' : 'dark'


  return (
    
    <BrowserRouter>
      <ThemeProvider theme={themes[themeMode]}>
          <NavBar theme={theme} setTheme={setTheme}/>
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/videogame/:id' component={Detail}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/videogame' component={Form}/>
          </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
