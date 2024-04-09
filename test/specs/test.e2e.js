const { expect } = require('@wdio/globals')
const DicePage = require('../pageobjects/dice.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await DicePage.open()
        await DicePage.rollButton.click()

        let resultA = await DicePage.resultDiv.getText()
        await expect (resultA).toMatch(/\d/)

         await DicePage.rollButton.click()
        await expect (DicePage.resultDiv).not.toHaveText(resultA)
    })
})

