"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database/database");
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const fastify = (0, fastify_1.default)();
fastify.register(cors_1.default);
fastify.post("/film", (request, reply) => {
    const { titre, realisateur, annee } = request.body;
    const query = database_1.db.prepare("INSERT INTO `film`(titre,realisateur,annee) VALUES(?,?,?)");
    const result = query.run(titre, realisateur, annee);
    if (result) {
        reply.code(200);
    }
});
fastify.listen({ port: 8080 });
