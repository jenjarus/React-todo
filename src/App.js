import React, {Component} from 'react';
import Form from './Components/Form';
import FilterBlock from './Components/FilterBlock';
import TasksList from './Components/TasksList';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'all',
      tasks: []
    };
  }

  addTask = (task) => {
    if (this.state.tasks.length) {
      task.id = this.state.tasks[this.state.tasks.length - 1].id + 1;
    } else {
      task.id = 0;
    }
    this.setState({tasks: [...this.state.tasks, task]});
  };

  checkboxDone = (id) => {
    let stateTasks = this.state.tasks;
    stateTasks.filter(el => {
      if(el.id === id)
        el.done = !el.done
    });
    this.setState({tasks: stateTasks});
    this.filterStatus();
  };

  delTask = (id) => {
    let stateTasks = this.state.tasks;
    stateTasks = stateTasks.filter(el => el.id !== id);
    this.setState({tasks: stateTasks});
  };

  delDoneTask = () => {
    let stateTasks = this.state.tasks;
    stateTasks = stateTasks.filter(el => el.done !== true);
    this.setState({tasks: stateTasks});
  };

  showAllTask = () => {
    let stateTasks = this.state.tasks;
    stateTasks = stateTasks.filter(el => el.show = true);
    this.setState({tasks: stateTasks, filter: 'all'});
  };

  showDoneTask = () => {
    let stateTasks = this.state.tasks;
    stateTasks = stateTasks.filter(el => el.show = true);
    stateTasks.filter(el => {
      if(el.done === false)
        el.show = false
    });
    this.setState({tasks: stateTasks, filter: 'done'});
  };

  showActiveTask = () => {
    let stateTasks = this.state.tasks;
    stateTasks = stateTasks.filter(el => el.show = true);
    stateTasks.filter(el => {
      if(el.done === true)
        el.show = false
    });
    this.setState({tasks: stateTasks, filter: 'active'});
  };

  filterStatus = () => {
    switch (this.state.filter) {
      case 'all':
        this.showAllTask();
        break;
      case 'done':
        this.showDoneTask();
        break;
      case 'active':
        this.showActiveTask();
        break;
      default:
        console.log('Упс');
        break;
    }
  };

  render() {
    return (
        <div>
          <Form addTask={this.addTask} />
          <FilterBlock
              showAllTask={this.showAllTask}
              showDoneTask={this.showDoneTask}
              showActiveTask={this.showActiveTask}
              delDoneTask={this.delDoneTask}
          />
          <TasksList
              tasks={this.state.tasks}
              checkboxDone={this.checkboxDone}
              delTask={this.delTask}
          />
        </div>
    );
  }
}
