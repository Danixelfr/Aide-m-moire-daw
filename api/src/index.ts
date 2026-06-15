import { db,initTable } from "./database/database";
import Fastify from "fastify";
import cors from "@fastify/cors";


initTable();

const fastify = Fastify();
fastify.register(cors);


type film = {
    titre : string,
    realisateur : string,
    annee : string
    genre_id : number
}


fastify.post("/film",(request,reply) =>{
    const {titre , realisateur, annee,genre_id} = request.body as film;
    const query = db.prepare("INSERT INTO `film`(titre,realisateur,annee,genre_id) VALUES(?,?,?,?)")
    const result = query.run(titre,realisateur,annee,genre_id);
    if (result){
        reply.code(200);
        
    }
})


fastify.get("/film",(request,reply) =>{
const query = db.prepare("SELECT film.*, genre.nom AS genre FROM film LEFT JOIN genre ON film.genre_id = genre.id")
    const result = query.all();
    if (result){
        reply.send(result);
    }  
})




type Searchparam = {
    text : string
}


fastify.get("/film/:text",(request,reply)=>{
    const {text} = request.params as Searchparam;
    const search = `%${text}%`;
    const query = db.prepare("SELECT film.*, genre.nom AS genre FROM film LEFT JOIN genre ON film.genre_id = genre.id")
    const result = query.all(search,search,search);
    if(result){
        reply.send(result);

    }
    




})
fastify.get("/genre",(request,reply)=>{
    const query = db.prepare("SELECT * FROM `genre`");
    const result = query.all();
    reply.send(result);
})


















fastify.listen({port : 8080});
