import styles from '../Product/Product.module.scss';
import clsx from 'clsx';
const OptionColor = ({ colors, currentColor, setCurrentColor }) => {
  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {colors.map((color, index) => (
          <li key={index}>
            <button type='button'
              className={clsx(styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()], color === currentColor && styles.active)}
              onClick={() => {
                setCurrentColor(colors[index]);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptionColor;
