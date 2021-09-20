import React, {Component} from 'react';
import Form from './Components/Form';
import FilterBlock from './Components/FilterBlock';
import TasksList from './Components/TasksList';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  addTask = (task) => {
    this.setState({tasks: [...this.state.tasks, task]});
  };

  checkboxDone = (id) => {
    let stateTasks = this.state.tasks;
    stateTasks[id].done = !stateTasks[id].done;
    this.setState({tasks: stateTasks});
  };

  delTask = (id) => {
    let stateTasks = this.state.tasks;
    stateTasks.splice(id, 1);
    this.setState({tasks: stateTasks});
  };

  delDoneTask = () => {
    let stateTasks = this.state.tasks;
    stateTasks = stateTasks.filter(el => el.done !== true);
    this.setState({tasks: stateTasks});
  };

  render() {
    return (
        <div>
          <Form addTask={this.addTask} />
          <FilterBlock delDoneTask={this.delDoneTask} />
          <TasksList
              tasks={this.state.tasks}
              checkboxDone={this.checkboxDone}
              delTask={this.delTask}
          />
        </div>
    );
  }
}
