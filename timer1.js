const time = process.argv.slice(2);

for (let item of time) {
  if (!isNaN(item)) { 
    if (item > 0 && time.length > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
        console.log(item);
    
      }, item * 1000);
    }
  }
}