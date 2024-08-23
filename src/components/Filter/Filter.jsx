import { useDispatch, useSelector } from 'react-redux';
import styles from './Filter.module.css';
import { selectFilter } from 'reduxState/selectors';
import { setFilter } from 'reduxState/filterSlice';

export const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <input
      placeholder="What currency are you looking for?🧐"
      className={styles.input}
      value={value}
      onChange={e => dispatch(setFilter(e.target.value))}
    />
  );
};
