import React from 'react';
import {Container, Navbar, Nav} from "react-bootstrap";
import {Route, Routes } from "react-router";
import {Link} from 'react-router-dom';
import './css/index.css'
import NewsContainer from './components/News/NewsContainer';
import ToDoList from './components/ToDo/ToDoList';

function App() {
  return (
    <div className="App d-flex flex-column flex-grow-1">
      
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">News</Nav.Link>
              <Nav.Link as={Link} to="/todos">ToDo List</Nav.Link>     
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route exact path="/" element={<NewsContainer/>}/>
        <Route path="/todos" element={<ToDoList/>}/>
      </Routes>


      <footer className="d-flex justify-content-center align-items-center py-3" style={{backgroundColor: "gray"}}>
        <div>Sticky footer example</div>
      </footer>
    </div>
  );
}

export default App;
