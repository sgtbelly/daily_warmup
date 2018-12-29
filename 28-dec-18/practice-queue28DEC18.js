'use strict';
import from
class Queue{
    constructor(){
        this.items = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    }

    printQueue() {
        var str = " ";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }

}




