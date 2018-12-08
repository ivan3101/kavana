import styled from "styled-components";

const MessageItem = styled.div`
  width: 300px;
  height: auto;
  padding: 1rem 1.25rem;
  border-radius: 6px;
  margin-right: 20px;
  background-color: #ffffff;
  box-shadow: 0 0 2px 1px #dddddd;
  margin-top: 10px;
  min-height: 250px;
  
  h3 {
    color: ${props => props.theme.secondary};
  }
`;

export default MessageItem;
