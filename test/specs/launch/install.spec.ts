describe('Amazon - Instalación desde Play Store (simulada)', () => {
    it('debería instalar la app si no está instalada', async () => {
      const isInstalled = await driver.isAppInstalled('com.amazon.mShop.android.shopping');
      if (isInstalled) {
        await driver.removeApp('com.amazon.mShop.android.shopping');
      }
  
      // Simula instalación desde Google Play con .apk local
      await driver.installApp('/path/to/amazon-shopping.apk');
      const checkInstall = await driver.isAppInstalled('com.amazon.mShop.android.shopping');
      expect(checkInstall).toBe(true);
    });
  });