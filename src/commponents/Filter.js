import React, { useState } from 'react'
import * as BS from 'react-icons/bs'
import * as FA6 from 'react-icons/fa6'
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

function Filter({ brands,filterProducts,handleSelected,handleExist,handleSort }) {
    const [openBrand, setOpenBrand] = useState(false);

    return (
        <div className='filterBox neo w-100 p-3 d-flex justify-content-between align-items-center'>
            <div className="filterContent flex-grow-1 d-flex align-items-center gap-3">
                <div className='brnad filter-sec position-relative' role='button'>
                    <div className='brnad-lbl filter-lbl d-flex gap-3 justify-content-between align-items-center' onClick={() => setOpenBrand(() => !openBrand)}>
                        <span>برند ها</span>
                        <BS.BsChevronDown />
                    </div>
                    <div className='brnad-list filter-list position-absolute'>
                        <SlideDown className={'my-dropdown-slidedown'}>
                            {
                                openBrand ?
                                    <div className="filter-list-body">
                                        {
                                            brands.map((brand,index) => (
                                                <div className="form-check my-1" key={index}>
                                                    <input className="form-check-input" name={`brand-${brand.id}`} type="checkbox" value={brand.id} id={`flexCheck-${brand.id}`} role='button' onChange={(e)=>handleSelected(e)} />
                                                    <label className="form-check-label" htmlFor={`flexCheck-${brand.id}`} role='button'>
                                                        {brand.name}
                                                    </label>
                                                </div>
                                            ))
                                        }


                                    </div>
                                    :
                                    null
                            }
                        </SlideDown>
                    </div>
                </div>
                <div className='vr mt-1'></div>

                <div className="form-check form-switch filter-sec m-0">
                    <input className="form-check-input form-check-input-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={(e)=>handleExist(e)} />
                    <label className="form-check-label filter-lbl" htmlFor="flexSwitchCheckDefault" role='button'>فقط کالاهای موجود</label>
                </div>
                
                <div>
                    <button className='btn filter-btn btn-sm d-flex gap-2 align-items-center' onClick={()=>filterProducts()}>
                        <FA6.FaFilter />
                        <span>اعمال فیلتر</span>
                    </button>
                </div>
            </div>


            <div className="orderBox d-flex align-items-center gap-2">
                <BS.BsSortDown size={32} />
                <select id="sortProduct" className="form-select form-select-sm" name='sort' defaultValue="default"  onChange={(e)=>handleSort(e.target.value)}>
                    <option value="default" id="default">مرتب سازی</option>
                    <option value="new" >جدیدترین</option>
                    <option value="old">قدیمی ترین</option>
                    <option value="exp">گرانترین</option>
                    <option value="cheapest">ارزانترین</option>
                    <option value="sale">پر فروشترین</option>
                </select>
            </div>
        </div>
    )
}

export default Filter