import React, {Component} from 'react';
import Form from './Components/Form';
import FilterBlock from './Components/FilterBlock';
import TasksList from './Components/TasksList';
import './style/reset.css'
import './style/style.scss'

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
    this.setState(prevState => (
          {tasks: prevState.tasks.filter(el => el.id !== id)}
        )
    );
  };

  delDoneTask = () => {
    this.setState(prevState => (
          {tasks: prevState.tasks.filter(el => el.done !== true)}
        )
    );
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
    const date = new Date();
    return (
        <>
          <header>
            <div className="container">
              <div className={'header'}>
                <div className="title"><span className="red">TO</span>-DO</div>
              </div>
            </div>
          </header>
          <main>
            <div className="container">
              <Form addTask={this.addTask} />
              <FilterBlock
                  filter={this.state.filter}
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
          </main>
          <footer>
            <div className="container">
              <div className="footer">
                <div className="copy">©Jenjarus <span className="year">{date.getFullYear()}</span></div>
              </div>
            </div>
          </footer>
        </>
    );
  }
}
