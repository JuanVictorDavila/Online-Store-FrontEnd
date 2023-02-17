import React from 'react';
/* import { Route, BrowserRouter, Routes} from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import Cadastro from './Pages/Cadastro'; */
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';
import NavBar from './Components/NavBar';
import Card from './Components/Card';

class App extends React.Component {
  render() {
    return (
      <>
        <div>
          <Header />
        </div>
        <nav>
          <NavBar />
        </nav>
        <div>
          <Card />
        </div>
        {/* <BrowserRouter>
          <Routes>
            <Route path='/login' element={ <LoginPage /> } />
            <Route path='/cadastro' element={ <Cadastro /> } />
          </Routes> 
        </BrowserRouter> */}
        <footer class="py-5 bg-footer">
          <Footer />
        </footer>
      </>
    );
  }
}

export default App;
