import React from 'react'
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:8000";
const Chat = (props) => {
    const [response, setResponse] = React.useState("");

    React.useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        socket.on("connection", data => {
            setResponse(data);
        });
    }, []);
    return (<p>
            Hi How are you
    </p>)
}

export default Chat