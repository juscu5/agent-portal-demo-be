const axios = require('axios');
require('dotenv').config({ path: '../.env' });
const UnauthorizedError = require('../../domain/common/errors/UnauthorizedError');
const utf8 = require('utf8');

const ccmsAuthentication = async (credentials) => {
    const {username, password} = credentials;
    const encodedCred = 'Basic ' + Buffer.from(utf8.encode(`${username}:${password}`)).toString('base64');
    console.log(encodedCred);
    await axios.get(process.env.CCMS_AUTH_URL, {
        headers : {
            'Authorization' : encodedCred
        }
    }).then((result) => {
        return true;
    }).catch(e => {
        throw new UnauthorizedError;
    })
}

module.exports ={
    ccmsAuthentication,
}