let tasks = [];
let id = 1;

module.exports = {
    getTasks: (req, res) => {
        res.status(200).send(tasks)
    },

    addTask: (req, res) => {
        const {text} = req.body;
        let newTask = {
            text: text,
            id: id
        };
        id++;
        tasks.push(newTask);
        res.status(200).send(tasks);
    },

    updateTask: (req, res) => {
        const {id} = req.params;
        const {text} = req.body;
        let i = tasks.findIndex(task => task.id === Number(id));
        if (i !== -1) {
            tasks[i].text = text
        };
        res.status(200).send(tasks);
    },

    deleteTask: (req, res) => {
        const {id} = req.params;
        for (let i=0; i<tasks.length;i++) {
            if (tasks[i].id === +id) {
                tasks.splice(i,1);
            }
        }
        res.status(200).send(tasks);
    }
}
