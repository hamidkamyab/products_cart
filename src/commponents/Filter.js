import React from 'react'
// import * as IO5 from 'react-icons/io5'
import * as BS from 'react-icons/bs'
function Filter() {

    return (
        <div className='filterBox neo w-100 p-3 d-flex justify-content-between align-items-center'>
            <div className="filterContent flex-grow-1 d-flex align-items-center">
                <div className='brnad filter-sec position-relative' role='button'>
                    <div className='brnad-lbl filter-lbl d-flex gap-3 justify-content-between align-items-center'>
                        <span>برند ها</span>
                        <BS.BsChevronDown />
                    </div>
                    <div className='brnad-list filter-list position-absolute'>

                        <div className="filter-list-body">

                            <div class="form-check m-0">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" role='button' />
                                <label class="form-check-label" for="flexCheckDefault" role='button'>
                                    Default checkbox
                                </label>
                            </div>

                        </div>

                    </div>
                </div>
                <div className='vr mx-3 mt-1'></div>

                <div class="form-check form-switch filter-sec m-0">
                    <input class="form-check-input form-check-input-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label class="form-check-label filter-lbl" for="flexSwitchCheckDefault" role='button'>فقط کالاهای موجود</label>
                </div>
            </div>


            <div className="orderBox d-flex align-items-center gap-2">
                <BS.BsSortDown size={32} />
                <select class="form-select form-select-sm" >
                    <option selected>مرتب سازی</option>
                    <option value="new">جدیدترین</option>
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