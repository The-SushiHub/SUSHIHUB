function Drawer({onClose, items = []}) {
    return (
        <div  className="overlay">
         <div className="drawer">
              <h2 className="d-flex mb-40 justify-between">Корзина   <img onClick={onClose} className="cu-p" width={20} height={20} src="/img/remove.png" alt="Close"/> </h2>
              <div className="items">
                  {
                      items.map((obj) =>(<div className="cartitem d-flex align-center justify-between">
                  <div style={{ backgroundImage:`url(${obj.imageUrl})` }} className="cartitemimg"></div>
                  <div className="mr-20 flex ">
                      <p className="mb-5">{obj.title}</p>
                      <b>{obj.price}</b>
                  </div>
                  <img className="remove" width={20} height={20} src="/img/remove.png" alt="Remove"/>
              </div>))
                  }
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