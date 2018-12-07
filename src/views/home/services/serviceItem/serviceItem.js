import styled from "styled-components";
import {lighten} from "polished";

const ServiceItem = styled.div`
  width: auto;
  height: auto;
  max-width: 200px;
  border-right: 1px solid ${props => lighten(0.7, props.theme.text)};
  text-align: center;
  padding: 1rem;
  margin-bottom: 20px;
`;

export default ServiceItem;