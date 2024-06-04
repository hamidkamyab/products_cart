import Header from "./commponents/Header";
import Filter from "./commponents/Filter";
import Products from "./commponents/Products";
import data from './data.json'
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState(data.products)
  const [selectedBrand, setSelectedBrand] = useState([])
  const [isExist, setIsExist] = useState(false)
  const [cart, setCart] = useState([])


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

    document.getElementById('default').selected = 'selected';

  }

  const handleSort = (status) => {
    let sortProducts = [];
    switch (status) {
      case 'new':
        sortProducts = products.sort((a, b) => new Date(b.created) - new Date(a.created));
        break;
      case 'old':
        sortProducts = products.sort((a, b) => new Date(a.created) - new Date(b.created));
        break;
      case 'exp':
        sortProducts = products.sort((a, b) => b.price - a.price);
        break;
      case 'cheapest':
        sortProducts = products.sort((a, b) => a.price - b.price);
        break;
      case 'sale':
        sortProducts = products.sort((a, b) => b.sell - a.sell);
        break;
      default:
        sortProducts = products.sort((a, b) => a.id - b.id);
        console.log(sortProducts)
        break;
    }
    setProducts([...sortProducts])
  }

  const addToCart = (id) => {
    const existInCart = cart.find(item => item.id == id)
    if (existInCart) {
      setCart(
        cart.map(cartItem => cartItem.id == id ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem)
      )
    } else {
      let p = data.products.filter(product => product.id == id)[0];
      setCart([...cart, { ...p, qty: 1 }])
    }
  }

  const handleChangeQTY = (status, id) => {

    const findItem = cart.find(item=>item.id == id);
    
    if(status == 'plus'){
      findItem.stock - findItem.qty > 0?
        findItem.qty = findItem.qty+1
      :
      alert(`فقط ${findItem.qty} عدد از محصول در انبار موجود است.`)
    }else{
      findItem.qty = findItem.qty-1
    }
    
    


    setCart(
      cart.map(item => (
        item.id == id ?
        findItem
        :
        item
      ))
    )
  }

  const delCartItem = (id)=>{
    setCart(cart.filter(item=>item.id != id))
  }


  return (
    <div className="App vh-100 d-flex flex-wrap align-items-start">
      <div className="main w-100">
        <Header carts={cart} handleChangeQTY={handleChangeQTY} delCartItem={delCartItem} />
        <div className="container my-3">
          <div className="content py-2">
            <Filter brands={data.brands} filterProducts={filterProducts} handleSelected={handleSelected} handleExist={handleExist} handleSort={handleSort} />
            <div className="productNum my-3 text-muted d-flex align-items-center gap-1 justify-content-end">
              <span>{products.length}</span>
              <span>کالا</span>
            </div>

            <Products products={products} addToCart={addToCart} />
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
