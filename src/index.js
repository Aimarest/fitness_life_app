const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");
// create and config server
const server = express();
server.use(cors());
server.use(express.json());
// set template engine middlewares
server.set("view engine", "ejs");

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});
//Le decimos a Node que queremos usar esa base de datos:
const db = new Database("./src/data/database.db", { verbose: console.log });

//Endpoint para SignUp:

server.post("/signup", (req, res) => {
  //Body params:
  const nameSignUp = req.body.name;
  const emailSignUp = req.body.email;
  const passwordSignUp = req.body.password;
  //Preparamos la query:
  const userSignUp = db.prepare(
    `SELECT * FROM users WHERE name = ? AND email = ? AND password = ?`
  );
  //Ejecutamos la query:
  const foundUser = userSignUp.get(nameSignUp, emailSignUp, passwordSignUp);

  if (foundUser === undefined) {
    const insertUser = db.prepare(
      "INSERT INTO users (name,email,password) VALUES (?,?,?)"
    );
    const newUser = insertUser.run(nameSignUp, emailSignUp, passwordSignUp);
    res.json({
      success: true,
      userId: newUser.lastInsertRowid,
    });
  } else {
    res.json({
      success: false,
      errorMessage: "Usuario/a ya existente",
    });
  }
});
