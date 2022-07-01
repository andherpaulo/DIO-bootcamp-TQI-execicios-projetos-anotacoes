import { useState } from 'react';

function SmartCounter() {
    const [quantity, upQuantity] = useState(1);

    //useState() - retorna um vetor
    //             [0] variavel stateful
    //             [1] função amarrada a essa variavel que atualiza esse valor

    return (
        <>
            <h1>{quantity}</h1>
            <button onClick={() => { upQuantity(quantity + 1) }}>Aumentar</button>
        </>
    );
}

export default SmartCounter;