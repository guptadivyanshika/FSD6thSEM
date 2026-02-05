const fs = require('fs');

fs.writeFile('data.txt', 'File created', (err) => {
  if (err) throw err;
  console.log('File created');

  fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);

    // overwrite
    fs.writeFile('data.txt', 'New content', (err) => {
      if (err) throw err;
      console.log('File overwritten');

      fs.appendFile('data.txt', '\nAppended text', (err) => {
        if (err) throw err;
        console.log('Data appended');

        fs.rename('data.txt', 'info.txt', (err) => {
          if (err) throw err;
          console.log('File renamed');

          fs.mkdir('folder', { recursive: true }, (err) => {
            if (err) throw err;

            // move
            fs.rename('info.txt', './folder/info.txt', (err) => {
              if (err) throw err;
              console.log('File moved');

              // delete
              fs.unlink('./folder/info.txt', (err) => {
                if (err) throw err;
                console.log('File deleted');
              });
            });
          });
        });
      });
    });
  });
});
