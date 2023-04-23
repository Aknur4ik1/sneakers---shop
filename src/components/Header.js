
function Header(props) {
    return(
        <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width="40" height="40" src="img/image 4.png" />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li onClick={props.onClickCart} className="mr-30 cu-p">
            <img width={18} height={18} src='/img/box.png' />
            <span>70990тг</span>
          </li>
          {/* <li>
            <img width={18} height={18} src="img/Vector.png" />
          </li> */}
        </ul>
      </header>
    )
}

export default Header;