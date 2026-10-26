import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { remove } from '../redux/slices/cartSlices';
import { add } from '../redux/slices/cartSlices';

export const Product = ({post}) => {

    const {cart} = useSelector((state) => state);
    const dispatch = useDispatch();
    


    function removeFromCart(){
        dispatch(remove(post.id));
        toast.error("Item Removed from Cart");
    }
    function addToCart(){
        dispatch(add(post));
        toast.success("Item added to Cart");
    }

  return (
    <div className="flex flex-col items-center justify-between cursor-pointer
    rounded-xl p-4 bg-white
    shadow-[0_8px_25px_rgba(0,0,0,0.18)]
    hover:shadow-[0_12px_35px_rgba(0,0,0,0.30)]
    hover:scale-[1.03]
    transition-all duration-300 gap-3 ease-in-out  mt-10 ml-5 ">
        <div>
            <p className=' text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{post.title}</p>
        </div>
        <div>
            <p className='w-40 text-gray-400 font-normal text-[10px] text-left '>{post.description.split(" ").slice(0,10).join(" ") + ("...")}</p>
        </div>
        <div>
            <img src={post.image}  alt='product' className='h-[180px]'/>
        </div>
        <div className='flex gap-12'>
            <div>
                <p className='text-green-600 font-semibold items-center gap-12 w-full mt-5'>${post.price}</p>
            </div>
        
            {
                cart.some((p) => p.id === post.id) ? <button onClick={removeFromCart} className=' text-gray-700 border-2
                border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white  
                transition-all duration-300 gap-3 ease-in-out'>Remove Item</button> : <button onClick={addToCart}className=' text-gray-700 border-2
                border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white  
                transition-all duration-300 gap-3 ease-in-out'>Add Item</button>
            }
        </div>
            


    </div>
  )
}
