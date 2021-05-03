import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  input {
    padding: 14px 12px 12px 42px;
    width: 280px;
    border-radius: 24px;
    background-color: #e1e1e5;
    font-size: 16px;
    border: none;
    outline: none;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.04);

    &::placeholder {
      font-size: 16px;
      font-weight: 500;
      color: #656464;
    }

    &:active + .searchIcon {
      right: 10px;
    }
  }

  .searchIcon {
    position: absolute;
    left: 14px;
    top: 12px;
    font-size: 19px;
  }

  .options {
    display: flex;
    flex-direction: column;
    position: absolute;
    border-radius: 24px;
    top: 50px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.04);

    p {
      padding: 14px 14px 18px 20px;
      width: 280px;
      background-color: #e1e1e5;
      font-size: 16px;
      border: none;
      outline: none;
      z-index: 2;
      cursor: pointer;

      &:hover {
        background-color: #d8d8d8;
      }

      &:first-child {
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
      }

      &:last-child {
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
      }
    }
  }
`;
