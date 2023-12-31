import styled from "styled-components";

export const ContainerContact = styled.div`
  padding-bottom: 3rem;
  background: #111111;
  height: 86vh;

  display: flex;
`;

export const ContentContainer = styled.div`
  min-width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerInfoContact = styled.div`
  width: 35rem;
  height: 40rem;
  padding-left: 2.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContainerTitleContact = styled.div`
  strong {
    font-size: 3rem;
    background-image: linear-gradient(to right, #08adff, #08fbff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  span {
    color: white;
    font-size: 1.25rem;
  }

  display: flex;
  flex-direction: column;
`;

export const ContainerSocial = styled.div`
  div {
    height: 4rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    i {
      color: white;
    }

    span {
      color: white;
      font-size: 1.25rem;
    }
    border-bottom: 1px solid #333333;
  }
`;

export const ContainerForm = styled.div`
  width: 30rem;
  height: 40rem;
  border-radius: 3.5rem;
  background: #fff;
  box-shadow: 0px 4px 50px 0px #0aaeff;
  padding: 2rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 100%;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input,
    textarea {
      height: 2.5rem;
      background: rgba(217, 217, 217, 0.5);
      border: 1px solid transparent;
      border-image: linear-gradient(to right, #51acf9, #6de7fd);
      border-image-slice: 1;
      outline: none;
      padding: 0 0.5rem;
    }
  }
`;

export const Button = styled.button`
  width: 20rem;
  height: 4rem;
  border: 0;
  border-radius: 50px;
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
  background: linear-gradient(to right, #08adff, #08fbff);
  color: #111111;

  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    background: gray;
    color: white;
  }
`;
