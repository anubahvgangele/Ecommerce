import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import  CartItem  from '../component/cartItem'
import { FiShoppingBag, FiArrowLeft, FiShield } from "react-icons/fi";


export const Cart = () => {

  const {cart} = useSelector((state) => state)
  

  
  const [totalAmount,settotalAmount] = useState(0);

  useEffect(()=>{
      settotalAmount(cart.reduce((acc,curr) => acc + curr.price,0))
  },[cart]);

  return (
     <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Shopping Bag
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Your Cart
            </h1>
            <p className="mt-2 text-gray-500">
              Review your items before checkout.
            </p>
          </div>

          <Link
            to="/"
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 font-semibold text-gray-700 shadow-sm transition hover:border-indigo-300 hover:text-indigo-600"
          >
            <FiArrowLeft />
            Continue Shopping
          </Link>
        </div>

        {cart.length > 0 ? (
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">

            {/* Cart Items */}
            <div className="space-y-5 lg:col-span-2">
              <div className="flex items-center justify-between rounded-2xl border border-gray-100 bg-white px-6 py-4 shadow-sm">
                <h2 className="font-bold text-gray-900">
                  Cart Items
                </h2>
                <span className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-700">
                  {cart.length} {cart.length === 1 ? "Item" : "Items"}
                </span>
              </div>

              <div className="space-y-4">
                {cart.map((item, index) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-gray-100 bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.09)] sm:p-6"
                  >
                    <CartItem
                      item={item}
                      itemIndex={index}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <aside className="lg:sticky lg:top-8">
              <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_8px_35px_rgba(0,0,0,0.07)]">

                <div className="border-b border-gray-100 px-6 py-5">
                  <h2 className="text-xl font-bold text-gray-900">
                    Order Summary
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    Your order at a glance
                  </p>
                </div>

                <div className="space-y-4 px-6 py-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Total Items</span>
                    <span className="font-semibold text-gray-900">
                      {cart.length}
                    </span>
                  </div>

                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-semibold text-gray-900">
                      ${Number(totalAmount).toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="font-semibold text-emerald-600">
                      Free
                    </span>
                  </div>

                  <div className="border-t border-dashed border-gray-200 pt-5">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-bold text-gray-900">
                        Total Amount
                      </span>
                      <span className="text-2xl font-extrabold text-indigo-600">
                        ${Number(totalAmount).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-4 font-bold text-white shadow-lg shadow-indigo-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl active:scale-[0.98]"
                  >
                    <FiShoppingBag size={19} />
                    Proceed to Checkout
                  </button>

                  <div className="flex items-center justify-center gap-2 pt-2 text-xs text-gray-500">
                    <FiShield className="text-emerald-600" size={16} />
                    Secure checkout experience
                  </div>
                </div>
              </div>
            </aside>
          </div>
        ) : (
          /* Empty Cart */
          <div className="rounded-3xl border border-gray-100 bg-white px-6 py-16 text-center shadow-sm sm:py-24">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
              <FiShoppingBag size={36} />
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              Your cart is empty
            </h2>

            <p className="mx-auto mt-3 max-w-md text-gray-500">
              Looks like you haven't added anything to your cart yet.
              Explore our collection and find something you love.
            </p>

            <Link
              to="/"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-700"
            >
              <FiShoppingBag />
              Start Shopping
            </Link>
          </div>
        )}

        {/* Footer note */}
        <p className="mt-8 text-center text-sm text-gray-400">
          Thank you for shopping with us.
        </p>
      </div>
    </div> 
  )
}

