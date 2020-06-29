const fs = require('fs');

fs.readFile('./text.txt', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }

  let regex = /Java/g;
  return console.log(`Java appeared total: ${data.match(regex).length} times`);
});
