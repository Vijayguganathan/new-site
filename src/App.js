
import Aboutus from './Aboutus';
import './App.css';
import Blog from './Blog';
import Footer from './Footer';
import Home from './Home';
import Menu from './Menu';
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      
      <Routers>
     <Menu/>
     <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<Aboutus title='Aboutus:' cont='AboutUs.com is a wiki Internet domain directory. It lists websites along with information about their content. As a wiki, AboutUs allows Internet users to add entries or modify information. AboutUs.com has since become a wiki for more than just websites.
'  btcont='More details...'/>}></Route>
       <Route path='/blog' element={<Blog/>}></Route>
     </Routes>
     </Routers>
     <Aboutus title='Our Service:' cont='Our Service.com is a wiki Internet domain directory. It lists websites along with information about their content. As a wiki, AboutUs allows Internet users to add entries or modify information. AboutUs.com has since become a wiki for more than just websites.' btcont='More details...'/>
     <Footer/>
    </div>
  );
}

export default App;
