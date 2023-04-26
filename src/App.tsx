import React from 'react';
import './App.css';
import Header from "./components/Header"
import Main from "./components/MainPage/MainPage"

const App : React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Main/>
      </header>
    </div>
  );
}

export default App;
