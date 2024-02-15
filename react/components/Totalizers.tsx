import React from 'react';
import { useCssHandles } from 'vtex.css-handles';
import './styles.css';

interface Props {
  locale: string;
  totalizers: {
    id: string;
    name: string;
    value: number;
  }[];
}

const Totalizers = ({ totalizers, locale }: Props) => {
  const CSS__HANDLES = [
    'totalizers',
    'totalizers__total',
    'totalizers__total--text',
    'totalizers--text'
  ];
  const handles = useCssHandles(CSS__HANDLES);
  const totalPrice = !totalizers.length ? 0 : (totalizers[0].value / 100).toLocaleString(locale);

  return (
    <div className={handles['totalizers']}>
      <p className={handles['totalizers--text']}>Tienes {totalizers.length} productos en tu carrito</p>
      <div className={handles['totalizers__total']}>
        <p className={handles['totalizers__total--text']}>Total:</p>
        <p className={handles['totalizers__total--text']}>${totalPrice}</p>
      </div>
    </div>
  );
};

export default Totalizers;
