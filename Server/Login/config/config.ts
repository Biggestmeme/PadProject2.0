import dotenv from 'dotenv';

dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT || 31338

const DATABASE_API = process.env.DATABASE_API || "http://localhost:31337/api";
const DATABASE_GETUSER_API = process.env.DATABASE_GETUSER_API || "/users/get/user"
const DATABASE_USER_TABLE = process.env.DATABASE_USER_TABLE || "Users"
//to be aded...



const DATABASE = {
    url : DATABASE_API,
    api_routes : {
            getUser : DATABASE_GETUSER_API
    },
    user_table : DATABASE_USER_TABLE
};


const config = {
    database : DATABASE,
    server : {
        port : SERVER_PORT
    }
}

export default config;
