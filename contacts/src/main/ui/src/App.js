import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="container pt-3">
      <h1>Contacts management</h1>
      <Button variant="outline-secondary" href="/create" style={{margin: "10px"}}>Add contact</Button>
      <Button variant="outline-secondary" style={{margin: "10px"}}>View contacts</Button>
    </div>
    
  );
}

export default App;
