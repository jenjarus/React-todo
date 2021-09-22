import React, {Component} from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    handleTask = (e) => {
        e.preventDefault();
        const newTask = {
            text: this.state.text,
            done: false,
            show: true,
        };
        this.props.addTask(newTask);
    };

    handleTextTask = (e) => {
        this.setState({text: e.target.value});
    };

    render() {
        return (
            <form className={"form-group"} onSubmit={this.handleTask}>
                <input type="text" value={this.state.text} onChange={this.handleTextTask} />
                <button>Добавить</button>
            </form>
        );
    }
}
