const { I } = inject();

module.exports = {
    buttons: {
        shoesCategory: ('#maincontainer > div > div > div > div > ul > li:nth-child(1) > div > a'),
    },

    gotoShoesCategory() {
        I.waitForElement(this.buttons.shoesCategory, 15);
        I.click(this.buttons.shoesCategory);
    },
}
