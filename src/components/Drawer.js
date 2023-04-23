import Card from "./Card";

function Drawer({ onClose, onDelete, sneakers = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 classname="mb-30">
          Корзина 
          <img
            onClick={onClose}
            className="removeBtn cu-p"
            src="/img/Vector1.svg"
            alt="crestik"
          />
        </h2>

     {sneakers.length > 0 ? (
       <div>
           <div className="items">
          {sneakers.map((obj) => (
               <div className="boxItem d-flex align-center">
               <img src={obj.imageUrl} className='boxItemImg' />
               <div className="mr-20">
                 <p className="mb-5">{obj.title}</p>
                 <span>
                   <b>{obj.price}</b>
                 </span>
               </div>
               <img onClick={() => onDelete(obj.id)} className="removeBtn" src="/img/Vector1.svg" alt="crestik" />
             </div>
          ))} 
          </div>
          
        <div className="boxTotalBlock">
          <ul>
            <li className="d-flex">
              <span>Итого:</span>
              <div></div>
              <b>99490тг</b>
            </li>
            <li className="d-flex">
              <span>Налог 5%:</span>
              <div></div>
              <b>6830тг</b>
            </li>
          </ul>
          <button className="greenButton">Оформить заказ</button>
        </div>
       </div>
     ) : (
      <div className="cartEmpty d-flex align-center justify-center flex-column flex">
        <img className="mb-20" width="120px" height="120px" src="/img/box.svg" alt="boxempty" />
        <h2>Корзина пустая</h2>
        <p className="opacity-6 ml-50">Добавьте хотя бы одну пару кроссовок,чтобы сделать заказ</p>
        <button onClick={onClose} className="Button mt-30">
          Вернуться назад
        </button>
      </div>
     )}
      </div>
    </div>
  );
}

export default Drawer;
