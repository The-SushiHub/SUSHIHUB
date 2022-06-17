import {Link} from 'react-router-dom';
function Header(props) {
    return (
        <header className=" d-flex  align-center p-40 justify-between ">
      <Link to="/">
            <div className="d-flex  align-center">
        <img width={90} height={90} src="/img/logo.png"/>
      <div >
        <h3 className="text-uppercase"> SUSHIHUB</h3>
        <p className="opacity-5">Магазин лучших киберсуш</p>
      </div>
     </div>
            </Link>
        <ul className="d-flex">
          <li onClick={props.onClickCart} className="mr-30 cu-p">
           <img width={18} height={18} src="/img/cart.png" atl="Корзина"/><san>666 руб.</san> </li>
            <Link to="/favorites"><li><img width={18} height={18} src="/img/favorite.png" atl="Закладки" /></li></Link>
          <li><img width={18} height={18} src="/img/user.png" atl="Пользователь"/> </li>
        </ul>
     </header>
    );
}
export default Header;