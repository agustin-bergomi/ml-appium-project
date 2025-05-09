describe('Amazon App - Favorites Functionality', () => {

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
  
    it('should add product to favorites', async () => {
      // Localizar y hacer clic en el botón de añadir a favoritos
      const addToFavoritesButton = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/add_to_wishlist_button")');
      await expect(addToFavoritesButton).toBeDisplayed();
      await addToFavoritesButton.click();
      await browser.pause(3000);
  
      // Verificar confirmación de que el producto fue añadido a favoritos
      const favoritesConfirmation = await $('android=new UiSelector().textContains("Added to Wish List")');
      await expect(favoritesConfirmation).toBeDisplayed();
    });
  
    it('should view favorites list', async () => {
      // Añadir producto a favoritos
      const addToFavoritesButton = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/add_to_wishlist_button")');
      await addToFavoritesButton.click();
      await browser.pause(3000);
  
      // Navegar a la lista de favoritos
      const menuButton = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/menu_button")');
      await expect(menuButton).toBeDisplayed();
      await menuButton.click();
      await browser.pause(1000);
  
      const favoritesMenuOption = await $('android=new UiSelector().textContains("Your Wish List")');
      await expect(favoritesMenuOption).toBeDisplayed();
      await favoritesMenuOption.click();
      await browser.pause(3000);
  
      // Verificar que la lista de favoritos contiene el producto
      const favoriteItem = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/wishlist_item")');
      await expect(favoriteItem).toBeDisplayed();
    });
  
    it('should remove product from favorites', async () => {
      // Añadir producto a favoritos
      const addToFavoritesButton = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/add_to_wishlist_button")');
      await addToFavoritesButton.click();
      await browser.pause(3000);
  
      // Navegar a la lista de favoritos
      const menuButton = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/menu_button")');
      await menuButton.click();
      await browser.pause(1000);
  
      const favoritesMenuOption = await $('android=new UiSelector().textContains("Your Wish List")');
      await favoritesMenuOption.click();
      await browser.pause(3000);
  
      // Localizar y eliminar el producto de favoritos
      const removeFromFavoritesButton = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/wishlist_remove_item")');
      await expect(removeFromFavoritesButton).toBeDisplayed();
      await removeFromFavoritesButton.click();
      await browser.pause(3000);
  
      // Verificar que la lista de favoritos está vacía
      const emptyFavoritesMessage = await $('android=new UiSelector().textContains("Your Wish List is empty")');
      await expect(emptyFavoritesMessage).toBeDisplayed();
    });
  
  });