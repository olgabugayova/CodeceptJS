Feature('authorization');
Scenario.todo('test authorization', ({ I, mainPage}) => {
    I.amOnPage('/');
    mainPage.login('test_user5670695', 'test');
    I.see('Welcome back Olga');
});

Scenario('test registration', ({ I, mainPage}) => {
    I.amOnPage('/');
    mainPage.register ('3513', '000000');
    I.see('YOUR ACCOUNT HAS BEEN CREATED!');
});

Scenario.todo('Пользователь может запросить содержимое страницы', async ({I}) => {
    let response = await I.sendGetRequest('/api/airports');
    console.log(response);
});