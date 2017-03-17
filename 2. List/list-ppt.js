'use strict';

//oooo                                   ooooooooooooooooo
//oooo                                   ooooooooooooooooo
//oooo                                         ooooo
//oooo              oooo    ooooooooo          ooooo
//oooo              oooo    |||                ooooo
//oooo              oooo    \\\                ooooo
//oooo              oooo      ooooo            ooooo
//ooooooooooooooooo oooo          oooo         ooooo
//ooooooooooooooooo oooo    oooooooo           ooooo


class List {
    constructor() {
        this.listSize = 0;
        this.pos = 0;
        this.dataStore = []; // initializes an empty array to store list elements
        this.clear = clear;
        this.find = find;
        this.toString = toString;
        this.insert = insert;
        this.append = append;
        this.remove = remove;
        this.front = front;
        this.end = end;
        this.prev = prev;
        this.next = next;
        this.length = length;
        this.currPos = currPos;
        this.moveTo = moveTo;
        this.getElement = getElement;
        this.length = length;
        this.contains = contains;
    }

// Append: Adding an Element to a List
    function append(element) {
        this.dataStore[this.listSize++] = element;
    }

//Find: Finding an Element in a List
    function find(element) {
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i] == element) {
                return i;
            }
        }
        return -1;
    }

// Remove: Removing an Element in a list
    function remove(element) {
        var foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            --this.listSize;
            return true;
        }
        return false;
    }

// Length: Determining the Number of Elements in a List
    function length() {
        return this.listSize;
    }

// toString: Retrieving a List’s Elements
    function toString() {
        return this.dataStore;
    }

//Insert: Inserting an Element into a List
    function insert(element, after) {
        var insertPos = this.find(after);
        if (insertPos > -1) {
            this.dataStore.splice(insertPos + 1, 0, element);
            ++this.listSize;
            return true;
        }
        return false;
    }

// Clear: Removing All Elements from a List
    function clear() {
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.pos = 0;
    }

// Contains: Determining if a Given Value Is in a List
    function contains(element) {
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i] == element) {
                return true;
            }
        }
        return false;
    }

// TRAVERSING A LIST

    function front() {
        this.pos = 0;
    }

    function end() {
        this.pos = this.listSize - 1;
    }

    function prev() {
        if (this.pos > 0) {
            --this.pos;
        }
    }

    function next() {
        if (this.pos < this.listSize - 1) {
            ++this.pos;
        }
    }

    function currPos() {
        return this.pos;
    }

    function moveTo(position) {
        this.pos = position;
    }

    function getElement() {
        return this.dataStore[this.pos];
    }
}

module.exports = 'List';
