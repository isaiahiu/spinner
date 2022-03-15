const str = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   "];

let timer = 0;
str.forEach((x) => {
  setTimeout(() => process.stdout.write(x), timer);
  timer += 100;
});
