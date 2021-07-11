Feature('authorization');
Scenario('test authorization', ({ I, mainPage}) => {
    I.amOnPage('/');
    mainPage.login('test_user5670695', 'test');
    I.see('Welcome back Olga');
})
