import styles from './Button.module.scss';
import clsx from 'clsx';

const Button = (props, {className}) => {
    // props.action.preventDefault();
    return (<button className={clsx(styles.button, className)} onClick={props.onClickHandler}
      >{props.children}</button>)
}

export default Button;
