/**
 * Created by lyy on 2017/8/9.
 */
new Vue({
    el: '#app-1',
    data: {
        message: ''
    }
});

new Vue({
    el: '#app-2',
    data: {
        message: ''
    }
});

new Vue({
    el: '#app-3',
    data: {
        checked: '',
        checkedNames: []
    }
});

new Vue({
    el: '#app-4',
    data: {
        picked: ''
    }
});

new Vue({
    el: '#app-5',
    data: {
        selected_disable: '',
        selected_multiple: [],
        selected: 'A',
        options: [
            {text: 'One', value: 'A'},
            {text: 'Two', value: 'B'},
            {text: 'Three', value: 'C'}
        ]
    }
});