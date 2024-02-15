import React from 'react';
// import { useProduct } from 'vtex.product-context';
import { useOrderForm } from 'vtex.order-manager/OrderForm';
import { useCssHandles } from 'vtex.css-handles';
import ProductGroup from './ProductGroup';
import Totalizers from './Totalizers';
import ButtonGroup from './ButtonGroup';
import './styles.css';

const AddToCartInfo = () => {
  // const productInfo = useProduct();
  const CSS__HANDLES = [
    "container"
  ];
  const handles = useCssHandles(CSS__HANDLES);
  const { orderForm: { items, totalizers, clientPreferencesData: { locale } } } = useOrderForm();

  return (
    <div className={handles['container']}>
      <ProductGroup products={items} locale={locale} />
      <Totalizers totalizers={totalizers} locale={locale}/>
      <ButtonGroup />
    </div>
  );
};

export default AddToCartInfo;
