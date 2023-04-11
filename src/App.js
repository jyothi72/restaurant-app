import React from'react'
import Meals from './components/Meals/meals';
import  Headered from './components/layout/Header'
function App() {
  return (
    <React.Fragment>
      <Headered/>
      <main>
         <Meals/>
      </main>
    </React.Fragment>
  );
}

export default App;
