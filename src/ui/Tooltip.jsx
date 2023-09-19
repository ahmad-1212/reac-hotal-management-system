import { useState } from "react";
import styled from "styled-components";
import { useScreenSize } from "../hooks/useScreenSize";

const StyledTooltip = styled.div`
  width: 100%;
  position: relative;
`;

const TooltipValue = styled.span`
  position: absolute;
  width: max-content;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  opacity: ${(props) => props.opacity};
  transform: translateX(-50%);
  display: block;
  font-size: 10px;
  padding: 5px 8px;
  border-radius: 5px;
  z-index: 10000;
`;

function Tooltip({ children, tooltipValue, ...props }) {
  const [show, setShow] = useState(false);
  const { screenSize } = useScreenSize();

  if (screenSize <= 900) return children;

  return (
    <StyledTooltip>
      <span
        onMouseOver={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </span>
      {show && <TooltipValue {...props}>{tooltipValue}</TooltipValue>}
    </StyledTooltip>
  );
}

export default Tooltip;
