// add options here
const pgp = require('pg-promise')({});

// database instance
const db = pgp(process.env.DATABASE_URL); 

module.exports = db;