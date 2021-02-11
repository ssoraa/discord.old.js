/**
 * @file stringHandler
 * @author LarchitecT ( X-DEVELOPMENT )
 * @license GPL-3.0
 */
const Locke = ai('locke');

const StringHandler = class StringHandler extends Locke {

    event(locale, event) {
        return super._getString('event', locale, event);
    }


    command(locale, command) {
        if (!this._strings.has(locale)) locale = this._defaultLocale;

        if (!this._strings.get(locale)['command'] || !this._strings.get(locale)['command'].hasOwnProperty(command)) {
            if (locale === this._defaultLocale) {
                return `No string found for the '${command}' key.`;
            }
            return this.command(this._defaultLocale, command);
        }

        let commandInfo = this._strings.get(locale)['command'][command];

        if (this._constantsRegExp && commandInfo.description) {
            commandInfo.description = commandInfo.description.replace(this._constantsRegExp, matched => this._constants[matched]);
        }
        return commandInfo;
    }
};

module.exports = StringHandler;
