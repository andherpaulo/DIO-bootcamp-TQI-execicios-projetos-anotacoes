import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import narutoImg from '../../images/naruto.png';
import { Quotes } from '../../components/quotes/Quotes';
import { getQuote } from '../../services/quotesService/quotesService';
import jutsoSound from '../../sounds/jutso.mp3';

const audio = new Audio(jutsoSound);

export function App(){
  const isMounted = useRef(true);

  console.log(isMounted);

  const [quoteState, setQuoteState] = useState({
    quote: 'loading quote...',
    speaker: 'loading speaker'
  });

  const onUbdate = async () => {
    const quote = await getQuote();

    if(isMounted.current) {
      audio.play();
      setQuoteState(quote);
    }
  };

  useEffect(() => {
    onUbdate();

    return () => {
      isMounted.current = false;
    }
  }, []);

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