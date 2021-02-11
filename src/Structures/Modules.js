require('../utils/artefactImport')
/**
 * @file Module Handler
 * @author LarchitecT, Sora ( X-DEVELOPMENT )
 * @license GPL-3.0
 */

const fs = ai('fs');
const path = ai('path');
const color = ai('chalk');
const { Collection } = ai('discord.js');

/* eslint-disable no-sync */
let Commands = new Collection();
let Aliases = new Collection();

let modules = fs.readdirSync('./commands/').filter(file => fs.statSync(path.join('./commands/', file)).isDirectory());

for (let module of modules) {
    process.stdout.write(`${color.cyan('[Xbot]:')} Loading ${module} module...\n`);

    let commandFiles = fs.readdirSync(path.resolve(`./commands/${module}`)).
    filter(file => !fs.statSync(path.resolve('./commands/', module, file)).isDirectory()).
    filter(file => file.endsWith('.js'));

    for (let file of commandFiles) {
        file = file.substr(0, file.length - 3);
        process.stdout.write(`${color.cyan('[Xbot]:')} Loading ${file} command...\n`);

        file = ai('./commands/', module, file);
        Commands.set(file.help.name.toLowerCase(), file);

        file.config.module = module;

        for (let alias of file.config.aliases) {
            Aliases.set(alias.toLowerCase(), file.help.name);
        }

        if (process.stdout.moveCursor && process.stdout.clearLine) {
            process.stdout.moveCursor(0, -1);
            process.stdout.clearLine();
        }
    }

    if (process.stdout.moveCursor && process.stdout.clearLine) {
        process.stdout.moveCursor(0, -1);
        process.stdout.clearLine();
    }
}

exports.commands = Commands;
exports.aliases = Aliases;