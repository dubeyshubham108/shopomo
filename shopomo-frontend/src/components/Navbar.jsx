import React, { useContext } from "react";
import logo from "../assets/shopomo_logo.png";
import cart from "../assets/frontend_assets/cart_icon2.png";
import search_icon from "../assets/frontend_assets/search_icon.png";
import profile from "../assets/frontend_assets/profile_icon.png";
import menu_icon from "../assets/frontend_assets/menu_icon.png";
import { NavLink, Link } from "react-router-dom";
import dropdown_icon from "../assets/frontend_assets/dropdown_icon.png";
import { useState } from "react";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {

    const [ visible, setVisible ] = useState(false);
    const { setShowSearch, getCartCount } = useContext(ShopContext);
   

    return (
        <div className="flex items-center justify-between py-5 font-medium">

            <Link to={'/'}><img src={logo} 
            className="w-40 cursor-pointer" 
            alt="Logo of Shopomo" 
            />
            </Link>

            <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
            <NavLink to='/' className = 'flex flex-col items-center gap-1'>
                <p>HOME</p>
                <hr className='w-1/1 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/collection' className = 'flex flex-col items-center gap-1'>
                <p>COLLECTION</p>
                <hr className='w-1/1 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/about' className = 'flex flex-col items-center gap-1'>
                <p>ABOUT</p>
                <hr className='w-2/2 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/contact' className = 'flex flex-col items-center gap-1'>
                <p>CONTACT</p>
                <hr className='w-2/2 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            </ul>

            <div className="flex item-center gap-6"> 
                <img onClick={() => setShowSearch(true)} src={search_icon} className="w-4 cursor-pointer" alt="Cart icon" />
                <div className="group relative">
                    <img className="w-5.5 cursor-pointer" src={profile} alt="Profile icon" />
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                            <p className='cursor-pointer hover:text-black'>My Profile</p>
                            <p className="cursor-pointer hover:text-black">Orders</p>
                            <p className="cursor-pointer hover:text-black">Logout</p>
                        </div>
                    </div>
                </div>

                <Link to='/cart' className='relative'>
                    <img src={cart} className="w-7 min-w-5" alt="cart icon" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[-5px] '>{getCartCount()}</p>
                </Link>

                <img onClick={() => setVisible(true)} src={menu_icon} className="w-5 cursor-pointer sm:hidden" alt="Menu icon"/>
            </div>

            {/* Sidebar menu for small screens */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${ visible ? 'w-full': 'w-0'}`}>
                <div className="flex flex-col text-gray-600">
                    <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                        <img className="h-4 rotate-180" src={ dropdown_icon } alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
                </div>
            </div>
        </div>
    )
};

export default Navbar;