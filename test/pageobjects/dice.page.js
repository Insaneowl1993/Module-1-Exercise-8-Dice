const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DicePage extends Page {
    /**
     * define selectors using getter methods
     */
    get rollButton () {
        return $('#dice-roll');
    }

    get resultDiv () {
        return $('#number');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.rollButton.setValue(username);
        await this.resultDiv.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new DicePage();
