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

    render() {
        return (
            <div>
                {
                    this.state.editMode ? (
                        <div>
                            <input className="task-edit-input" value={this.state.text} type='text' onChange={e => this.handleTextChange(e.target.value)}/>
                            <button className="task-edit-confirmation" onClick={() => {
                                this.props.editTask(this.state.text, this.props.task.id)
                                this.toggleEdit()
                                }}>Confirm</button>
                            <button onClick={this.toggleEdit}>Cancel</button>

                        </div>
                    ) : (
                        <div>
                            {this.props.task.text}
                            <button className="task-edit-button" onClick={this.toggleEdit}>Edit</button>
                            <button className="task-delete-button" onClick={() => this.props.deleteTask(this.props.task.id)}>Delete</button>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Task;

