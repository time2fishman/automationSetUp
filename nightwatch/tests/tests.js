const data = require('../test_assets/data')
const functions = require('../test_assets/functions')
const selectors = require('../test_assets/selectors')

module.exports = {

    beforeEach: browser => {
        browser.url('http://amazon.com')
    },

    after: browser => {
        browser.end()
    },
    'test': browser => {
        browser
            .waitForElementVisible('body', 5000)
            .pause(4000)
    }

}