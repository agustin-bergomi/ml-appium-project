describe('Amazon App - Performance Tests', () => {

    beforeEach(async () => {
      // Reiniciar la app para asegurar un estado inicial limpio
      //await driver.resetApp();
      await browser.pause(2000);
    });
  
    it('should measure main screen load time', async () => {
      // Iniciar temporizador
      const startTime = Date.now();
  
      // Esperar a que el elemento clave de la pantalla principal esté visible
      const mainScreenElement = await $('id:com.amazon.mShop.android.shopping:id/home_screen_container');
      await mainScreenElement.waitForDisplayed({ timeout: 15000 });
  
      // Calcular tiempo transcurrido
      const endTime = Date.now();
      const loadTime = endTime - startTime;
  
      // Registrar tiempo de carga
      console.log(`Main screen load time: ${loadTime} ms`);
  
      // Verificar que el tiempo de carga es razonable (ejemplo: menor a 5 segundos)
      await expect(loadTime).toBeLessThan(5000);
    });
  
    it('should measure search results load time', async () => {
      // Acceder al campo de búsqueda
      const searchField = await $('id:com.amazon.mShop.android.shopping:id/rs_search_src_text');
      await searchField.waitForDisplayed({ timeout: 10000 });
      await searchField.setValue('laptop');
  
      // Iniciar temporizador antes de enviar la búsqueda
      const startTime = Date.now();
  
      // Enviar búsqueda
      await browser.pressKeyCode(66); // KEYCODE_ENTER
  
      // Esperar a que los resultados de búsqueda estén visibles
      const resultItem = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/iss_search_list_item")');
      await resultItem.waitForDisplayed({ timeout: 15000 });
  
      // Calcular tiempo transcurrido
      const endTime = Date.now();
      const loadTime = endTime - startTime;
  
      // Registrar tiempo de carga
      console.log(`Search results load time: ${loadTime} ms`);
  
      // Verificar que el tiempo de carga es razonable (ejemplo: menor a 5 segundos)
      await expect(loadTime).toBeLessThan(5000);
    });
  
    it('should measure product detail render time', async () => {
      // Realizar búsqueda para llegar a los resultados
      const searchField = await $('id:com.amazon.mShop.android.shopping:id/rs_search_src_text');
      await searchField.waitForDisplayed({ timeout: 10000 });
      await searchField.setValue('laptop');
      await browser.pressKeyCode(66); // KEYCODE_ENTER
      await browser.pause(5000);
  
      // Seleccionar el primer producto
      const firstProduct = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/iss_search_list_item").index(0)');
      await expect(firstProduct).toBeDisplayed();
  
      // Iniciar temporizador antes de abrir el producto
      const startTime = Date.now();
  
      // Hacer clic en el producto
      await firstProduct.click();
  
      // Esperar a que el detalle del producto esté visible
      const productDetails = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/product_details")');
      await productDetails.waitForDisplayed({ timeout: 15000 });
  
      // Calcular tiempo transcurrido
      const endTime = Date.now();
      const renderTime = endTime - startTime;
  
      // Registrar tiempo de renderizado
      console.log(`Product detail render time: ${renderTime} ms`);
  
      // Verificar que el tiempo de renderizado es razonable (ejemplo: menor a 4 segundos)
      await expect(renderTime).toBeLessThan(4000);
    });
  
  });