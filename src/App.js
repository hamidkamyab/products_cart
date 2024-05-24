import Header from "./commponents/Header";
import Filter from "./commponents/Filter";
import Products from "./commponents/Products";
import data from './data.json'
import { useState } from "react";

function App() {
  const [products, setProducts] = useState(data.products)
  const [selectedBrand, setSelectedBrand] = useState([])
  const [isExist, setIsExist] = useState(false)


  const handleSelected = (e) => {
    if (e.target.checked) {
      if (!selectedBrand.includes(e.target.value)) {
        selectedBrand.push(e.target.value)
      }
    } else {
      setSelectedBrand(selectedBrand.filter(item => item != e.target.value))
    }
  }
  const handleExist = (e) => {
    if (e.target.checked) {
      setIsExist(true)
    } else {
      setIsExist(false)
    }
  }

  const filterProducts = () => {
    let filterProducts = [];
    
    if (selectedBrand.length > 0) {
      filterProducts = data.products.filter(product => selectedBrand.includes(product.brand.id.toString()))
    } else {
      filterProducts = data.products
    }
    
    if (isExist) {
      filterProducts = filterProducts.filter(product => product.stock > 0)
    }
    setProducts(filterProducts)
  }


  return (
    <div className="App vh-100 d-flex flex-wrap align-items-start">
      <div className="main w-100">
        <Header />
        <div className="container my-3">
          <div className="content py-2">
            <Filter brands={data.brands} filterProducts={filterProducts} handleSelected={handleSelected} handleExist={handleExist} />
            <div className="productNum my-3 text-muted d-flex align-items-center gap-1 justify-content-end">
              <span>{products.length}</span>
              <span>کالا</span>
            </div>

            <Products products={products} />
          </div>
        </div>
      </div>

      <div className="footer w-100 text-center py-3 align-self-end">
        <small> طراحی شده توسط <a href="https://hamidkamyab.ir/" target="_blank" className="text-info">حمید کامیاب</a></small>
      </div>
    </div>
  );
}

export default App;
