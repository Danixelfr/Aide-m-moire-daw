"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initTable = exports.db = void 0;
const better_sqlite3_1 = __importDefault(require("better-sqlite3"));
exports.db = new better_sqlite3_1.default('film.sqlite', { verbose: console.log });
console.log("base de donnée connecté avec succes");
const initTable = () => {
    const query = `
        CREATE TABLE IF NOT EXISTS film (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titre TEXT NOT NULL,
            realisateur TEXT NOT NULL,
            annee TEXT NOT NULL,
             genre_id INTEGER REFERENCES genre(id)
        )
    `;
    exports.db.exec(query);
    exports.db.exec(`
        CREATE TABLE IF NOT EXISTS genre (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nom TEXT NOT NULL UNIQUE
        )


        
        
        
        `);
};
exports.initTable = initTable;
