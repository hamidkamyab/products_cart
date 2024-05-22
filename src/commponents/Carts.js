import React from 'react'
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
import CartItem from './CartItem'
import * as BS from 'react-icons/bs'

function Carts({openCart,handleCloseCart}) {
    return (
        <div className='carts position-absolute'>
            <SlideDown className={'my-dropdown-slidedown'}>
                {openCart ? 
                <div className='carts-content'>
                    <div className="carts-head d-flex align-items-center justify-content-between">
                        <h6 className='text-muted m-0'>4 کالا</h6>
                        <span><BS.BsX size={18} role='button' onClick={()=>handleCloseCart()} /></span>
                    </div>
                    <div className="carts-list">
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </div>
                    <div className='total-price d-flex align-items-center justify-content-between p-3'>
                        <div className='right d-flex flex-column gap-2'>
                            <span className='tp-lbl'>مبلغ قابل پرداخت</span>
                            <span className='tp byekan'>27,000,000 تومان</span>
                        </div>
                        <div className='left'>
                            <button className='btn-order-submit btn btn-danger'>ثبت سفارش</button>
                        </div>
                    </div>
                </div>
                : null}
            </SlideDown>
        </div>
    )
}

export default Carts
