const server = require('./server.js');

server.get("/", (req, res) => {
  res.send("It's alive!");
});  

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});