import styled from "styled-components";

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: start;
  }
`;

export default TableOperations;
