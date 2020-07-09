import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #FE9E0E;
  border-radius: 5px;
  max-width: 164px;
  height: 48px;
  color: #fff;
  cursor: pointer;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0.8px;
  border: 0;
  margin-top: 16px;
  transition: background-color 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${shade(0.2, '#FE9E0E')}
  }
`;
