import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import './App.css';
import Acceuil from './Acceuil';
import Competence from './competence';
import Formation from './formation';
import {BrowserRouter , Link, Route,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (

    <div className="App">

     <BrowserRouter>

     <Navbar bg="light" expand="lg">
   <Navbar.Brand href="#home">React-js</Navbar.Brand>
   <Navbar.Toggle aria-controls="basic-navbar-nav" />
   <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
     <div className="row col-12">
     <Nav className="col-12 ml-auto">
      <Nav.Link href="#acceuil">Acceuil</Nav.Link>
      <Nav.Link href="#competence">Competence</Nav.Link>
      <Nav.Link href="#formation">Formation</Nav.Link>
      </Nav></div>
      </Navbar>
      
      

      
    
  
     <Switch>
       
       <Route exact path="/" component={Acceuil}></Route>
       <Route path="/competence" component={Competence}></Route>
       <Route path="/formation" component={Formation}></Route>
     </Switch>

 
     </BrowserRouter>

    

    </div>
  );
}

export default App;
