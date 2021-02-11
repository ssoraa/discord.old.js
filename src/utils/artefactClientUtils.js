require('./artefactImport')
const lzutf8 = require('lzutf8');


/**
 *
 * @param string
 */
module.exports.compressString = async (string = String)=> {
    return new Promise((resolve, reject) => {
        lzutf8.compressAsync(string.toString(), { outputEncoding: "StorageBinaryString" }, (res = String, err= Error) => {
            if (err) return reject(err);
            return resolve(res);
        });
    })
};

/**
 *
 * @param string
 */
module.exports.decompressString = async (string = String)=> {
    return new Promise((resolve, reject) => {
        lzutf8.decompressAsync(string.toString(), { inputEncoding: "StorageBinaryString" }, (res = String, err= Error) => {
            if (err) return reject(err);
            return resolve(res);
        });
    })
};

/**
 *
 * @param guild
 * @param id
 */
module.exports.fetchMember = async (guild, id)=> {
    let user = await guild.client.users.cache.find(u => u.id === id);
    return guild.members.cache.find(u => u.id === user.id);
};