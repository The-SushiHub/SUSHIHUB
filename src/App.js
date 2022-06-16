
function App() {
  return <div className="App clear">
      <div className="overlay">
          <div className="drawer">
              <h2 className="d-flex mb-40 justify-between">Корзина   <img className="cu-p" width={20} height={20} src="/img/remove.png" alt="Remove"/> </h2>
              <div className="items">
                  <div className="cartitem d-flex align-center justify-between">
                  <div style={{ backgroundImage:'url(/img/sushi/sushi2.png)' }} className="cartitemimg"></div>
                  <div>
                      <p className="mb-5">Лучшие сушеньки</p>
                      <b>666 руб.</b>
                  </div>
                  <img className="remove" width={20} height={20} src="/img/remove.png" alt="Remove"/>
              </div>

                <div className="cartitem d-flex align-center justify-between mb-20">
                  <div style={{ backgroundImage:'url(/img/sushi/sushi2.png)' }} className="cartitemimg"></div>
                  <div>
                      <p className="mb-5">Лучшие сушеньки</p>
                      <b>666 руб.</b>
                  </div>
                  <img className="remove" width={20} height={20} src="/img/remove.png" alt="Remove"/>
              </div>
              </div>
              <div className="cartTotalBlock"><ul>
                 <li>
                     <span>Итого:</span>
                     <div></div>
                     <b>6666 руб.</b>
                 </li>
                 <li className="d-flex">
                     <span>Налог:</span>
                     <div></div>
                     <b>334 руб.</b>
                 </li>
              </ul>
              <button className="Button">Оформить заказ</button></div>
          </div>
      </div>
    <header className=" d-flex justify-between align-center p-40">
     <div className="d-flex  align-center">
        <img width={40} height={40} src="/img/logo.png"/>
      <div >
        <h3 className="text-uppercase"> SushiHub</h3>
        <p className="opacity-5">Магазин лучших киберсуш</p>
      </div>
      <div>
     </div>
        <ul className="d-flex">
          <li className="mr-30">
           <img width={18} height={18} src="/img/cart.png"/><san>666 руб.</san></li>
          <li><img width={18} height={18} src="/img/user.png"/></li>
        </ul>
      </div>
    </header>
      <div className="content p-40">
          <div className="d-flex align-center mb-40 justify-between">
           <h1>Все киберсуши</h1>
            <div className="search-block align-center">
               <img width={25} height={25} src="/img/search.png" alt="Search"/>
               <input placeholder="Поиск..."/>
            </div>
          </div>
           <div className="d-flex">
              <div className="card">
               <div className="favorite">
                   <img width={30} height={30} src="/img/unlike.png" alt="Unliked"/>
               </div>
              <img width={133} height={112} src="/img/sushi/sushi2.png" alt="Sushi"/>
              <h5>Вкусно-Вкусно</h5>
              <div className="d-flex justify-between align-center">
                  <div className="d-flex flex-column">
                      <span> Цена:</span>
                      <b>666 руб.</b>
                  </div>
                  <button className="button">
                      <img width={11} height={11} src="/img/plus.png" alt="Plus"/>
                  </button>
              </div>
          </div>

               <div className="card">
              <img width={133} height={112} src="/img/sushi/sushi1.png" alt="Sushi"/>
              <h5>Вкусно-Вкусно-Вкусно</h5>
              <div className="d-flex justify-between align-center">
                  <div className="d-flex flex-column">
                      <span> Цена:</span>
                      <b>666 руб.</b>
                  </div>
                  <button className="button">
                      <img width={11} height={11} src="/img/plus.png" alt="Plus"/>
                  </button>
              </div>
          </div>
          </div>
      </div>
  </div>
}

export default App;
