const { createApp } = Vue;

createApp({
    data() {
        return {
            newTodo: {
                text: '',
                done: false
            },
            todoList: [  //Lista oggetti todo
                {
                    text: 'Comprare il pane',
                    done: false
                },
                {
                    text: 'Dare da mangiare alle papere',
                    done: true
                },
                {
                    text: 'Scalare un monte',
                    done: false
                },
                {
                    text: 'Tuffarsi',
                    done: false
                }
            ]
        }
    },
    methods: {
        deleteTodo(index) {
            this.todoList.splice(index, 1);
        },
        addTodo() {
            if (this.newTodo.text.trim() !== '') {
                this.todoList.push(this.newTodo);
                this.newTodo = {
                    text: '',
                    done: false
                };
            }
        },
        isDone(index) {
            if (this.todoList[index].done === true) {
                this.todoList[index].done = false;
            } else {
                this.todoList[index].done = true;
            }
        }
    }
}).mount('#app');