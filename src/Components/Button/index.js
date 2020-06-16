import React from 'react';
import { ButtonContainer, ButtonElement } from './styles';

const Button = (props) => {
    return (
        <ButtonContainer>
            <ButtonElement onClick={props.onClick}>{props.title}</ButtonElement>
        </ButtonContainer>
    )
}

export default Button;