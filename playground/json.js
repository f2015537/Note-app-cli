const fs = require('fs');

const originalNote = {
  title: 'Some title',
  body: 'Some body',
};

fs.writeFileSync('notes.json', JSON.stringify(originalNote));

const noteString = fs.readFileSync('notes.json');
const noteObj = JSON.parse(noteString);
console.log(typeof noteObj);
console.log(noteObj.title);
