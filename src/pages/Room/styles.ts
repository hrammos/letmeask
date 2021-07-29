import styled from 'styled-components'

export const Header = styled.header`
  padding: 24px;
  border-bottom: 1px solid #e2e2e2;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 1120px;
    margin: 0 auto;

    > img {
      max-height: 45px;
    }
  }
`

export const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;

  div {
    display: flex;
    align-items: center;

    margin: 32px 0 24px;

    h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 24px;
      color: #29292e;
    }

    h1 ~ span {
      margin-left: 16px;
      background: #e559f9;
      border-radius: 9999px;
      padding: 8px 16px;
      color: #fff;
      font-weight: 500;
      font-size: 14px;
    }
  }
`

export const Form = styled.form`
  textarea {
    width: 100%;
    border: 0;
    padding: 16px;
    border-radius: 8px;
    background: #fefefe;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    resize: vertical;
    min-height: 130px;
  }
`

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 16px;

  span {
    font-size: 14px;
    color: #737380;
    font-weight: 500;

    button {
      background: transparent;
      border: 0;
      color: #835afd;
      text-decoration: underline;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
    }
  }
`
