import React from 'react'
import { MdShoppingCart } from "react-icons/md";
import { NavLink,Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



export const Navbar = () => {

  const {cart} = useSelector((state) => state);
  return (
    <nav className=' flex  justify-between items-center h-20 max-w-6xl mx-auto '>
        <Link to="/">

        <img
        className="h-[60px] w-30 object-contain"
        src="https://i.pinimg.com/736x/14/04/37/14043746b2285dee1b1a6a86caf7b0fe.jpg"
        alt="cart"
        />
        </Link>

        <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6 '>
        
            <NavLink to="/">
                <p>Home</p>
            </NavLink>

            <Link to="/cart">
                <div className='relative'>
                <MdShoppingCart className=' text-2xl hover:scale-[1.1] duration-[0.2s]' />
                    {
                      cart.length > 0 &&
                      <span className='absolute -top-1 -right-2 bg-green-500
                       rounded-full text-xs w-5 h-5 flex justify-center items-center animate-bounce text-white'>{cart.length}</span>
                    }
                </div>
            </Link>
            

        </div>

    </nav>
  )
}
