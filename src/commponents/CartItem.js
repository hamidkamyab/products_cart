import React from 'react'
import * as BS from 'react-icons/bs'
function CartItem({item,changeQTY,delCartItem}) {
  return (
    <div className='cartItem d-flex flex-column gap-3'>
      <div className="product-details d-flex align-items-start gap-2">
        <div className="right">
          <div className="product-img">
            <img src={item.img} className='w-100' />
          </div>
        </div>
        <div className="left">
          <p className="title">
            {item.title}
          </p>
        </div>
      </div>
      <div className="cart-item-bottom d-flex justify-content-between align-items-center">
        <div className="cart-op d-flex align-items-center gap-2">
          <div className="op-box border border-1 d-flex align-items-center justify-content-between">
            <button className='btn border-0' onClick={()=>changeQTY('plus',item.id)}><BS.BsPlus /></button>
            <span className='byekan '>{item.qty}</span>
            <button className='btn border-0' onClick={()=>changeQTY('minus',item.id)} disabled={item.qty > 1?false:true}><BS.BsDash /></button>
          </div>
          <button className='btn border border-1 bg-danger text-white' onClick={()=>delCartItem(item.id)}><BS.BsTrash /></button>
        </div>
        <div className="product-price byekan">
          {parseInt(item.price).toLocaleString()} تومان
        </div>
      </div>
    </div>
  )
}

export default CartItem
