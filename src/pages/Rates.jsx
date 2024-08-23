import { Wave } from 'react-animated-text';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
  Container,
  Filter,
  Heading,
  Loader,
  RatesList,
  Section,
} from 'components';
import { fetchRates } from 'reduxState/currencyOperations';
import {
  selectBaseCurrency,
  selectFilteredRates,
  selectIsError,
  selectIsLoading,
  selectRates,
} from 'reduxState/selectors';

const Rates = () => {
  const dispatch = useDispatch();
  const isError = useSelector(selectIsError);
  const baseCurrency = useSelector(selectBaseCurrency);
  const filteredRates = useSelector(selectFilteredRates);
  const rates = useSelector(selectRates);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchRates(baseCurrency));
  }, [dispatch, baseCurrency]);

  return (
    <Section>
      <Container>
        <Heading
          info
          bottom
          title={
            <Wave
              text={`$ $ $ Current exchange rate for 1 ${'UAH'} $ $ $`}
              effect="fadeOut"
              effectChange={4.0}
            />
          }
        />

        {isError && (
          <Heading
            error
            title="Something went wrong...😐 We cannot show current rates!"
          />
        )}
        {isLoading && <Loader />}
        {rates.length > 0 && !isLoading && <Filter />}
        {filteredRates.length > 0 ? (
          <RatesList rates={filteredRates} />
        ) : (
          <Heading error title="We did not find such a currency..." />
        )}
      </Container>
    </Section>
  );
};

export default Rates;
