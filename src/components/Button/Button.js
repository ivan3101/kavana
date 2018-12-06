import styled from "styled-components";

const Button = styled.button`
  text-align: center;
  padding: 0.40rem 1rem;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.primary};
  border-radius: 20px;
  cursor: pointer;
  height: auto;
  border: none;
  
  :disabled {
    background-color: #777777;
    cursor: not-allowed;
  }
`;

export default Button;