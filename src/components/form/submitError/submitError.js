import styled from "styled-components";
import {lighten} from "polished";

const SubmitError = styled.div`
  background-color: ${() => lighten(0.55, '#cc0000')};
  color: #cc0000;
  border: 1px solid #cc0000;
  padding: 0.50rem 0.80rem;
  border-radius: 8px;
  height: auto;
  width: 100%;
  margin-bottom: 7px;
`;

export default SubmitError;