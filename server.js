/*import { createServer } from "node:http";

const server = createServer((request, response) => {
  response.write("oieww");
  return response.end();
});

server.listen(3333);*/

import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify();
const database = new DatabaseMemory();

//Route Parameter :id
//POST http://localhost:3333/videos
//PUT http://localhost:3333/videos/3

server.get("/", (request, reply) => {
  console.log("Home");
  reply.header("Content-Type", "text/html");
  return "<h1>Teste</h1>";
});

server.get("/videos", (request, reply) => {
  const search = request.query.search;
  console.log(search);
  const videos = database.list(search);
  return videos;
});

server.post("/videos", (request, reply) => {
  const { title, description, duration } = request.body;
  database.create({
    title,
    description,
    duration,
  });

  return reply.status(201).send();
});

server.put("/videos/:id", (request, reply) => {
  const videoId = request.params.id;
  const { title, description, duration } = request.body;

  database.update(videoId, {
    title,
    description,
    duration,
  });

  return reply.status(204).send();
});

server.delete("/videos/:id", () => {
  return "Equipe Rocket!!";
});
server.listen({ port: 3333 });
