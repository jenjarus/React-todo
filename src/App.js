import React, {Component} from 'react';
import Form from './Components/Form';
import FilterBlock from './Components/FilterBlock';
import TasksList from './Components/TasksList';
import './style/reset.css'
import './style/style.scss'

export default class App extends Component {
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
              <Form />
              <FilterBlock />
              <TasksList />
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
