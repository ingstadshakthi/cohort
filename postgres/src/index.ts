// write a function to create a users table in your database.
import { Client } from 'pg'

const client = new Client({
    connectionString: "postgresql://ingstad26:jnLY0PERHg9D@ep-green-mud-a11jafxq.ap-southeast-1.aws.neon.tech/first?sslmode=require"
})

async function createUsersTable() {
    await client.connect()
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    // console.log(result)
}

// createUsersTable();

// async function insertUserData() {
//     await client.connect()
//     const result = await client.query(`INSERT INTO users (username, email, password) VALUES ('shakthi', 'shakthi@gmail.com', 'password');`)
//     console.log(result);
// }

// insertUserData();

async function fetchData() {
    await client.connect()
    const result = await client.query(`select * from users`)
    console.log(result['rows']);
}

fetchData()

