import Cards from './components/Cards';
import Header from "./components/Header";
import Drawer from "./components/Drawer";
function App() {
  return <div className="App clear">
          <Drawer/>
          <Header/>
      <div className="content p-40">
          <div className="d-flex align-center mb-40 justify-between">
           <h1>Все киберсуши</h1>
            <div className="search-block align-center">
               <img width={25} height={25} src="/img/search.png" alt="Search"/>
               <input placeholder="Поиск..."/>
            </div>
          </div>
           <div className="d-flex">
               <Cards/>
          </div>
      </div>
  </div>
}

export default App;
