import React from 'react';
import Navbar from './components/Navbar';
import ListContextProvider from './contexts/ListContext';
import List from './components/List';
import Form from './components/Form';


function App() {
  return (
    <div className="App">
      <ListContextProvider>
        <Navbar></Navbar>
        <List></List>
        <Form></Form>
      </ListContextProvider>
    </div>
  );
}

export default App;
