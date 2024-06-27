import { BiColor } from 'react-icons/bi';
import './App.css';
import Menu, { Advert, Navbar } from './Navbar';
import Items from './Items';
import Footer, { Bottomheader, Links } from './Footer';
import Landing from './Landing';


function App() {
  return (
<div>
  
  <Menu/>
  <Navbar/>
  <Advert/>
  <Landing/>
  <Items/>
  <Footer/>
  <Links/>
  <Bottomheader/>
</div>
  );
}

export default App;
