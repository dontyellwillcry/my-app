import { Pool } from "pg";

const pool = new Pool ({
    host: "localhost",
    port: 5432,
    user: "dontyellwillcry",
    password: "howlongisforever",
    database: "prime_app"
})

export default pool;