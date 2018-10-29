import React , { Component } from 'react';
import axios from 'axios';
import Task from './task';

 class Todo extends Component {

    constructor() {
        super()
        this.state = {
            tasks: [],
            userInput: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.addTask = this.addTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    componentDidMount() {
        axios.get('/api/tasks').then(res => {
            this.setState({tasks: res.data})
        })
    }

    handleInputChange(value) {
        this.setState({userInput: value});
    }

    addTask () {
        axios.post('/api/tasks', {text: this.state.userInput}).then(res => {
            this.setState({
                tasks: res.data,
                userInput: ''
            })
        })
    }

    editTask (text, id) {
        axios.put(`/api/tasks/${id}`, {text}).then(res => {
            this.setState({
            tasks: res.data
            })
        })
    }

    deleteTask (id) {
        axios.delete(`/api/tasks/${id}`).then(res => {
            this.setState({
                tasks: res.data
            })
        })
    }

    handleKeyUp (e) {
            e.preventDefault();
            if (e.keyCode === 13) {
                document.getElementById("button").click();
            }
        }

    render () {
        var taskList = this.state.tasks.map(task => {
            return (
                <Task
                key={task.id} 
                task={task}
                deleteTask={this.deleteTask}
                editTask={this.editTask} />
            )
        })

        return (
            <div className="task-container">
                <h1 className="task-title">{this.state.tasks.length} Tasks To Complete</h1>
                <div className="tasks-list-container">
                    {taskList}
                </div>
                    <input value={this.state.userInput} className="task-input" placeholder='New Task' onChange={e => this.handleInputChange(e.target.value)} onKeyUp={this.handleKeyUp}></input>
                    <button id="button" className="task-confirmation" onClick={this.addTask}>Add Task</button>
            </div>
        )
    }
 }

export default Todo;