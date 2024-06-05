import React from 'react'
import * as BS from 'react-icons/bs'
import Bounce from 'react-reveal/Bounce';

function Products({ products, addToCart }) {

  return (
    <div className='products neo p-2 d-flex flex-wrap overflow-hidden'>
      <Bounce bottom big>
        {
          products.map(({ id, title, img, price, qty, stock }, index) => (
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
                {
                  stock > 0 ?
                    <>
                      <div className="addToCart">
                        <button className={`btn btn-outline-success btn-sm py-1 px-4 ${qty > 0 ? 'disabled' : ''}`} onClick={() => addToCart(id)}>
                          <BS.BsCartPlus size={20} />
                        </button>
                      </div>
                      <div className="price byekan">
                        <span className='byekan'>
                          {parseInt(price).toLocaleString()} تومان
                        </span>
                      </div>
                    </>
                    :
                    <div className='end-ex d-flex align-items-center justify-content-center w-100'>
                      <div className='hr flex-grow-1'></div>
                      <span className='px-2'>
                        اتمام موجودی
                      </span>
                      <div className='hr flex-grow-1'></div>
                    </div>

                }
              </div>
            </div>
          ))
        }
      </Bounce>




    </div>
  )
}

export default Products
