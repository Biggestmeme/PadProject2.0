import config from '../config/config';
import request from 'request';

//this function retreives all the data about a specific user
const getUserData = async (req:any,res:any) => {
    let baseUrl = config.database.url+config.database.api_routes.getUser;
    let queryString = "?username="+req.query.username+"&password="+req.query.password;

    let options = {
        url: baseUrl+queryString,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    await request(options,(error:any,response:any,body:any) => {
        if(body) {
            res.send(JSON.parse(body));
        }
        else {
            res.send([]);
        }
       

    })
   
}


export default { getUserData };