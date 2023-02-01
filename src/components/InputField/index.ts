import styled from 'styled-components';

const InputField = styled.input`
    color: white;
    outline: none;
    border: none;
    background: #1a1a1a;
    display: flex;
    align-items: center;
    font-size: 16px;
    height: 40px;
    border-radius: 10px;
    padding-left: 10px;
    transition: box-shadow 0.3s ease-in-out;

    &:hover {
        box-shadow: 0px 0px 10px #999;
    }

    &::placeholder {
        color: #8e8e8e;
        font-size: 16px;
    }

    &:focus::placeholder {
        color: transparent;
    }
`;

export default InputField;
