import './index.css';
import {FaCartPlus} from 'react-icons/fa';
import {FaPersonBooth} from 'react-icons/fa';
import {FaSearch} from 'react-icons/fa';
import {FaShoppingBag} from 'react-icons/fa';



export function Advert(){
    return(
        <div className='advert'>
  <h5>+++ 1000+ FASHION STYLES TO CHOOSE, 100+ NEW ARRIVALS EACH DAY, BUY NOW! +++</h5>

</div>
    );
};

export function Navbar(){
  return(
    <div className='nav-items'>
      <FaShoppingBag size={50} color='hotpink'/>
<li><a>Home</a></li>
<li><a>About</a></li>
<li><a>Categories</a></li>
<li><a>Contact</a></li>
    </div>
  );
};

const Menu = ()=>{
    return(
        <div className='top-header'>
            
<h6>English</h6>
<h6>USD</h6>
<h6>FREE SHIPPING on all orders over $100</h6>
<div className='icons'>
<FaCartPlus/>
<FaPersonBooth/>
<FaSearch/>
</div>


        </div>
    )
}
export default Menu;