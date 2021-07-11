const { I } = inject();

module.exports = {
    fields: {
        loginName: ('#loginFrm #loginFrm_loginname'),
        password: ('#loginFrm #loginFrm_password'),

    },
    buttons: {
        login: ('#loginFrm > fieldset > button'),
        topMenuAccount: ('#customer_menu_top > li > a'),
    },

    login(loginName, password) {
        I.click(this.buttons.topMenuAccount);
        I.click(this.fields.loginName);
        I.fillField(this.fields.loginName, loginName);
        I.click(this.fields.password);
        I.fillField(this.fields.password, password);
        I.click(this.buttons.login);
    }
}
