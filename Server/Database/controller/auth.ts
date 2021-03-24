import config from '../config/config';

const auth = (req:any,res:any,next:any) => {
    let auth_header = req.header('Authorization')
    console.log(auth_header);
    if( auth_header === config.server_options.auth_key) {
      next();
    }
    else {
       res.status(401).send("Unauthorized");
    }
}



export default { auth }

