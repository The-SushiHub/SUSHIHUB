
import Cards from '../components/Card';



function Home({items,
searchValue,
setSearchValue,
onChangeSearchInput,
onAddToFavorite,
onAddToCart}) {
    return(
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
                          onClick={(obj)=> onAddToCart(obj)}
                          onFavorite={(obj)=>onAddToFavorite(obj)}
                          {...items}
                   />
                   ))}

          </div>
      </div>
    );
}

export default Home;