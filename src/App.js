import React from 'react';
import Banner from './components/Banner/banner';
import Brief from './components/Brief/brief';
import SliderComp from './components/slider/slider'
import Footer from './components/Footer/footer';
import Login from './components/Login/login';
import Contact from './components/contactus/contact';

function App() {
  return (
<div className='bg-black'>
<Banner/>
<Brief/>
<SliderComp />
<Contact/>
<Footer/>

</div>
  );
}

export default App;
