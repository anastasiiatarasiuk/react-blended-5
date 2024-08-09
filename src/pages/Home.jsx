import {
  Container,
  Heading,
  Section,
  ExchangeForm,
  ExchangeInfo,
  Loader,
} from 'components';
import { useSelector } from 'react-redux';
import {
  selectExchangeCurrency,
  selectIsError,
  selectIsLoading,
} from 'reduxState/selectors';

const Home = () => {
  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);
  const exchangeInfo = useSelector(selectExchangeCurrency);

  return (
    <Section>
      <Container>
        <ExchangeForm />
        {!isError && !exchangeInfo && (
          <Heading info title="What currencies do you want to exchange?🙂" />
        )}
        {exchangeInfo && <ExchangeInfo {...exchangeInfo} />}
        {isLoading && <Loader />}
        {isError && (
          <Heading
            error
            title="Something went wrong...😐 Check the data validity and try again!"
          />
        )}
      </Container>
    </Section>
  );
};

export default Home;
