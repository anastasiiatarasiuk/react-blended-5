import Select from 'react-select';

import symbols from './symbols.json';

import styles from './SelectRates.module.css';

import './ReactSelect.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectBaseCurrency } from 'reduxState/selectors';

import { setBaseCurrency } from 'reduxState/currencySlice';

export const SelectRates = () => {
  const baseCurrency = useSelector(selectBaseCurrency);
  const dispatch = useDispatch();

  const handleChange = ({ value }) => {
    dispatch(setBaseCurrency(value));
  };

  return (
    <div className={styles.box}>
      <p className={styles.text}>Your base currency:&nbsp;</p>
      <Select
        onChange={handleChange}
        className={styles.select}
        classNamePrefix="react-select"
        value={{
          label: baseCurrency,
          value: baseCurrency,
        }}
        options={symbols}
        isSearchable
      />
    </div>
  );
};
