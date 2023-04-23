import style from './Card/Card.module.scss';
import React from 'react';

 function Card( { title, imageUrl, price, onFavorite, onPlus } ) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(false);

    const handleClick = () => {
        onPlus( {title,imageUrl,price} )
        setIsAdded(!isAdded)
    }  

    const clickFavorite = () => {
      setIsFavorite(!isFavorite)
    }
   
    return (
        <div className={style.card}>
<div className={style.favorite} onClick={onFavorite}>
  <img onClick={clickFavorite} src={isFavorite ? "/img/heart.svg" : "/sneakers/unlike.svg"} alt="unliked" />
</div>
<img
  width={133}
  height={112}
  src={imageUrl}
  alt="Sneakers/"
/>
<h5>{title}</h5>
<div className="d-flex justify-between align-center">
  <div className="d-flex flex-column">
    <p>Цена:</p>
    <b>{price} тг</b>
  </div>
  <img className={style.button} onClick={handleClick} src={isAdded ? "/img/done.png" : "/img/orange.png"} alt='add' />
</div>
</div>
    )
}

export default Card ;


