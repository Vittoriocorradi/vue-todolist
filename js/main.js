const { createApp } = Vue;

createApp({
    data() {
        return {
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
        }
    }
}).mount('#app');