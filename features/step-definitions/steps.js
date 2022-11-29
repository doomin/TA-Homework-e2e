const { Given, When, Then } = require('@wdio/cucumber-framework');
const allureReporter = require('@wdio/allure-reporter').default

Given("I navigate to the home page", async () => {
    await browser.url(`https://www.newegg.com`);
});

Given("I enter the word {string} in the search bar", async (searchText) => {
    const searchBar = await $(`input[type="search"]`);
    await searchBar.setValue(searchText);
});

Given("I open {string} tab", async (tab) => {
    await $(`//span[contains(., "${tab}")]`).click();
    const url = await browser.getUrl();
    await expect(url).toContain("todays-deals");
});

When("I click the close banner button", async () => {
    try {
        await $(`.modal-content`).waitForDisplayed({ timeout: 5000});
        await $(`[aria-label="Close"]`).click();
    }
    catch {
        console.log("Promo window is not displayed.");
    }
});

When("I click the search element", async () => {
    const button = await $(`//button[contains(., "Search")]`);
    await button.click();
});

When("I click the logo", async () => {
    const button = await $(`.header2021-logo`);
    await button.click();
});

Then("I should no longer see the promo banner", async () => {
    const result = await $(`.modal-content`).isDisplayed();
    await expect(result).toBeFalsy();
});

Then("I see at least one item appears", async () => {
    await browser.waitUntil(
        async () => (await $$(`.item-cell`).length > 0,
        {
            timeout: 5000,
            timeoutMsg: 'expected results to be returned after 5s'
        }
    ));
});

Then("The main page is opened", async () => {
    const url = await browser.getUrl();
    await expect(url).toBe(`https://www.newegg.com/`);
});