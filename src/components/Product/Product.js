import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductOptions from '../ProductOptions/ProductOptions';
import {useState, useMemo} from 'react';

const Product = ({ title, basePrice, colors, sizes, name }) => {
  // console.log(props);
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0]);

  const getPrice = useMemo(() => {
    return (basePrice+sizes.find((element) => element === currentSize).additionalPrice);
  }, [currentSize]);
  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <ProductImage title={title} name={name} currentColor={currentColor} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <ProductOptions
          colors={colors}
          sizes={sizes}
          title={title}
          getPrice={getPrice}
          currentColor={currentColor}
          currentSize={currentSize}
          setCurrentColor={setCurrentColor}
          setCurrentSize={setCurrentSize}
        />
      </div>
    </article>
  )
};

export default Product;
