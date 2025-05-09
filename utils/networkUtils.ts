import { browser, driver } from '@wdio/globals';

export async function disableInternet() {
    // Solo funciona en emulador o dispositivos rooteados
    await driver.toggleAirplaneMode(); // Alterna el modo avión
  }
  
  export async function enableInternet() {
    await driver.toggleAirplaneMode(); // Vuelve a activar la conexión
  }
  
  export async function setNetworkSpeed(speed: 'gsm' | 'edge' | 'umts' | 'lte' | 'full') {
    // Solo en emuladores Android
    await driver.execute('mobile: networkSpeed', {
      speed: speed
    });
  }
  