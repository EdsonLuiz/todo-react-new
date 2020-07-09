import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  border-radius: 5px;
  padding: 16px;
  width: 436px;
  color: #232323;
  display: flex;
  flex:1; /*te falei do flex 1 alterado */
  align-items: center;

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: #333;
    
    font-size: 16px;
    font-weight: bold;
    font-family: 'Poppins';
  }

 
`;