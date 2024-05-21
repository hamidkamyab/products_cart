import React from 'react'
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

function Carts({openCart}) {
    return (
        <div className='carts position-absolute'>
            <SlideDown className={'my-dropdown-slidedown'}>
                {openCart ? 
                <div className='carts-content'>
                    <h6 className='text-muted'>4 کالا</h6>
                    <div className="carts-list"></div>
                </div>
                : null}
            </SlideDown>
        </div>
    )
}

export default Carts
