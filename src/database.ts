import { createPool  } from "mysql2/promise";

export async function connect(){
   const connection = await createPool({
        port:8889,
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'node_mysql_ts'
    })
    return connection
}