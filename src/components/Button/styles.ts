import styled from 'styled-components'

export const CustomButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: #835afd;
  color: #fff;
  cursor: pointer;
  border: 0;
  padding: 0 32px;
  transition: filter 0.3s;

  img {
    margin-right: 8px;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
