import Card from "./componentd/Card/Card";
import Header from "./componentd/Header";
import Drawer from "./componentd/Drawer";


const arr = [
  {
    title: 'Мужские Кросовки Nike Blazer Mid Suede',
    price: 2599,
    imageUrl : '/sneakers/1.jpg'
  },
  {
    title: 'Мужские Кросовки Nike Air Max 270',
    price: 6599,
    imageUrl : '/sneakers/2.jpg'
  },
  {
    title: 'Мужские Кросовки Nike Blazer Mid Suede',
    price: 2599,
    imageUrl : '/sneakers/3.jpg'
  },
  {
    title: 'Мужские Кросовки Nike Blazer Mid Suede',
    price: 2599,
    imageUrl : '/sneakers/4.jpg'
  }
]


function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img style={{ width: 40, height: 40 }} src="/logo.png" alt="" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">The best sneakers Store</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img style={{ width: 18, height: 18 }} src="/cart.svg" alt="" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img style={{ width: 18, height: 18 }} src="/user.svg" alt="" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <Header />
        <div className="d-flex">
          {arr.map(obj => <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;
