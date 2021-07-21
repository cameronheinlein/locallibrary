var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

// init the data store
// ---------------------------
db.defaults({ posts: []}).write();

 // add a post  

    db.get('posts')
    .push({ id: 2, title: 'great', published: true})
    .write()  

    db.get('posts')
    .push({ id: 3, title: 'neat', published: true})
    .write()  

    db.get('posts')
    .push({ id: 4, title: 'superb', published: true})
    .write()  


// count posts
// ----------------------------
// YOUR CODE

// find all posts ids
// ----------------------------
// YOUR CODE

// all matches of published false
// ----------------------------
// YOUR CODE

// find post with published false
// ----------------------------
// YOUR CODE
