module.exports = {

    development: {
        client: 'pg',
        connection: {
            database: process.env.DATABASE_NAME,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            host: process.env.DATABASE_HOST,
            port: process.env.DATABASE_PORT,
            // ssl: { rejectUnauthorized: false }

        },
        searchPath: ['knex', 'public'],
        //Permet d'éviter l'ouverture de sessions à l'infini à la BDD en créant un pool de connexion
        pool: {min: 0, max: 100},
        migrations: {
            tableName: 'migrations'
        }
    },
    production: {
        client: 'pg',
        connection: {
            database: process.env.DATABASE_NAME,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            host: process.env.DATABASE_HOST,
            port: process.env.DATABASE_PORT,

        },
        searchPath: ['knex', 'public'],
        //Permet d'éviter l'ouverture de sessions à l'infini à la BDD en créant un pool de connexion
        pool: {min: 0, max: 1000},
        migrations: {
            tableName: 'migrations'
        }
    },
};
