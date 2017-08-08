/**
 * Created by lyy on 2017/8/8.
 */
var example1 = new Vue({
    el: '#example-1',
    data: {
        items: [
            {message: 'Foo'},
            {message: 'Bar'}
        ]
    }
});

var example2 = new Vue({
    el: '#example-2',
    data: {
        parentMessage: 'Parent',
        items: [
            {message: 'Foo'},
            {message: 'Bar'}
        ]
    }
});

new Vue({
    el: '#repeat-object',
    data: {
        object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
        }
    }
});

new Vue({
    el: '#example'
});