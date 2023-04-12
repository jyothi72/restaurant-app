import React,{useState}from'react'
import Cart from './components/Cart/cart';
import Meals from './components/Meals/meals';
import  Headered from './components/layout/Header'
function App() {
  const[showoverlay,setshowoverlay]=useState(false)
  const overlayshow=()=>{
    setshowoverlay(true)
  }
  const overlayhide=()=>{
    setshowoverlay(false)
  }
  return (
    <React.Fragment>
     {showoverlay&&<Cart onClose={overlayhide} />}
      <Headered onClick={overlayshow}/>
      <main>
         <Meals/>
      </main>
    </React.Fragment>
  );
}

export default App;
