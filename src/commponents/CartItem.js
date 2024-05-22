import React from 'react'
import * as BS from 'react-icons/bs'
function CartItem() {
  return (
    <div className='cartItem d-flex flex-column gap-3'>
      <div className="product-details d-flex align-items-start gap-2">
        <div className="right">
          <div className="product-img">
            <img src='https://dkstatics-public.digikala.com/digikala-products/270c6076e397c36a0fb605c799089676e7454f19_1704631246.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90' className='w-100' />
          </div>
        </div>
        <div className="left">
          <p className="title">
            "گوشی موبایل موتورولا مدل Razr 40 Ultra تک سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت"
          </p>
        </div>
      </div>
      <div className="cart-item-bottom d-flex justify-content-between align-items-center">
        <div className="cart-op">
          <div className="op-box border border-1 d-flex align-items-center justify-content-between">
            <button className='btn border-0'><BS.BsPlus /></button>
            <span className='byekan '>5</span>
            <button className='btn border-0'><BS.BsDash /></button>
            
          </div>
        </div>
        <div className="product-price byekan">
          16,500,000 تومان
        </div>
      </div>
    </div>
  )
}

export default CartItem
