const knex = require("knex")
// const credentials = process.env.NODE_ENV !== "production" ? {} :  require("platformsh-config").config().credentials("postgresql");

const knexConfig = require('../knexfile')
const env = process.env.NODE_ENV || "development"

const connectionConfig = knexConfig[env];

const connection = knex(connectionConfig)

module.exports = connection
