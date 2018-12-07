import React, {Component} from 'react';
import * as axios from "axios";
import CardGrid from "../../../components/cardGrid/cardGrid";
import MessageItem from "./messageItem/messageItem";
import styled from "styled-components";
import {lighten} from "polished";


const ContactInfo = styled.div`
  color: ${props => lighten(0.2, props.theme.text)};
  font-size: 0.75rem;
  margin-top: 5px;
  margin-bottom: 10px;
`;

class Messages extends Component {
    state = {
        messages: []
    };

    async componentDidMount() {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/messages`);

        this.setState(() => ({
            messages: response.data.data.messages
        }))
    }


    render() {
        const { messages } = this.state;

        return (
            <div>
                <h1>Mensajes</h1>
                <CardGrid>
                    {
                       !!messages.length && messages.map((message, index) => (
                           <MessageItem key={index}>
                               <h3>{message.name + ' ' + message.lastname}</h3>
                               <ContactInfo>
                                   <p>{message.phone}</p>
                                   <p>{message.email}</p>
                               </ContactInfo>
                               <p>
                                   {message.message}
                               </p>
                           </MessageItem>
                       ))
                    }
                </CardGrid>
            </div>
        );
    }
}

export default Messages;