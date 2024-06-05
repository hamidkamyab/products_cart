import React, { useEffect, useState } from 'react'
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
import CartItem from './CartItem'
import * as BS from 'react-icons/bs'
import Slide from 'react-reveal/Slide';


function Carts({ openCart, handleCloseCart, carts, handleChangeQTY, delCartItem }) {

    const [totalPrice, setTotalPrice] = useState(0)


    useEffect(() => {
        let price = 0;
        carts.map(item => (
            price = (item.price * item.qty) + price
        ))
        setTotalPrice(price)
    }, [carts]);

    return (
        <div className='carts position-absolute'>
            <SlideDown className={'my-dropdown-slidedown'}>
                {openCart ?
                    <div className='carts-content'>
                        {
                            carts.length > 0 ?
                                <>
                                    <div className="carts-head d-flex align-items-center justify-content-between">
                                        <h6 className='text-muted m-0'>{carts.length} کالا</h6>
                                        <span><BS.BsX size={18} role='button' onClick={() => handleCloseCart()} /></span>
                                    </div>
                                    <div className="carts-list">
                                        {carts && carts.map((item, index) => (
                                            <Slide right>
                                                <CartItem item={item} changeQTY={(status, id) => handleChangeQTY(status, id)} delCartItem={(id) => delCartItem(id)} key={index} />
                                            </Slide>

                                        ))}
                                    </div>
                                    <div className='total-price d-flex align-items-center justify-content-between p-3'>
                                        <div className='right d-flex flex-column gap-2'>
                                            <span className='tp-lbl'>مبلغ قابل پرداخت</span>
                                            <span className='tp byekan'>{totalPrice.toLocaleString()} تومان</span>
                                        </div>
                                        <div className='left'>
                                            <button className='btn-order-submit btn btn-danger'>ثبت سفارش</button>
                                        </div>
                                    </div>
                                </>
                                :
                                <div className='p-4 w-100 d-flex flex-column align-items-center justify-content-center gap-4'>
                                    <img src="./cart-empty.svg" />
                                    <h6 className='m-0 p-0'>
                                        سبد خرید شما خالی است.
                                    </h6>
                                </div>
                        }
                    </div>
                    : null}
            </SlideDown>
        </div>
    )
}

export default Carts
