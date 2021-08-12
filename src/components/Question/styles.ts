import styled from 'styled-components'

type TContainerProps = {
  highlighted: boolean
  answered: boolean
}

export const Container = styled.div<TContainerProps>`
  background: #fefefe;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;
  margin-top: 32px;

  & + div {
    margin-top: 8px;
  }

  p {
    color: #29292e;
  }

  background: ${props => props.highlighted && '#f4f0ff'};
  border: ${props => props.highlighted && '1px solid #835afd'};

  background: ${props => props.answered && '#dbdcdd'};
  border: ${props => props.answered && 'none'};

`

export const FooterQuestion = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 24px;

  > div {
    display: flex;
    align-items: center;
    gap: 16px;

    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }

    span {
      margin-left: 8px;
      color: #737380;
      font-size: 14px;
    }
  }

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
  }
`

type TLikeButtonProps = {
  liked: boolean
}

export const LikeButton = styled.div<TLikeButtonProps>`
  display: flex;
  align-items: center;
  color: ${props => (props.liked ? '#835afd' : '#737380')};

  button span {
    position: relative;
    top: -3px;
    color: ${props => (props.liked ? '#835afd' : '#737380')};
  }

  svg {
    margin-left: 8px;
  }

  svg path {
    stroke: ${props => (props.liked && '#835afd')};
  }

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.7)
  }
`

