import styled from "styled-components";

const StyledDataItem = styled.div`
  display: flex;
  align-items: start;
  gap: 1.6rem;
  padding: 0;
  flex-wrap: wrap;
  gap: 1rem;

  &,
  &:not(:last-child) {
    margin-bottom: 01rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 500;

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-brand-600);
  }
`;

const Message = styled.div`
  padding-left: 3rem;
`;

function DataItem({ icon, label, children }) {
  return (
    <StyledDataItem>
      <Label>
        {icon}
        <span>{label}</span>
      </Label>
      <Message>{children}</Message>
    </StyledDataItem>
  );
}

export default DataItem;
