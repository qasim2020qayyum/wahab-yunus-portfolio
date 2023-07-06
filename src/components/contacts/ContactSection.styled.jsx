import styled, { keyframes } from "styled-components";

const float = keyframes`
    from { transform: translate(0,  0px); }
    65%  { transform: translate(0, 10px); }
    to   { transform: translate(0, 0px); } 
    `;

export const StyledContactSection = styled.section`
  min-height: 70vh;
  padding: 10rem 5rem 5rem 5rem;
  width: 100%;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column-reverse;
  }
`;
export const ContactInfo = styled.div`
  flex: 1;
  font-family: "Poppins", sans-serif;
  font-size: 18px;

  p {
    padding: 0rem;
    margin: 0 0 2rem 0;
    text-align: justify;
  }

  div {
    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      margin: 0 2rem 2rem 0;

      svg {
        margin-right: 0.5rem;
      }
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
      align-items: flex-start;
      flex-direction: column;

      a {
        margin: 0 0rem 2rem 0;
        font-size: 16px;
      }
    }
  }
`;
export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-end;
  height: 100%;

  img {
    width: 70%;
    animation: ${float} 3s ease-in-out infinite;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: flex-start;
    margin-bottom: 2rem;
  }
`;
export const StyledContactForm = styled.div`
  max-width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: #f9ab00;
      color: white;
      border: none;
    }
  }
`;