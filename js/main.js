const { createApp } = Vue;

createApp({
    data() {
        return {
            newTodo: {       //Nuovo todo
                text: '',
                done: false
            },
            todoList: [      //Lista oggetti todo
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
        deleteTodo(index) {          //Cancella un todo
            this.todoList.splice(index, 1);
        },
        addTodo() {                  //Aggiungi un todo
            if (this.newTodo.text.trim() !== '') {
                this.todoList.push(this.newTodo);
                this.newTodo = {
                    text: '',
                    done: false
                };
            }
        },
        isDone(index) {      //Modifica il valore booleano di done
            if (this.todoList[index].done === true) {
                this.todoList[index].done = false;
            } else {
                this.todoList[index].done = true;
            }
        }
    }
}).mount('#app');