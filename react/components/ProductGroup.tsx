import React from 'react';
import { useCssHandles } from 'vtex.css-handles';
import './styles.css';

interface Props {
  locale: string;
  products: {
    skuName: string;
    price: number;
    quantity: number;
    imageUrls: {
      at1x: string;
    };
  }[];
};

const ProductGroup = ({ products, locale }: Props) => {
  const CSS__HANDLES = [
    'product',
    'product__image--container',
    'product__image',
    'product__info--container',
    'product__info--text',
    'product__info--span'
  ];
  const handles = useCssHandles(CSS__HANDLES);

  return (
    <>
      {products.map((product, index: number) => (
        <div className={handles['product']} key={index}>
          <div className={handles['product__image--container']}>
            <img className={handles['product__image']} src={product.imageUrls.at1x} alt={product.skuName} />
          </div>
          <div className={handles['product__info--container']}>
            <p className={handles['product__info--text']}>{product.skuName} <span className={handles['product__info--span']}>(X {product.quantity})</span></p>
            <p className={handles['product__info--text']}>${!locale ? `${product.price / 100}` : (product.price / 100).toLocaleString(locale)}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductGroup;
