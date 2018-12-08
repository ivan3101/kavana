import React, {Component} from 'react';
import * as axios from "axios";
import MessageItem from "./messageItem/messageItem";
import styled from "styled-components";
import {lighten} from "polished";
import Pagination from "../../../components/pagination/pagination";

const ContactInfo = styled.div`
  color: ${props => lighten(0.2, props.theme.text)};
  font-size: 0.75rem;
  margin-top: 5px;
  margin-bottom: 10px;
`;

class Messages extends Component {
    state = {
        messages: [],
        totalMessages: 0,
        loading: true
    };

    async componentDidMount() {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/messages`);

        const { messages, totalMessages } = response.data.data;

        this.setState(() => ({
            messages,
            totalMessages,
            loading: false
        }));
    }

    async componentDidUpdate(prevProps) {
        const { page } = this.props.match.params;
        const { page: prevPage } = prevProps.match.params;

        if (page !== prevPage) {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/messages?offset=${(page - 1) * 9}`);

            const { messages } = response.data.data;

            this.setState(() => ({
                messages,
                loading: false
            }));
        }

    }

    onChangePage = (page) => {
        const { history } = this.props;

        history.push('/admin/mensajes/' + page);
    };

    messagesRender = (message, index) => (
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
    );

    render() {
        const { messages, loading, totalMessages } = this.state;

        return (
            <div>
                <h1>Mensajes</h1>
                <Pagination
                    items={messages}
                    renderFn={this.messagesRender}
                    loading={loading}
                    elementsPerPage={9}
                    totalItems={totalMessages}
                    onChangePage={this.onChangePage}
                />
            </div>
        );
    }
}

export default Messages;