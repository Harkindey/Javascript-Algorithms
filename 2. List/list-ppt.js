//oooo                                   ooooooooooooooooo
//oooo                                   ooooooooooooooooo
//oooo                                         ooooo
//oooo              oooo    ooooooooo          ooooo
//oooo              oooo    |||                ooooo
//oooo              oooo    \\\                ooooo
//oooo              oooo      ooooo            ooooo
//ooooooooooooooooo oooo          oooo         ooooo
//ooooooooooooooooo oooo    oooooooo           ooooo



function List() {
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


function append(element) {
    this.dataStore[this.listSize++] = element;
}

function find(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}

function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}

function length() {
    return this.listSize;
}

function toString() {
    return this.dataStore;
}

function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}

function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}

function contains(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}

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

var names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");

// names.front();
// print(names.getElement());
//
// names.next();
// print(names.getElement());
//
// names.next();
// names.next();
// names.prev();
// print(names.getElement());

// for (names.front(); names.currPos() < names.length(); names.next()) {
//     print(names.getElement());
// }


// var movies = read('films.txt').split("\n");
//
// function createArr(file) {
//     var arr = read(file).split("\n");
//     for (var i = 0; i < arr.length; ++i) {
//         arr[i] = arr[i].trim();
//     }
//     return arr;
// }
//
// var movieList = new List();
// for (var i = 0; i < movies.length; ++i) {
//     movieList.append(movies[i]);
// }

// function displayList(list) {
//     for (list.front(); list.currPos() < list.length(); list.next()) {
//         print(list.getElement());
//     }
// }

function displayList(list) {
    for (list.front(); list.currPos() < list.length(); list.next()) {
        if (list.getElement() instanceof Customer) {
            print(list.getElement()["name"] + ", " +
                list.getElement()["movie"]);
        } else {
            print(list.getElement());
        }
    }
}

var Customers = new List();

function Customer(name, movie) {
  this.name = name;
  this.movie = movie;
}

function checkOut(name, movie, filmList, customerList) {
  if (movieList.contains(movie)) {
    var c = new Customer(name, movie);
    customerList.append(name, movie);
    filmList.remove(movie);
  }
  else {
    print(movie + " is not available.");
  }
}

var movies = createArr("films.txt");
var movieList = new List();
var customers = new List();
for (var i = 0; i <movies.length; ++i) {
  movieList.append(movies[i]);
}
print("Available movies; \n");
displayList(movieList);
putstr("\nEnter your name: ");
var name = readline();
putstr("What movie would you like?");
var movie = readline();
checkOut(name, movie, movieList, customers);
print("\nCustomer Rentals: \n");
displayList(customers);
// checkOut("Jane Doe", "The Godfather", movieList, customers);
// print("\nCustomer Rentals: \n");
// displayList(customers);
print("\nMovies Now Available\n");
displayList(movieList);
