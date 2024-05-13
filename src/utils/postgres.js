import { Pool } from "pg";

const pool = new Pool ({
    host: "localhost",
    port: "5432",
    user: "postgres",
    password: "admin",
    database: "prim_app"
})

export default pool;