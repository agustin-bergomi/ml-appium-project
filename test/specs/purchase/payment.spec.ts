describe('Amazon App - Purchase and Payment Functionality', () => {

    beforeEach(async () => {
      // Realizar búsqueda, añadir producto al carrito y navegar a checkout
      const searchField = await $('id:com.amazon.mShop.android.shopping:id/rs_search_src_text');
      await searchField.waitForDisplayed({ timeout: 10000 });
      await searchField.setValue('laptop');
      await browser.pressKeyCode(66); // KEYCODE_ENTER
      await browser.pause(5000);
  
      const firstProduct = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/iss_search_list_item").index(0)');
      await firstProduct.click();
      await browser.pause(3000);
  
      const addToCartButton = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/add_to_cart_button")');
      await addToCartButton.click();
      await browser.pause(3000);
  
      const cartIcon = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/cart_icon")');
      await cartIcon.click();
      await browser.pause(3000);
  
      const checkoutButton = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/cart_checkout_button")');
      await checkoutButton.click();
      await browser.pause(3000);
  
      const checkoutScreen = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/checkout_screen")');
      await checkoutScreen.waitForDisplayed({ timeout: 10000 });
    });
  
    it('should select payment method', async () => {
      // Localizar y hacer clic en la sección de selección de medio de pago
      const paymentMethodSection = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/payment_method_selector")');
      await expect(paymentMethodSection).toBeDisplayed();
      await paymentMethodSection.click();
      await browser.pause(3000);
  
      // Seleccionar un medio de pago (ejemplo: tarjeta de crédito)
      const creditCardOption = await $('android=new UiSelector().textContains("Credit or Debit Card")');
      await expect(creditCardOption).toBeDisplayed();
      await creditCardOption.click();
      await browser.pause(3000);
  
      // Verificar que el medio de pago seleccionado se muestra
      const selectedPayment = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/selected_payment_method")');
      const selectedPaymentText = await selectedPayment.getText();
      await expect(selectedPaymentText).toMatch(/Credit or Debit Card/);
    });
  
    it('should view purchase summary', async () => {
      // Localizar la sección de resumen de compra
      const purchaseSummary = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/purchase_summary")');
      await expect(purchaseSummary).toBeDisplayed();
  
      // Verificar que el resumen contiene los detalles esperados
      const orderItems = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/summary_items")');
      await expect(orderItems).toBeDisplayed();
  
      const shippingDetails = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/summary_shipping")');
      await expect(shippingDetails).toBeDisplayed();
  
      const totalPrice = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/summary_total")');
      await expect(totalPrice).toBeDisplayed();
      const totalPriceText = await totalPrice.getText();
      await expect(totalPriceText).toMatch(/\$[\d,.]+/); // Verifica formato de precio
    });
  
    it('should confirm purchase', async () => {
      // Seleccionar un medio de pago primero (requerido para confirmar compra)
      const paymentMethodSection = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/payment_method_selector")');
      await paymentMethodSection.click();
      await browser.pause(3000);
  
      const creditCardOption = await $('android=new UiSelector().textContains("Credit or Debit Card")');
      await creditCardOption.click();
      await browser.pause(3000);
  
      // Localizar y hacer clic en el botón de confirmación de compra
      const confirmPurchaseButton = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/confirm_purchase_button")');
      await expect(confirmPurchaseButton).toBeDisplayed();
      await confirmPurchaseButton.click();
      await browser.pause(5000);
  
      // Verificar que aparece la pantalla de confirmación de pedido
      const orderConfirmation = await $('android=new UiSelector().textContains("Order placed")');
      await expect(orderConfirmation).toBeDisplayed();
    });
  
  });