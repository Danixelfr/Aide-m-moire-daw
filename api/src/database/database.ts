import Database from "better-sqlite3";

export const db = new Database('film.sqlite', { verbose: console.log });
console.log("base de donnée connecté avec succes");


export const initTable =(): void => {
    const query =`
        CREATE TABLE IF NOT EXISTS film (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titre TEXT NOT NULL,
            realisateur TEXT NOT NULL,
            annee TEXT NOT NULL
        )
    `;
        
    db.exec(query);
}
