Feature('cart');
Scenario('Пользователь может добавить товар в корзину',
    async ({ I, mainPage, apparelCategoryPage, shoesPage, productPage, cartPage, categoryMenu}) => {
        I.amOnPage('/');
        mainPage.login('test_user5670695', 'test');
        categoryMenu.gotoApparel();
        apparelCategoryPage.gotoShoesCategory();
        shoesPage.gotoProduct();
        const productNameText = await productPage.getProductName();
        productPage.addToCart();
        I.see(productNameText);
        cartPage.removeItem();
});

Scenario('Пользователь может удалить товар из корзины',
    async ({ I, mainPage, apparelCategoryPage, shoesPage, productPage, cartPage, categoryMenu}) => {
        I.amOnPage('/');
        mainPage.login('test_user5670695', 'test');
        categoryMenu.gotoApparel();
        apparelCategoryPage.gotoShoesCategory();
        shoesPage.gotoProduct();
        productPage.addToCart();
        cartPage.removeItem();
        I.see('Your shopping cart is empty!');
    });

Scenario('Пользователь может оформить заказ',
    async ({ I,
               mainPage,
               apparelCategoryPage,
               shoesPage,
               productPage,
               cartPage,
               categoryMenu,
               checkoutConfirmationPage,
               checkoutSuccessPage
    }) => {
        I.amOnPage('/');
        mainPage.login('test_user5670695', 'test');
        categoryMenu.gotoApparel();
        apparelCategoryPage.gotoShoesCategory();
        shoesPage.gotoProduct();
        const productNameText = await productPage.getProductName();
        productPage.addToCart();
        cartPage.checkout();
        checkoutConfirmationPage.confirmOrder();
        I.see('YOUR ORDER HAS BEEN PROCESSED!');
        checkoutSuccessPage.gotoInvoicePage();
        I.see(productNameText);
    });

Scenario('Сделанный заказ сохраняется в историю заказов',
    async ({ I,
               mainPage,
               apparelCategoryPage,
               shoesPage,
               productPage,
               cartPage,
               categoryMenu,
               checkoutConfirmationPage,
               checkoutSuccessPage,
               invoicePage
           }) => {
        I.amOnPage('/');
        mainPage.login('test_user5670695', 'test');
        categoryMenu.gotoApparel();
        apparelCategoryPage.gotoShoesCategory();
        shoesPage.gotoProduct();
        productPage.addToCart();
        cartPage.checkout();
        checkoutConfirmationPage.confirmOrder();
        const orderID = await checkoutSuccessPage.getOrderID();
        checkoutSuccessPage.gotoInvoicePage();
        invoicePage.gotoOrderHistory();
        I.see(orderID);
    })
