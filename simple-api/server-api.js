import { createServer } from "http";
const PORT = 3000;
const HOSTNAME = "127.0.0.1";

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "Jim Doe" },
];

const server = createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  if (req.url === "/api/users" && req.method === "GET") {
    res.write(JSON.stringify(users));
  } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
    const id = req.url.split("/")[3];
    const user = users.find((user) => user.id === parseInt(id));
    if (user) {
      res.write(JSON.stringify(user));
    } else {
      res.statusCode = 404;
      res.write(JSON.stringify({ message: "User not found" }));
    }
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "Message Route Not Found" }));
  }
  res.end();
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running on port ${PORT}`);
});

//Node.JS Crash Course - Traversy Media
//https://www.youtube.com/watch?v=32M1al-Y6Ag&t=595s
