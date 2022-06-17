function Header(props) {
    return (
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
          <li onClick={props.onClickCart} className="mr-30 cu-p">
           <img width={18} height={18} src="/img/cart.png"/><san>666 руб.</san></li>
          <li><img width={18} height={18} src="/img/user.png"/></li>
        </ul>
      </div>
    </header>
    );
}
export default Header;