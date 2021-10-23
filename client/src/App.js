import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ItemDetails from './components/ItemDetails/ItemDetails';

function App() {
  return (
    <Router>
      <Header></Header>
      <div className="main container py-3">
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route  path="/item/:id">
          <ItemDetails></ItemDetails>
        </Route>
      </div>

      <Footer></Footer>
    </Router>
  );
}

export default App;
