import styled from "styled-components";

const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  background-color: ${(props) => props.backgroundColor};
  backdrop-filter: blur(${(props) => props.blur});
  z-index: ${(props) => props.zIndex};
`;

export default Backdrop;
