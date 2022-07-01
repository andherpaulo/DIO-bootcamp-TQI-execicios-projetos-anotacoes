import styled from 'styled-components';

export const Button = styled.button`
    background: #dc872c;
    color: #fff;
    border: none;
    border-radius: 0;
    font-size: 1.5em;
    padding: 10px 20px;
    font-family: 'New Tegomin', serif;
    cursor: pointer;
    box-shadow: #333 3px 3px;

    &:hover {
        background: #a40000;
    }
`;

// import { string } from 'prop-types';
// import styledComponents from 'styled-components';

// export const Button = ({children}) => {
//     return <button>{children}</button>;
// };

// Button.propTypes = {
//     children: string
// }