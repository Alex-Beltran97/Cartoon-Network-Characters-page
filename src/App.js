import './App.css';
import Container from './components/Container.js';
import data from './data.js';
import React from 'react';
import Header from './components/Header.js';

function App() {

  return (
    <div className="App">
      <Header/>
      {
        data.map(item=>{
          return(
            <React.Fragment key={item.name}>
              <Container
                name={item.name}
                serie={item.serie}
                year={item.year}
                img={item.img}
                logo={item.img}
                msg={item.msg}
              />
            </React.Fragment>
          ) 
        })
      }
      </div>
  );
}

export default App;
