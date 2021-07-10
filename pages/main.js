// const {PersonBuilder} = require('../builder/newUser');
const { I } = inject();

module.exports = {
    // const { PersonBuilder } = require('../builder/newUser'),
    fields: {
        accountAddress: ('#AccountFrm_address_1'),
        accountCity: ('#AccountFrm_city'),
        accountConfirm: ('#AccountFrm_confirm'),
        accountEmail: ('#AccountFrm_email'),
        accountFirstName: ('#AccountFrm_firstname'),
        accountLastName: ('#AccountFrm_lastname'),
        accountLoginName: ('#AccountFrm_loginname'),
        accountPassword: ('#AccountFrm_password'),
        accountPostcode: ('#AccountFrm_postcode'),
        accountZone: ('#AccountFrm_zone_id'),
        loginName: ('#loginFrm #loginFrm_loginname'),
        password: ('#loginFrm #loginFrm_password'),

    },
    buttons: {
        accountAgree:  ('#AccountFrm_agree'),
        accountRegister: ('#AccountFrm > div.form-group > div > div > button'),
        login: ('#loginFrm > fieldset > button'),
        register: ('#accountFrm > fieldset > button'),
        topMenuAccount: ('#customer_menu_top > li > a'),
    },

    login(loginName, password) {
        I.click(this.buttons.topMenuAccount);
        I.click(this.fields.loginName);
        I.fillField(this.fields.loginName, loginName);
        I.click(this.fields.password);
        I.fillField(this.fields.password, password);
        I.click(this.buttons.login);
    },

    register(accountZone, accountPostcode) {

        I.click(this.buttons.topMenuAccount);
        I.click(this.buttons.register);
        I.click(this.fields.accountFirstName);
        const {PersonBuilder} = require('../builder/newUser');
        // const newAccount = new PersonBuilder()
        //     .addFirstName()
        //     .addLastName()
        //     .addEmail()
        //     .addAddress()
        //     .addCity()
        //     .addUserName()
        //     .addPassword()
        //     .generate();


        I.fillField(this.fields.accountFirstName, new PersonBuilder().addFirstName());
        // const firstName = newAccount.firstName;
        I.click(this.fields.accountLastName);
        I.fillField(tjis.accountLastName, newAccount.lastName);
        I.click(this.accountEmail);
        I.fillField(this.accountEmail, newAccount.email);
        I.click(this.accountAddress);
        I.fillField(this.fields.accountAddress, newAccount.address);
        I.click(this.fields.accountCity);
        I.fillField(this.fields.accountCity, newAccount.city);
        I.click(this.fields.accountZone);
        I.selectOption(this.fields.accountZone, accountZone);
        I.click(this.fields.accountPostcode);
        I.fillField(this.fields.accountPostcode, accountPostcode);
        I.click(this.fields.accountLoginName);
        I.fillFieldl(this.fields.accountLoginName, newAccount.userName);
        I.click(this.fields.accountPassword);
        I.fillField(this.fields.accountPassword, password);
        const password = newAccount.password;
        I.click(this.fields.accountConfirm);
        I.fillField(tjis.fields.accountConfirm, password);
        I.click(this.buttons.accountAgree);
        I.click(this.buttons.accountRegister);
    },

  // insert your locators and methods here
}
