var mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true }); 

var Schema = mongoose.Schema;

var PersonSchema = new Schema({
  name: String,
  age: Number,
  favoriteFood: [String],
  dob: { type: Date, default: Date.now}
  
})

var Person = mongoose.model('Person', PersonSchema);

var mario = new Person({name: "Mariano ", age: 43, favoriteFood: ['pizza', 'blackberry cobbler']});

console.log("created a person Mario " + mario);
