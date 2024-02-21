# Add to cart info 

Este componente se encarga de hacer una previsualización del carrito de compras

## Instalación

### 1. Clonar repositorio

Copia el [repositorio](https://github.com/Velasco1704/itg-add-to-cart-info-monastery/) del proyecto y clonarlo en tu terminal.

```bash
git clone https://github.com/Velasco1704/itg-add-to-cart-info-monastery/
```

### 2. Acceder a la Carpeta del Proyecto

Después de clonar el repositorio, entra a la carpeta del proyecto utilizando el siguiente comando:

```bash
cd itg-add-to-cart-info-monastery
```

### 3. Instalar dependencias de la carpeta react

Entra a la carpeta de react y instala las dependencias.

```bash
cd react && yarn
```

> [!NOTE]
> No uses npm y yarn al mismo tiempo esto va a causar conflictos

### 4. Iniciar Sesión en VTEX

Para poder trabajar con VTEX, necesitas iniciar sesión con tu cuenta. Utiliza el siguiente comando y reemplaza {account} con tu nombre de cuenta de VTEX:

```bash
vtex login { account }
```

### 5. Seleccionar el Espacio de Trabajo

Una vez que hayas iniciado sesión, selecciona el espacio de trabajo en el que deseas trabajar utilizando el siguiente comando. Reemplaza {workspace} con el nombre de tu espacio de trabajo:

```bash
vtex use { workspace }
```

### 6. Enlazar el Proyecto al Espacio de Trabajo

Finalmente, enlaza el proyecto a tu espacio de trabajo para visualizarlo ejecutando el siguiente comando:

```bash
vtex link
```

### 7. Agrega el componente

Agrega el componente en el `manifest.json` de tu **store theme**

```JSON
"dependencies": {
   "{accountName}.{appName}": "{appVersion}",
    "vtex.store": "2.x",
    "vtex.store-header": "2.x"
}
```

## Descripción general del proyecto y su uso

El componente `AddToCartInfo` es un componente diseñado para mostrar previsualización de la información del carrito de compras. Este componente es parte de una interfaz de usuario que ayuda a los clientes a visualizar los productos que han agregado al carrito, el costo total y proporciona botones para acciones adicionales como finalizar la compra o continuar comprando.

## Componentes

El código consta de tres componentes principales: `ProductGroup`, `ButtonGroup` y `Totalizers`.

### ProductGroup

El componente `ProductGroup` es un componente que muestra un grupo de productos. Este componente se utiliza en el componente `AddToCartInfo` para mostrar la información de los productos agregados al carrito.

```tsx
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
```

### Totalizers

El componente `Totalizers` es un componente que muestra los totalizers que provienen del useOrderForm. Este componente se utiliza en el componente `AddToCartInfo` para mostrar el total de productos en el carrito y el precio total.

```tsx
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
```

#### ButtonGroup

El componente `ButtonGroup` es un componente que muestra un grupo de botones relacionados. Este componente se utiliza en el componente `AddToCartInfo` para mostrar los botones de finalizar compra y continuar comprando.

```tsx
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
```
