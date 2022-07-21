import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 4px;

    input {
        border: 1px solid #ccc;
        border-radius: 8px;
        width: 100%;
        height: 44px;
        padding: 8px;
        font-weight: 500;
    }

    button {
        background-color: #74bc98;
        padding: 8px 16px;
        margin: 0 16px;
        border-radius: 8px;

        &:hover {
            background-color: #0E4429;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        }

        span {
            font-weight: bold;
            color: white;
        }
    }
`;