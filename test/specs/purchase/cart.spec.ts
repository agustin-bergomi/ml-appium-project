describe('Amazon App - Cart Functionality', () => {

    beforeEach(async () => {
      // Realizar búsqueda y abrir un producto para asegurar estado inicial
      const searchField = await $('id:com.amazon.mShop.android.shopping:id/rs_search_src_text');
      await searchField.waitForDisplayed({ timeout: 10000 });
      await searchField.setValue('laptop');
      await browser.pressKeyCode(66); // KEYCODE_ENTER
      await browser.pause(5000);
      const firstProduct = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/iss_search_list_item").index(0)');
      await firstProduct.click();
      await browser.pause(3000);
    });
  
    it('should add product to cart', async () => {
      // Localizar y hacer clic en el botón "Add to Cart"
      const addToCartButton = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/add_to_cart_button")');
      await expect(addToCartButton).toBeDisplayed();
      await addToCartButton.click();
      await browser.pause(3000);
  
      // Verificar confirmación de que el producto fue añadido
      const cartConfirmation = await $('android=new UiSelector().textContains("Added to Cart")');
      await expect(cartConfirmation).toBeDisplayed();
    });
  
    it('should view products in cart', async () => {
      // Añadir producto al carrito
      const addToCartButton = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/add_to_cart_button")');
      await addToCartButton.click();
      await browser.pause(3000);
  
      // Ir al carrito
      const cartIcon = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/cart_icon")');
      await expect(cartIcon).toBeDisplayed();
      await cartIcon.click();
      await browser.pause(3000);
  
      // Verificar que los productos se muestran en el carrito
      const cartItem = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/cart_item")');
      await expect(cartItem).toBeDisplayed();
    });
  
    it('should remove a product from cart', async () => {
      // Añadir producto al carrito
      const addToCartButton = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/add_to_cart_button")');
      await addToCartButton.click();
      await browser.pause(3000);
  
      // Ir al carrito
      const cartIcon = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/cart_icon")');
      await cartIcon.click();
      await browser.pause(3000);
  
      // Localizar y eliminar el producto
      const removeButton = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/cart_remove_item")');
      await expect(removeButton).toBeDisplayed();
      await removeButton.click();
      await browser.pause(3000);
  
      // Verificar que el carrito está vacío
      const emptyCartMessage = await $('android=new UiSelector().textContains("Your Amazon Cart is empty")');
      await expect(emptyCartMessage).toBeDisplayed();
    });
  
    it('should modify quantity from cart', async () => {
      // Añadir producto al carrito
      const addToCartButton = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/add_to_cart_button")');
      await addToCartButton.click();
      await browser.pause(3000);
  
      // Ir al carrito
      const cartIcon = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/cart_icon")');
      await cartIcon.click();
      await browser.pause(3000);
  
      // Modificar cantidad
      const quantitySelector = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/cart_quantity_selector")');
      await expect(quantitySelector).toBeDisplayed();
      await quantitySelector.click();
      await browser.pause(1000);
  
      // Seleccionar cantidad 2
      const quantityOption = await $('android=new UiSelector().text("2")');
      await quantityOption.click();
      await browser.pause(3000);
  
      // Verificar que la cantidad se actualizó
      const updatedQuantity = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/cart_quantity_text")');
      const quantityText = await updatedQuantity.getText();
      await expect(quantityText).toEqual('2');
    });
  
    it('should empty cart', async () => {
      // Añadir producto al carrito
      const addToCartButton = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/add_to_cart_button")');
      await addToCartButton.click();
      await browser.pause(3000);
  
      // Ir al carrito
      const cartIcon = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/cart_icon")');
      await cartIcon.click();
      await browser.pause(3000);
  
      // Eliminar todos los productos
      const removeButton = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/cart_remove_item")');
      await expect(removeButton).toBeDisplayed();
      await removeButton.click();
      await browser.pause(3000);
  
      // Verificar que el carrito está vacío
      const emptyCartMessage = await $('android=new UiSelector().textContains("Your Amazon Cart is empty")');
      await expect(emptyCartMessage).toBeDisplayed();
    });
  
    it('should continue to checkout', async () => {
      // Añadir producto al carrito
      const addToCartButton = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/add_to_cart_button")');
      await addToCartButton.click();
      await browser.pause(3000);
  
      // Ir al carrito
      const cartIcon = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/cart_icon")');
      await cartIcon.click();
      await browser.pause(3000);
  
      // Hacer clic en "Proceed to Checkout"
      const checkoutButton = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/cart_checkout_button")');
      await expect(checkoutButton).toBeDisplayed();
      await checkoutButton.click();
      await browser.pause(3000);
  
      // Verificar que la pantalla de checkout se muestra
      const checkoutScreen = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/checkout_screen")');
      await expect(checkoutScreen).toBeDisplayed();
    });
  
  });