import React, {Component} from 'react';

class Task extends Component {

    constructor() {
        super()
        this.state = {
            text: '',
            editMode: false
        }
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    componentDidMount () {
        this.setState({text: this.props.task.text})
    }

    handleTextChange (value) {
        this.setState({text: value})
    }


    toggleEdit = () => {
        this.setState({editMode: !this.state.editMode})
    }

    handleKeyUp (e) {
        e.preventDefault();
        if (e.keyCode === 13) {
            document.getElementById("button").click();
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.editMode ? (
                        <div className='task-edit-container'>
                            <input className="task-edit-input" value={this.state.text} type='text' onChange={e => this.handleTextChange(e.target.value)}/>
                            <div className='task-edit-buttons'>
                                <button className="task-edit-confirmation" onClick={() => {
                                    this.props.editTask(this.state.text, this.props.task.id)
                                    this.toggleEdit()
                                    }}>Confirm</button>
                                <button onClick={this.toggleEdit}>Cancel</button>
                            </div>

                        </div>
                    ) : (
                        <div className='individual-task'>
                            <p className="task-text">{this.props.task.text}</p>
                            <div className="task-buttons">
                                <button className="task-edit-button" onClick={this.toggleEdit}>Edit</button>
                                <button className="task-delete-button" onClick={() => this.props.deleteTask(this.props.task.id)}>Delete</button>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Task;

