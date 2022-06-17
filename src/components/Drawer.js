function Drawer({onClose,onRemove, items = []}) {
    return (
        <div  className="overlay">
         <div className="drawer">
              <h2 className="d-flex mb-30 justify-between mb-30">
                  Корзина   <img onClick={onClose} class="cu-p" width={20} height={20} src="/img/remove.png" alt="Close"/> </h2>
             {
                 items.length > 0 ?  (
                     <div>
                         <div className="items">
                  {
                      items.map((obj) =>(<div className="cartitem d-flex align-center mb-20">
                  <div style={{ backgroundImage:`url(${obj.imageUrl})` }} className="cartitemimg"></div>
                  <div className="mr-20 flex ">
                      <p className="mb-5">{obj.title}</p>
                      <b>{obj.price}</b>
                  </div>
                  <img onClick={() => onRemove(obj.id)} className="remove" width={20} height={20} src="/img/remove.png" alt="Remove"/>
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
                 ) : (
                     <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                         <img className="mb-20" width="250px" height="250" src="/img/Korzina.png" alt="Korzina"/>
                         <button onClick={onClose} className="Button">
                             Вернуться назад
                         </button>
                     </div>
                 )}


          </div>
      </div>
    );
}
export default Drawer;