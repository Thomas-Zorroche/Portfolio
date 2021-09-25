import './App.css';
import './style/components.css';
import './style/style.css';

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Main } from './components/Main'

import { BrowserRouter } from 'react-router-dom';


function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
