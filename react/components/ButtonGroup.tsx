import React from 'react';
import { useCssHandles } from 'vtex.css-handles';
import './styles.css';

const ButtonGroup = () => {
  const CSS__HANDLES = [
    'button-group',
    'button-group__checkout',
    'button-group__checkout--link',
    'button-group__cart',
    'button-group__cart--button',
    'button-group__cart--link',
  ];
  const handles = useCssHandles(CSS__HANDLES);

  return (
    <div className={handles['button-group']}>
      <div className={handles['button-group__checkout']}>
        <a className={handles['button-group__checkout--link']} href="https://danielvelasco--itglobers.myvtex.com/checkout/#/cart">FINALIZAR COMPRA</a>
      </div>
      <div className={handles['button-group__cart']}>
        <button className={handles['button-group__cart--button']}>CONTINUAR COMPRANDO</button>
        <a className={handles['button-group__cart--link']} href="">VER CARRITO</a>
      </div>
    </div>
  );
};

export default ButtonGroup;
