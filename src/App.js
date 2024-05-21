import Header from "./commponents/Header";
import Filter from "./commponents/Filter";

function App() {
  return (
    <div className="App vh-100 d-flex flex-wrap align-items-start">
      <div className="main w-100">
          <Header />
          <div className="container my-3">
            <div className="content py-2">
              <Filter />
              <div className="productNum my-3 text-muted d-flex align-items-center gap-1 justify-content-end">
                <span>26</span>
                <span>کالا</span>
              </div>
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
