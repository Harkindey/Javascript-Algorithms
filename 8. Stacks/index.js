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
	pop() {
		//what if this._storage is empty
		if (this._length) {
			let value = this._storage[this._length - 1];
			delete this._storage[this._length - 1]; // or this._storage[this._length - 1] = undefined
			this._length--;
			return value;
		}
	}
	/*
	 * Returns the value at the end of the stack without removing it
	 * @return {*} the last and newest value in the stack
	 */
	peek() {
		return this._storage[this._length - 1];
	}
}

const myStack = new Stack();
myStack.push('zero');
myStack.push('one');

// {_storage: {0:'zero', 1: 'one'}}
// length: 2
// }
// // {_storage: {0:'zero'}}
// // length: 1
// // }
console.log(myStack.pop());
console.log(myStack);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack);
console.log(myStack.pop());
console.log(myStack);
