var markdown = require('markdown').markdown;

var fs = require('fs');
fs.readFile('./README.md', function (err, data) {
  if (err) {
    throw err;
  }

  const htmlContent = markdown.toHTML(data.toString());
  fs.writeFile('./public/task-desription.html', htmlContent, function (err) {
    if (err) return console.log(err);
    console.log('Done');
  });
});
