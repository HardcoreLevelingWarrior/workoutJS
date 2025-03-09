(function (global) {
    'use strict'
    //declaring node objects
    //reminder : js class defines an object 
    class node {
        constructor(value) {
            this.data = value;
            this.next = null;
        }
    }
    function linkedList() {
        //defining the head node
        this.head = null;
    }
    linkedList.prototype = {
        append: (value) => {
            //creating a new node
            const newNode = new node(value);
            //this == the current node
            const self = this;
            if (!this.head) {
                //if head was empty:
                self.head = newNode;
            } else {
                //if head is not empty and had a reference 
                let current = self.head;
                //search for all next objects in the linked list
                //and exit it when the next property points to nothing
                while (current.next) {
                    //if the next points to an object let the current variable reference to the new object 
                    current = current.next
                }
                //setting the new node to the last object that linkedlist is referencing
                current.next = newNode;
            }

        },
        add: (value, nodeValue) => {
            self = this;
            const newNode = new node(value);
            if (!this.head) {
                throw ("the linked list is empty and cant add the value in the chosen position")
            } else {
                let current = next.head;
                while (current.next) {
                    if (current.next.data === nodeValue) {
                        newNode = current.next;
                        current = newNode;
                        return self;
                    } else {
                        throw ("cant find the place you want to add your data")
                    }
                }
            }

        },
        remove: (nodeValue) => {
            self = this;
            const newNode = new node(nodeValue);
            //finding the node we want to remove
            if (!self.head) {
                throw ("no data exist to remove in your linkedList")
            } else {
                let current = self.head;
                while (current.next) {
                    if (current.next.data === nodeValue) {
                        current.removedVar = current.next;
                        current.next = removedVar.next;
                        delete current.removedVar;
                        return self;

                    }
                }
            }
        }


    }



}(window));
console.log(window);



