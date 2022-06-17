function Drawer() {
    return (
        <div style={{display:'none'}} className="overlay">
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
    );
}
export default Drawer;