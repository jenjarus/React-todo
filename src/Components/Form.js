import React, {Component} from 'react';
import { connect } from 'react-redux'
import { addTask } from '../actions'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    handleTask = (e) => {
        e.preventDefault();
        const newTask = {
            id: 0,
            text: this.state.text,
            done: false,
            show: true,
        };
        if (this.props.tasks.length) {
            newTask.id = this.props.tasks[this.props.tasks.length - 1].id + 1;
        } else {
            newTask.id = 0;
        }
        if(this.props.filter === 'done') {
            newTask.show = false
        }
        this.props.addTask(newTask);
    };

    handleTextTask = (e) => {
        this.setState({text: e.target.value});
    };

    render() {
        return (
            <form className={"form-group"} onSubmit={this.handleTask}>
                <input type="text" value={this.state.text} onChange={this.handleTextTask} />
                <button className={'btn'}>Добавить</button>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        filter: state.filter,
        tasks: state.tasks
    }
}
const mapDipatchToProps = {
    addTask
};

export default connect(mapStateToProps, mapDipatchToProps)(Form)
