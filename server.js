/*import {createServer} from 'node:http'

const server = createServer((request, response)=>{
    response.write('oieww') 
    return response.end()
})

server.listen(3333)*/

import { fastify } from "fastify";
import {DatabaseMemory} from "./database-memory.js"

const server = fastify()
const database = new DatabaseMemory()

//Route Parameter :id
//POST http://localhost:3333/videos
//PUT http://localhost:3333/videos/3

server.post('/videos', (request, reply)=>{

    const {title, description, duration} = request.body;
    console.log(body)
    database.create({
        title,
        description,
        duration,
    })
    console.log(database.list())

    return reply.status(201).send()
})

server.get('/videos', (request, reply)=>{
    const videos = database.list()
    return videos

})

server.put('/videos/:id', ()=>{
    return 'Equipe Rocket!'
})

server.delete('/videos/:id', ()=>{
    return 'Equipe Rocket!'
})
server.listen({port:3333})
