import React from 'react';
import styled from "styled-components";

const MessageItem= styled.div`
  width: 200px;
  height: auto;
  padding: 1rem 1.25rem;
  border-radius: 6px;
  border: 1px solid ${props => props.theme.text};
  margin-right: 20px;
  background-color: #ffffff;
  box-shadow: 0 0 4px 2px #dddddd;
  margin-top: 10px;
  
  h3 {
    color: ${props => props.theme.secondary};
  }
`;

export default MessageItem;
