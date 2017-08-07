/**
 * Created by lyy on 2017/8/7.
 */
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello World!'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '页面加载于' + new Date()
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            {text: 'javascript'},
            {text: 'Vue'},
            {text: 'react'}
        ],
        message: ''
    },
    methods: {
        addItems: function () {
            app4.todos.push({text: this.message});
            this.message = ''
        }
    }
});

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
});

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
});
var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            {id: 0, text: '蔬菜'},
            {id: 1, text: '奶酪'},
            {id: 2, text: '食物'}
        ]
    }
});