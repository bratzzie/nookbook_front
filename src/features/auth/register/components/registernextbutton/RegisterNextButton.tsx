import styled from 'styled-components'
import { RegisterNextButtonProps } from '../../../../../utils/GlobalInterfaces'

export const RegisterNextButton = styled.button<RegisterNextButtonProps>`
    width: 75%;
    margin-top: 15px;
    height : 52px;
    color : white;
    font-size: 17px;
    border-radius: 30px;
    border: none;
    background-color: ${(props) => props.color === 'success' ? '#00b6aa' : "#5f6057"};
    cursor: ${(props) => props.active ? 'pointer' : 'auto'};
`