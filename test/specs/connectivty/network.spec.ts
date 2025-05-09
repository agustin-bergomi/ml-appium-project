import { disableInternet, enableInternet, setNetworkSpeed } from 'utils/networkUtils';

describe('Network Tests - MercadoLibre', () => {

  beforeEach(async () => {
    await enableInternet(); // Enciende el WiFi normal antes de cada test
  });

  it('should show offline message when no internet', async () => {
    await disableInternet();
    await driver.pause(3000);

    const searchField = await $('id:com.amazon.mShop.android.shopping:id/rs_search_src_text');
    await expect(searchField).toBeDisplayed();
    await searchField.tap();
    await browser.pause(1000); // espera 1 segundo
    await searchField.setValue('mouse');
    await browser.pause(1000); // espera 1 segundo
    await driver.pressKeyCode(66);
    await browser.pause(5000); // espera 5 segundos      
    const offlineMessage = await $('id:com.amazon.mShop.android.shopping:id/primary_action_text');
    await expect(offlineMessage).toBeDisplayed();
    const messageText = await offlineMessage.getText();
    expect(messageText).toBe('Please check your network connection.');
    await enableInternet();
  });

  it('should work under gsm', async () => {
    await setNetworkSpeed('gsm');
    const searchField = await $('id:com.amazon.mShop.android.shopping:id/rs_search_src_text');
    await expect(searchField).toBeDisplayed();
    await searchField.tap();
    await browser.pause(1000);
    await searchField.setValue('mouse');
    await browser.pause(1000);
    await driver.pressKeyCode(66);
    await browser.pause(5000);
    const offlineMessage = await $('id:com.amazon.mShop.android.shopping:id/primary_action_text');
    await expect(offlineMessage).toBeDisplayed();
    const messageText = await offlineMessage.getText();
    expect(messageText).toBe('Please check your network connection.');
    await enableInternet();
  });

  it('should work under edge', async () => {
    await setNetworkSpeed('edge');
    const searchField = await $('id:com.amazon.mShop.android.shopping:id/rs_search_src_text');
    await expect(searchField).toBeDisplayed();
    await searchField.tap();
    await browser.pause(1000);
    await searchField.setValue('mouse');
    await browser.pause(1000);
    await driver.pressKeyCode(66);
    await browser.pause(5000);
    const offlineMessage = await $('id:com.amazon.mShop.android.shopping:id/primary_action_text');
    await expect(offlineMessage).toBeDisplayed();
    const messageText = await offlineMessage.getText();
    expect(messageText).toBe('Please check your network connection.');
    await enableInternet();
  });

  it('should work under umts', async () => {
    await setNetworkSpeed('umts');
    const searchField = await $('id:com.amazon.mShop.android.shopping:id/rs_search_src_text');
    await expect(searchField).toBeDisplayed();
    await searchField.tap();
    await browser.pause(1000);
    await searchField.setValue('mouse');
    await browser.pause(1000);
    await driver.pressKeyCode(66);
    await browser.pause(5000);
    const offlineMessage = await $('id:com.amazon.mShop.android.shopping:id/primary_action_text');
    await expect(offlineMessage).toBeDisplayed();
    const messageText = await offlineMessage.getText();
    expect(messageText).toBe('Please check your network connection.');
    await enableInternet();
  });

  it('should work under lte', async () => {
    await setNetworkSpeed('lte');
    const searchField = await $('id:com.amazon.mShop.android.shopping:id/rs_search_src_text');
    await expect(searchField).toBeDisplayed();
    await searchField.tap();
    await browser.pause(1000);
    await searchField.setValue('mouse');
    await browser.pause(1000);
    await driver.pressKeyCode(66);
    await browser.pause(5000);
    const offlineMessage = await $('id:com.amazon.mShop.android.shopping:id/primary_action_text');
    await expect(offlineMessage).toBeDisplayed();
    const messageText = await offlineMessage.getText();
    expect(messageText).toBe('Please check your network connection.');
    await enableInternet();
  });

  it('should work under full', async () => {
    await setNetworkSpeed('full');
    const searchField = await $('id:com.amazon.mShop.android.shopping:id/rs_search_src_text');
    await expect(searchField).toBeDisplayed();
    await searchField.tap();
    await browser.pause(1000);
    await searchField.setValue('mouse');
    await browser.pause(1000);
    await driver.pressKeyCode(66);
    await browser.pause(5000);
    const offlineMessage = await $('id:com.amazon.mShop.android.shopping:id/primary_action_text');
    await expect(offlineMessage).toBeDisplayed();
    const messageText = await offlineMessage.getText();
    expect(messageText).toBe('Please check your network connection.');
    await enableInternet();
  });

});
