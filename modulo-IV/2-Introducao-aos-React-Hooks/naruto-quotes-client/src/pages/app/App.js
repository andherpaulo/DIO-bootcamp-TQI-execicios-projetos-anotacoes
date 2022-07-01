import { useState } from 'react';
import styled from 'styled-components';
import narutoImg from '../../images/naruto.png';
import { Quotes } from '../../components/quotes/Quotes';
import { getQuote } from '../../services/quotesService/quotesService';

export function App(){
  const [quoteState, setQuoteState] = useState({
    quote: 'ok',
    speaker: 'Speaker'
  });

  const onUbdate = async () => {
    const quote = await getQuote();

    setQuoteState(quote);
  };

  return(
    <Content>
      <Quotes
        {...quoteState}     // equivale a -> quote={quoteState.quote}
        onUpdate={onUbdate} //               speaker={quoteState.speaker}
      />
      <NarutoImg src={narutoImg} alt="Naruto with a kunai" />
    </Content>
  );
}

const Content = styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NarutoImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`