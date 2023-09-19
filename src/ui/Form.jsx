import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);

      @media (max-width: 1200px) {
        width: 53rem;
        margin: 0 auto;
      }

      @media (max-width: 600px) {
        max-width: 40rem;
        width: 100%;
        margin: 0 auto;
      }
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      max-width: 80rem;
      width: 80vw;
      height: 80dvh;
      overflow-y: auto;
      padding: 3rem;

      &::-webkit-scrollbar {
        width: 0;
      }

      &::-webkit-scrollbar {
        width: 10px;
        background-color: var(--color-grey-300);
      }

      &::-webkit-scrollbar-thumb {
        width: 10px;
        background-color: var(--color-grey-400);
        border-radius: 5px;
      }

      @media (max-width: 1200px) {
        width: 60vw;
        padding: 0;
        padding-right: 1.5rem;
      }

      @media (max-width: 600px) {
        width: 70vw;
      }
    `}

  font-size: 1.4rem;
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;
