class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    size() {
        let count = 0;
        let currentNode = this.head;
        while (currentNode !== null) {
            count++;
            currentNode = currentNode.next;
        }
        return count;
    }

    clear() {
        this.head = null;
    }

    display() {
        return JSON.stringify(this.head);
    }

    getLast() {
        let currentNode = this.head;
        if (currentNode.next === null) {
            return currentNode;
        }
        while (currentNode !== null) {
            if (currentNode.next === null) {
                return currentNode;
            } else {
                currentNode = currentNode.next;
            }
        }
    }

    getFirst() {
        return this.head;
    }

    insertAt(index, nodeToInsert) {
        //will go off of standard arr start from 0. if index > length, insert at tail
        //assumes node is a SINGLE node
        let currentNode = this.head; //0th index
        let restOfList;

        if (index === 0) {
            this.head = nodeToInsert;
            this.head.next = currentNode;
            return;
        }
        else if (index === 1) {
            restOfList = this.head.next;
            nodeToInsert.next = restOfList;
            this.head.next = nodeToInsert;
            return;
        }
        let currentIndex = index;
        while (currentIndex - 1 > 0 && currentNode.next !== null) {
            currentIndex--;
            currentNode = currentNode.next;
        }
        restOfList = currentNode.next;
        nodeToInsert.next = restOfList;
        currentNode.next = nodeToInsert;
        return;
    }

    removeAt(index) { //if greater than total index, remove nothing;
        let previousNode = this.head; //0
        let currentNode = previousNode.next; //1
        if (index < 0) {
            return;
        }
        else if (index === 0) {
            currentNode = previousNode.next;
            this.head = currentNode;
            return;
        }
        else if (index === 1) {
            currentNode = currentNode.next; //2
            previousNode.next = currentNode; //0 links to 2
            return;
        }
        while (index - 1 > 0 && currentNode.next !== null) {
            previousNode = previousNode.next;
            currentNode = currentNode.next;
            index--;
        }
        if (index - 1 !== 0) {
            console.log('Invalid index');
            return;
        } else {
            previousNode.next = currentNode.next;
            return;
        }
    }

    reverse() {
        let previousNode = this.head;
        let currentNode = this.head.next;
        previousNode.next = null; //make head the tail -- point head.next to null.
        while (currentNode !== null) {
            let nextNode = currentNode.next; //save pointer to following node
            currentNode.next = previousNode; //point current to previous node
            previousNode = currentNode; //move up previous node to current
            currentNode = nextNode; //move up current to next
        }
        this.head = previousNode;
        return;
    }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;

const list = new LinkedList(node1);

console.log(list.display());