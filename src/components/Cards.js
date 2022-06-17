function Cards() {
    return (
         <div className="card">
               <div className="favorite">
                   <img width={30} height={30} src="/img/unlike.png" alt="Unliked"/>
               </div>
              <img width={133} height={112} src="/img/sushi/sushi2.png" alt="Sushi"/>
              <h5>Вкусно-Вкусно</h5>
              <div className="d-flex justify-between align-center">
                  <div className="d-flex flex-column">
                      <span> Цена:</span>
                      <b>666 руб.</b>
                  </div>
                  <button className="button">
                      <img width={11} height={11} src="/img/plus.png" alt="Plus"/>
                  </button>
              </div>
          </div>
    );
}
export default Cards;