import styled from 'styled-components'

type CustomButtonProps = {
  isOutlined: boolean
}

export const CustomButton = styled.button<CustomButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: ${props => (props.isOutlined ? '#fff' : '#835afd')};
  color: ${props => (props.isOutlined ? '#835afd' : '#fff')};
  border: ${props => (props.isOutlined ? '1px solid #835afd' : 0)};
  cursor: pointer;
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
