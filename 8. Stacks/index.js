/** Class representing a Stack. */

class Stack {
	constructor() {
		this._storage = {};
		this._length = 0;
	}
	/*
	 * Adds a new value at the end of the
	 * stack
	 * @param {*} value - the value to push
	 */
	push(value) {
		// TODO: add typechecking and check arguments (edgecases)
		this._storage[this._length] = value;
		this._length++;
	}

	/*
	 * Removes the value at the end of the stack and returns it
	 * @return {*} the last and newest value in the stack
	 */
	pop() {}
	/*
	 * Returns the value at the end of the stack without removing it
	 * @return {*} the last and newest value in the stack
	 */
	peek() {}
}

const myStack = new Stack();

console.log(myStack);

myStack.push('zero');
myStack.push('one');

// {_storage: {0:'zero', 1: 'one'}}
// length: 2
// }

console.log(myStack);

// myStack.pop();
// // {_storage: {0:'zero'}}
// // length: 1
// // }
