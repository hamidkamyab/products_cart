import React from 'react'
import { useState } from 'react'
import * as IO5 from 'react-icons/io5'
import Carts from './Carts'

function Header({carts,handleChangeQTY,delCartItem}) {
    const [openCart, setOpenCart] = useState(false);
    const handleCloseCart = ()=>{
        setOpenCart(false)
    }


    return (
        <div className="header w-100">
            <div className="container py-3 d-flex align-items-center justify-content-between">
                <div className="right d-flex align-items-center gap-4">
                    <div className="logo">
                        <img src='./logo.png' />
                    </div>
                    <nav className="menu">
                        <ul className='list-unstyled d-flex align-items-center m-0 p-0 gap-3'>
                            <li>
                                <a href="#">صفحه اصلی</a>
                            </li>
                            <li>
                                <a href="#" className='text-danger'>شگفت انگیزها</a>
                            </li>
                            <li>
                                <a href="#">درباره ما</a>
                            </li>
                            <li>
                                <a href="#">تماس با ما</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="left position-relative d-flex align-items-center">
                    <span className='profile left-icon' role='button'><IO5.IoPerson size={20} /></span>
                    <span className='line mx-3 mt-1'></span>
                    <span className='cart left-icon position-relative' role='button' onClick={()=>setOpenCart(()=>!openCart)}>
                        <IO5.IoCartSharp size={22} />
                    </span>
                    <Carts openCart={openCart} handleCloseCart={handleCloseCart} handleChangeQTY={(status,id)=>handleChangeQTY(status,id)} delCartItem={(id)=>delCartItem(id)} carts={carts} />
                </div>
            </div>
        </div>
    )
}

export default Header