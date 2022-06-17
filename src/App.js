import Cards from './components/Card';
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";
import axios from "axios";
import {Route} from 'react-router-dom';


function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems ] = React.useState('');
     const [favorites, setFavorites ] = React.useState('');
    const [searchValue,setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false)

    React.useEffect(() => {
         axios.get('https://62ac1c85bd0e5d29af1ad2e1.mockapi.io/items').then((res) =>{
             setItems(res.data);
         });
         axios.get('https://62ac1c85bd0e5d29af1ad2e1.mockapi.io/cart').then((res) =>{
             setCartItems(res.data);
         });
    }, []);

    const onAddToCart = (obj) => {
        axios.post('https://62ac1c85bd0e5d29af1ad2e1.mockapi.io/cart',obj);
        setCartItems((prev) => [...prev,obj]);
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    }

    const onRemoveItem = (id) => {
         axios.delete(`https://62ac1c85bd0e5d29af1ad2e1.mockapi.io/cart/${id}`);
         setCartItems((prev) => prev.filter(item => item.id !== id));
    }

     const onAddToFavorite = (obj) => {
        axios.post('https://62ac1c85bd0e5d29af1ad2e1.mockapi.io/favorites',obj);
        setFavorites((prev) => [...prev,obj]);
    };

  return <div className="App clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
          <Header onClickCart={() => setCartOpened(true)}/>

      <div className="content p-40">
          <div className="d-flex align-center mb-40 justify-between">
           <h1>{searchValue ? `Поиск по запросу: "${searchValue}"`:'Все сушеньки'}</h1>
            <div className="search-block align-center justify-between mb-40">
                <img width={25} height={25} src="/img/search.png" alt="Search"/>
               <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."/>
            </div>
          </div>
           <div className="d-flex flex-wrap">
               {items
                   .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                   .map((items, index) =>(
                   <Cards key={index}
                          title={items.title}
                          price={items.price}
                          imageUrl={items.imageUrl}
                          onClick={(obj)=> onAddToCart(obj)}
                          onFavorite={(obj)=>onAddToFavorite(obj)}
                   />
                   ))}

          </div>
      </div>
  </div>
}

export default App;
