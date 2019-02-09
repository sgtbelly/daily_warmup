'use strict';

function Stack() {
    this.top = null;
}

Stack.prototype.sort = function() {
    var s2 = new Stack();

    while (this.top) {
        var tmp = this.pop();

        while (s2.top && s2.top.data > tmp) {
            s1.push(s2.pop());
        }
        s2.push(tmp);
    }

    console.log('Sorted stack = ', s2);
};

var s1 = new Stack();

s1.push(3);
s1.push(6);
s1.push(1);
s1.push(2);
s1.push(5);
s1.push(4);

s1.sort();