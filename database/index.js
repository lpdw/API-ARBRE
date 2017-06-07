// Load mongoose package
var mongoose = require('mongoose');
// Connect to MongoDB and create/use database called todoAppTest
mongoose.connect('mongodb://lpat:4heW78svFtR4@ds111622.mlab.com:11622/api-tree');
// Create a schema
var TodoSchema = new mongoose.Schema({
  name: String,
});
// Create a model based on the schema
var Todo = mongoose.model('Todo', TodoSchema);

// Create a todo in memory
var todo = new Todo({name: 'Master NodeJS', completed: false, note: 'Getting there...'});
// Save it to database
todo.save(function(err){
  if(err)
    console.log(err);
  else
    console.log(todo);
});