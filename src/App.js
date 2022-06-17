import Cards from './components/Card';
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";
import Card from "./components/Card";

function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems ] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false)

    React.useEffect(() => {
        fetch('https://62ac1c85bd0e5d29af1ad2e1.mockapi.io/items')
            .then((res)=>{
                return res.json();
            })
            .then((json) => {
                setItems(json);
            });
    }, []);

    const onAddToCart = (obj) => {
      setCartItems(prev => [...prev,obj]);
    }
  return <div className="App clear">
      {cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(false)} /> : null}
          <Header onClickCart={() => setCartOpened(true)}/>
      <div className="content p-40">
          <div className="d-flex align-center mb-40 justify-between">
           <h1>Все киберсуши</h1>
            <div className="search-block align-center justify-between mb-40">
               <img width={25} height={25} src="/img/search.png" alt="Search"/>
               <input placeholder="Поиск..."/>
            </div>
          </div>
           <div className="d-flex flex-wrap">
               {items.map((items) =>(
                   <Cards title={items.title}
                          price={items.price}
                          imageUrl={items.imageUrl}
                          onClick={(obj)=> onAddToCart(obj)}
                          onFavorite={() => console.log('')}/>
                   ))}

          </div>
      </div>
  </div>
}

export default App;
