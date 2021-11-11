import React from 'react';
import {Container, Navbar, Nav} from "react-bootstrap";
import {Route, Routes } from "react-router";
import {Link} from 'react-router-dom';
import ToDoList from './pages/ToDoList';
import News from './pages/News';

function auth() {
  let data = {"username" : "oper", "password": "oper"};
  fetch('https://sas.front.kreosoft.space/api/auth', {
      credentials: 'same-origin',  
      method: 'POST',              
      body: JSON.stringify(data),  
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
  })
  .then(res => res.json())
  .then(
    (result) => {
      localStorage.setItem('token', result.accessToken);
    }
  )
}

function App() {
  auth();
  return (
    <div className="App">
      
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
        <Route exact path="/" element={<News/>}/>
        <Route path="/todos" element={<ToDoList/>}/>
      </Routes>
    </div>
  );
}

export default App;
