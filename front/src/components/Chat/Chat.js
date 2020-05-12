import React from 'react'
import io from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:8000";
const socket = io(':8000');

let counter = 0
socket.on("increment", data => {
    console.log(data)
    counter = data
})



export default class Chat extends React.Component {
    state = {
        response: -1
    }
    // componentWillUnmount() {
    //     socket.emit('disconnect')
    // }
    componentDidUpdate(prevProp, prevState) {
        if (counter !== prevState.response) {
            this.setState({ response: counter })
        }
    }
    componentDidMount() {
        socket.on("increment", data => {
            this.setState({ response: data });
        })

    }
    onClickHandler = () => {
        socket.emit('increment')
        this.setState({ response:counter })
        // socket.on("increment", data => {
        //     counter = data
        // })

    }
    render() {
        return (<p onClick={this.onClickHandler}> Hi how are you {this.state.response}</p >)
    }
}
