import React from "react";
import axios from "axios";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  const [sneakers, setSneakers] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartSneakers, setCartSneakers] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartOpened, setCartOpenend] = React.useState(false);

  React.useEffect(() => {
    // fetch("https://641ed352ad55ae01ccb0894f.mockapi.io/Items")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json) => {
    //     setSneakers(json);
    //   });
    axios.get('https://641ed352ad55ae01ccb0894f.mockapi.io/Items')
    .then((res) => {
      setSneakers(res.data)
    });
    axios.get('https://641ed352ad55ae01ccb0894f.mockapi.io/Cart')
    .then((res) => {
      setCartSneakers(res.data)
    });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://641ed352ad55ae01ccb0894f.mockapi.io/Cart', obj);
     setCartSneakers((prev) => [...prev, obj]);
  };

  const onDeleteToCart = (id) => {
    axios.delete(`https://641ed352ad55ae01ccb0894f.mockapi.io/Cart/${id}`);
    setCartSneakers((prev) => prev.filter(item => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToFavorite = () => {
    
  }

  return (
    <div className="wrapper clear">
      {cartOpened ? (
        <Drawer sneakers={cartSneakers} onClose={() => setCartOpenend(false)} onDelete={onDeleteToCart} />
      ) : null}
      <Header onClickCart={() => setCartOpenend(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>
            {searchValue
              ? `Поиск по запросу: "${searchValue}"`
              : "Все кроссовки"}
          </h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className="clear cu-p"
                src="/img/Vector1.svg"
                alt="crestik"
              />
            )}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {sneakers.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
            <Card
              key={index}
              title={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
