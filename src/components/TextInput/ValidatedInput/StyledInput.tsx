import styled from 'styled-components';
import { StyledInputProps } from '../../../utils/GlobalInterfaces';
import { determineLabelColor, determineStyledInputBorder } from '../../../features/auth/register/utils/TextInputUtils';

export const StyledInputBox = styled.div<StyledInputProps>`
    position: relative;
    border-radius: 20px;
    width: 100%;
    height: 56px;
    display: flex;
    flex-direction: column;
    border: 2px dashed;
    background-color: #fefff1;
    border-color: ${(props) => determineStyledInputBorder(props)};
`

export const StyledInputLabel = styled.span<StyledInputProps>`
    position: absolute;
    left: 10px;
    font-weight: 400;
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: ${(props) => props.active ? '12px' : '15px'};
    top: ${(props) => props.active ? '2px' : '12px'};
        color: ${(props) => determineLabelColor(props)};
    `
