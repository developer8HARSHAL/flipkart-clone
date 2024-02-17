import React from 'react';
import logo from './logo512.png';
import { ReactComponent as SearchIcon } from './search.svg';
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import Dropdown from './Dropdown';

function Header() {
  return (
    <nav className='bg-white flex items-center justify-start gap-10 '>
      <div className='flex items-center'>
        <img src={logo} className="App-logo h-15 w-16 mr-19" alt="logo" />
      </div>


      <div className="search-container bg-slate-100 flex items-center space-x-4 px-4 rounded-[5px]">
        <SearchIcon className="search-icon h-[25px] w-[25px] " />
        <input placeholder="Search for Products, Brands and More" className='bg-slate-100 h-[40px] w-[680px] border-none' name="myInput" />
      </div>

      <div className='flex gap-1 cursor-pointer'>
        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="Login" class="-dOa_b L_FVxe" width="24" height="24"></img>
      <Dropdown />
      </div>
<div className='flex gap-1 cursor-pointer'>
<img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="Login" class="-dOa_b L_FVxe" width="24" height="24"></img>
<p>Cart</p>
</div>

<div className='flex gap-1 cursor-pointer'>
<img src="	https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg" alt="Login" class="-dOa_b L_FVxe" width="24" height="24"></img>

<a class="_1krdK5 _3jeYYh" href="#" title="Become a Seller">Become a Seller</a>
</div>

<div className='flex gap-1 cursor-pointer'>
<img class="-dOa_b" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg" width="24" height="24" alt="Dropdown with more help links"></img>

</div>


    </nav>
    
  );
}

export default Header;
