
import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/cartSlices";
import { FiTrash2, FiShoppingBag } from "react-icons/fi";
import { toast } from "react-toastify";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  function removeFromCart() {
    dispatch(remove(item.id));
    toast.success("Item removed from cart");
  }

  return (
    <div className="group flex flex-col gap-5 sm:flex-row sm:items-center">

      {/* Product Image */}
      <div className="flex h-36 w-full shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gray-50 p-4 sm:h-32 sm:w-32">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-contain transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Product Details */}
      <div className="flex min-w-0 flex-1 flex-col justify-between gap-4 sm:min-h-28">
        <div>
          <div className="mb-2 flex items-start justify-between gap-3">
            <h3 className="line-clamp-2 text-base font-bold leading-6 text-gray-800 transition group-hover:text-indigo-600 sm:text-lg">
              {item.title}
            </h3>

            {/* Mobile/desktop delete button */}
            <button
              onClick={removeFromCart}
              aria-label="Remove item from cart"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-500 transition duration-300 hover:border-red-500 hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-500/20 active:scale-90"
            >
              <FiTrash2 size={18} />
            </button>
          </div>

          <p className="text-sm text-gray-500">
            <FiShoppingBag className="mr-1 inline" size={14} />
            Added to your shopping bag
          </p>
        </div>

        {/* Price */}
        <div className="flex items-end justify-between border-t border-gray-100 pt-4">
          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-wider text-gray-400">
              Price
            </p>

            <p className="text-xl font-extrabold text-gray-900">
              ${Number(item.price).toFixed(2)}
            </p>
          </div>

          <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
            In Cart
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
