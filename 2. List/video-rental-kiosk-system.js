var List = require('list-ppt.js');

var names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");

names.front();
print(names.getElement());

names.next();
print(names.getElement());

names.next();
names.next();
names.prev();
print(names.getElement());

// for (names.front(); names.currPos() < names.length(); names.next()) {
//     print(names.getElement());
// }


print(names);


var movies = read(films.txt).split("\n");

function createArr(file) {
    var arr = read(file).split("\n");
    for (var i = 0; i < arr.length; ++i) {
        arr[i] = arr[i].trim();
    }
    return arr;
}
console.log("bean");

var movieList = new List();
for (var i = 0; i < movies.length; ++i) {
    movieList.append(movies[i]);
}

function displayList(list) {
    for (list.front(); list.currPos() < list.length(); list.next()) {
        print(list.getElement());
    }
}
