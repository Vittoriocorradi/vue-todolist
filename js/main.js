const { createApp } = Vue;

createApp({
    data() {
        return {
            todoList: [
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
    }
}).mount('#app');