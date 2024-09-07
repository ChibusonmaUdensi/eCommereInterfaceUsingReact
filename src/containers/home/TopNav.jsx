import React, { useState } from 'react'
import Input from '../../components/Input';
import SearchIcon from '../../assets/images/SearchIcon.png';
import CartIcon from '../../assets/images/CartIcon.png';
import DropdownIcon from '../../assets/images/DropdownIcon.png';
import ProfileImage from '../../assets/images/ProfileIcon.png';
import Rectangle from '../../assets/images/Rectangle.png';
import './style/TopNav.css';

const TopNav = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (e) => {
        console.log("searchValue 1 --> ", e.target.value);
        setSearchValue(e.target.value);
    }
    console.log("searchValue 2 --> ", searchValue);
    
  return (    
    <div className='topnav'>
               <div className='topnav_container'>
        <p className='topnav_logo'>{searchValue}</p>
            <div className='shop'> Shop.Co</div>       
        <ul className='topnav_List'>
            <li className='List_items'>
                <span >Shop</span>
                <img src={DropdownIcon} alt="DropdownIcon" />
            </li>
            <li className='List_itemss'>On Sale</li>
            <li className='List_itemsss'>New Arrivals</li>
            <li className='List_itemssss'>Brands</li>
        </ul>
        <div className='topnav_input'>
            <Input
                image={SearchIcon}
                type='text'
                placeholder='Search for products...'
                value={searchValue}
                onChange={(e) => handleSearch(e)}
            />
        </div>
        <div className='topnav_cart_container'>
            <img className='cart_container_first' src={CartIcon} alt="CartIcon" />
            <img className='cart_container_second' src={ProfileImage} alt="ProfileIcon" />
            <img className='cart_container_third' src={CartIcon} alt="CartIcon" />
            <img className='cart_container_fourth' src={ProfileImage} alt="ProfileIcon" />
        </div>
    </div>

        <div className='topnav_rectangle'>
        <div className='img'><img src={Rectangle} alt="Rectangle" className='rectangle_image' /> </div> 
        <div className='textBox'> 
          <h1 className='find'> FIND CLOTHES </h1>
           <h1 className='find'> THAT MATCHES </h1>
           <h1 className='find'>  YOUR STYLE</h1>
             <p className='browseThrough'>Browse through our diverse range of meticulously crafted garments, designed</p>
             <p className='browseThrough'> to bring out your individuality and cater to your sense of style.</p>
            <div className='blackBox'>
                <h1 className='shopnow'> Shop Now </h1>
            </div>
        </div>
        <div className='brandcred'>
        <h1 className='brands' >200+
            <scan className='intl'>International Brands</scan></h1>
        <h1 className='brands'> 2,000+
            <scan className='intl'>High Quality Products</scan> </h1>
        <h1 className='brands'> 30,000+
            <scan className='intl'>Happy Customers</scan> </h1>
        </div>
        </div>
        <div className='herosection'>
            <h1 className='versace'> VERSACE</h1>
            <h1 className='zara'> ZARA</h1>
            <h1 className='gucci'> GUCCI</h1>
            <h1 className='prada'> PRADA</h1>
            <h1 className='calvin'> Calvin Klein</h1>
        </div>
    </div>
  )
}

export default TopNav
