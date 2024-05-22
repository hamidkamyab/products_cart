import React from 'react'
import { useState } from 'react'
import * as BS from 'react-icons/bs'

function Products({products}) {
  const [state, setstate] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  console.log(state);
  return (
    <div className='products neo p-2 d-flex flex-wrap'>

      {
        products.map(({title,img,price,qty,brand}, index) => (
          <div className="productItem bg-white p-3 col-12 col-md-6 col-lg-4 d-flex flex-column gap-4" key={index}>
            <div className="product-top w-100 d-flex justify-content-center">
              <img src={img} className='w-75' alt="" />
            </div>
            <div className='product-title'>
              <p className='title m-0 p-0'>
                {title}
              </p>
            </div>
            <div className="product-bottom d-flex justify-content-between align-items-center">
              <div className="addToCart">
                <button className='btn btn-outline-success btn-sm py-1 px-4'>
                  <BS.BsCartPlus size={20} />
                </button>
              </div>
              <div className="price byekan">
                <span className='byekan'>
                {price} تومان
                </span>
              </div>
            </div>
          </div>
        ))
      }



    </div>
  )
}

export default Products
