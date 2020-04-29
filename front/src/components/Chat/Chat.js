import React from 'react'
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:8000";
const socket = socketIOClient(ENDPOINT);
export default class Chat extends React.Component {
    state = {
        response: null
    }
    componentWillUnmount() {
        socket.emit('disconnect')
    }
    componentDidMount() {

        socket.on("increment", data => {
            this.setState({ response: data });
        })
    } render() {
        return (<p onClick={() => {
            socket.emit('increment')
            socket.on("increment", data => {
                this.setState({ response: data });
            })
        }}> Hi how are you { this.state.response}</p >)
    }
}
