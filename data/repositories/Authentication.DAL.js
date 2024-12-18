const db = require('../../db/index');

const createAuthenticationToken = async (userDetails) => {
   await db('token_auth').insert(userDetails);
}

const updateAuthenticationToken = async (userDetails) => {
    await db('token_auth').where({
        ccms_id : userDetails.ccms_id,
        nt_login : userDetails.nt_login,
        access_token : userDetails.access_token,
        refresh_token : userDetails.refresh_token
    }).update(userDetails);
}

const validateRefreshToken = async (ccmsId, ntLogin, refreshToken) => {
    const result = await db('token_auth').where({
        ccms_id : ccmsId,
        nt_login : ntLogin,
        refresh_token : refreshToken
    });
    return result;
}

module.exports = {
    createAuthenticationToken,
    updateAuthenticationToken,
    validateRefreshToken,
}