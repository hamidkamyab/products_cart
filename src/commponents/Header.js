import React from 'react'
import * as IO5 from 'react-icons/io5'

function Header() {
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
                    <span className='profile' role='button'><IO5.IoPerson size={20} /></span>
                    <span className='line mx-3 mt-1'></span>
                    <span className='profile' role='button'><IO5.IoCartSharp size={20} /></span>
                    
                </div>
            </div>
        </div>
    )
}

export default Header