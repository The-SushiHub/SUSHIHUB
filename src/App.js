import Cards from './components/Card';
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";
import Card from "./components/Card";
const arr =[
    {
        title:'gggg',
        price:666,
        imageUrl:'/img/sushi/sushi1.png'
    }
]
function App() {
    const [cartOpened, setCartOpened] = React.useState(false)
  return <div className="App clear">
      {cartOpened ? <Drawer onClose={() => setCartOpened(false)} /> : null}
          <Header onClickCart={() => setCartOpened(true)}/>
      <div className="content p-40">
          <div className="d-flex align-center mb-40 justify-between">
           <h1>Все киберсуши</h1>
            <div className="search-block align-center">
               <img width={25} height={25} src="/img/search.png" alt="Search"/>
               <input placeholder="Поиск..."/>
            </div>
          </div>
           <div className="d-flex">
               {arr.map((obj) =>(
                   <Cards title={obj.title}
                          price={obj.price}
                          imageUrl="/img/sushi/sushi1.png"
                          onClick={() => console.log(obj)}
                          onFavorite={() => console.log(obj)}/>
                   ))}

          </div>
      </div>
  </div>
}

export default App;
