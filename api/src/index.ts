import { db,initTable } from "./database/database";
import Fastify from "fastify";
import cors from "@fastify/cors";




const fastify = Fastify();
fastify.register(cors);


type film = {
    titre : string,
    realisateur : string,
    annee : string
}

fastify.post("/film",(request,reply) =>{
    const {titre , realisateur, annee} = request.body as film;
    const query = db.prepare("INSERT INTO `film`(titre,realisateur,annee) VALUES(?,?,?)")
    const result = query.run(titre,realisateur,annee);
    if (result){
        reply.code(200);
        
    }
})










fastify.listen({port : 8080});
