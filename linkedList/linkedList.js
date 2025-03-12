
'use strict'
//declaring node objects
//reminder : js class defines an object 
class Node {
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
        //this == the current node
        // const self = this;
        // console.log(this);
        //creating a new node
        const newNode = new Node(value);


        if (!this.head) {
            //if head was empty:
            this.head = newNode;
            // console.log(this.head)
        } else {
            //if head is not empty and had a reference 
            let current = this.head;
            //search for all next objects in the linked list
            //and exit it when the next property points to nothing
            while (current.next) {
                //if the next points to an object let the current variable reference to the new object 
                current = current.next
            }
            //setting the new node to the last object that linkedlist is referencing
            current.next = newNode;
        }
        return this;
    },
    add: (value, nodeValue) => {
        // const self = this;
        let newNode = new Node(value);
        if (!this.head) {
            return console.log("the linked list is empty and cant add the value in the chosen position");
        } else {


            let current = this.head;
            if (current.data === nodeValue) {
                newNode.next = current;
                this.head = newNode;
                return this;
            } else {
                while (current.next) {

                    if (current.next.data === nodeValue) {

                        newNode.next = current.next;
                        console.log(newNode);
                        current = newNode;



                        return this;
                    } else if (current.next.data === null) {
                        return console.log("there is no such element in the linked list to add a node");
                    }
                    current = current.next;
                }
            }




        }
    },

    remove: (nodeValue) => {
        // const self = this;
        // const newNode = new Node(nodeValue);
        //finding the node we want to remove
        if (!this.head) {
            return console.log("no data exist to remove in your linkedList");
        } else {
            let current = this.head;
            let changedCurrent = current.next;
            if (current.data === nodeValue) {


                this.head = changedCurrent;

                return this;
            } else {
                while (current.next) {
                    if (current.next.data === nodeValue) {
                        current.next = changedCurrent.next;
                        return this;

                    }
                    current = current.next;
                }
            }


        }
    }


}
let newLinkedList = new linkedList();











