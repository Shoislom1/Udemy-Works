const Drawer = () => {
    return(
        <div style={{display: 'none'}} className="overlay">
        <div className="drawer" style={{display: 'flex', flexDirection: 'column'}}>
          <h2 className="mb-30 d-flex justify-between">
            Корзина <img className="removeBtn cu-p" src="/btn-remove.svg" alt="" />
          </h2>
          <div className="items" style={{flex: 1}}>
          <div className="cartItem d-flex align-center mb-30">
            <div style={{ backgroundImage: "url(/sneakers/1.jpg)" }} className="cartItemImg"></div>
            <div className="mr-20 flex">
              <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>1205 руб.</b>
            </div>
            <img className="removeBtn" src="/btn-remove.svg" alt=""/>
          </div> 
          <div className="cartItem d-flex align-center mb-30">
            <div style={{ backgroundImage: "url(/sneakers/1.jpg)" }} className="cartItemImg"></div>
            <div className="mr-20 flex">
              <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>1205 руб.</b>
            </div>
            <img className="removeBtn" src="/btn-remove.svg" alt=""/>
          </div>  
          <div className="cartItem d-flex align-center mb-30">
            <div style={{ backgroundImage: "url(/sneakers/1.jpg)" }} className="cartItemImg"></div>
            <div className="mr-20 flex">
              <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>1205 руб.</b>
            </div>
            <img className="removeBtn" src="/btn-remove.svg" alt=""/>
          </div>  
          
          </div>
            <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итоги:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li>
                <span>Налог 5%</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button className="greenBtn">Оформить заказ <img src="/arrow.svg" alt="" /></button>
            </div>
        </div>
      </div>
    )
}
export default Drawer