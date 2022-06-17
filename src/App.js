import Cards from './components/Card';
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";
import axios from "axios";
import {Route} from 'react-router-dom';
import Home from './pages/Home';
import Favourites from "./pages/Favourites";

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
         axios.get('https://62ac1c85bd0e5d29af1ad2e1.mockapi.io/favorites').then((res) =>{
             setFavorites(res.data);
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

     const onAddToFavorite = async (obj) => {
         try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://62ac1c85bd0e5d29af1ad2e1.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else {
        const { data } = await axios.post(
          'https://62ac1c85bd0e5d29af1ad2e1.mockapi.io/favorites',
          obj,
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в фавориты');
      console.error(error);
    }
    };

  return <div className="App clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
          <Header onClickCart={() => setCartOpened(true)}/>

      <Route path="/" exact>
          <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
          />
      </Route>
      <Route path="/favorites" exact>
          <Favourites items = {favorites}
                      onAddToFavorite={onAddToFavorite}
          />
      </Route>

  </div>
}

export default App;
