describe('Amazon App - Search Functionality', () => {

    beforeEach(async () => {
      const searchField = await $('id:com.amazon.mShop.android.shopping:id/rs_search_src_text');
      await searchField.waitForDisplayed({ timeout: 10000 });
    });
  
    it('should find results for an existing product', async () => {
      const searchField = await $('id:com.amazon.mShop.android.shopping:id/rs_search_src_text');
      await searchField.setValue('laptop');
  
      await browser.pressKeyCode(66); // KEYCODE_ENTER
      await browser.pause(5000);
  
      const resultItem = await $('android=new UiSelector().textContains("Laptop")');
      await expect(resultItem).toBeDisplayed();
    });
  
    it('should show no results message for a nonexistent product', async () => {
      const searchField = await $('id:com.amazon.mShop.android.shopping:id/rs_search_src_text');
      await searchField.setValue('asdasdqweqwe');
  
      await browser.pressKeyCode(66); // KEYCODE_ENTER
      await browser.pause(5000);
  
      const noResult = await $('android=new UiSelector().textContains("No results")');
      await expect(noResult).toBeDisplayed();
    });
  
    it('should show autocomplete suggestions while typing', async () => {
      const searchField = await $('id:com.amazon.mShop.android.shopping:id/rs_search_src_text');
      await searchField.setValue('iph');
  
      const suggestionList = await $('android=new UiSelector().resourceId("com.amazon.mShop.android.shopping:id/list_product_suggestions")');
      await expect(suggestionList).toBeDisplayed();
    });
  
    it('should display suggestions list and allow tap', async () => {
      const searchField = await $('id:com.amazon.mShop.android.shopping:id/rs_search_src_text');
      await searchField.setValue('head');
  
      const firstSuggestion = await $('android=new UiSelector().className("android.widget.TextView").index(0)');
      await expect(firstSuggestion).toBeDisplayed();
  
      await firstSuggestion.click();
      await browser.pause(5000);
  
      const resultTitle = await $('android=new UiSelector().textContains("Head")');
      await expect(resultTitle).toBeDisplayed();
    });
  
  });
  