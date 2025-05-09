import { browser, driver } from '@wdio/globals';

export async function swipeUp(startX = 500, startY = 1500, endY = 500, duration = 1000) {
    await browser.performActions([{
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
            { type: 'pointerMove', duration: 0, x: startX, y: startY },
            { type: 'pointerDown', button: 0 },
            { type: 'pause', duration: 300 },
            { type: 'pointerMove', duration, x: startX, y: endY },
            { type: 'pointerUp', button: 0 }
        ]
    }]);
    await driver.releaseActions();
}

export async function swipeLeft(startY = 1000, startX = 1000, endX = 100, duration = 1000) {
    await driver.performActions([{
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
            { type: 'pointerMove', duration: 0, x: startX, y: startY },
            { type: 'pointerDown', button: 0 },
            { type: 'pause', duration: 300 },
            { type: 'pointerMove', duration, x: endX, y: startY },
            { type: 'pointerUp', button: 0 }
        ]
    }]);
    await driver.releaseActions();
}

export async function swipeRight(startY = 1000, startX = 100, endX = 1000, duration = 1000) {
    await driver.performActions([{
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
            { type: 'pointerMove', duration: 0, x: startX, y: startY },
            { type: 'pointerDown', button: 0 },
            { type: 'pause', duration: 300 },
            { type: 'pointerMove', duration, x: endX, y: startY },
            { type: 'pointerUp', button: 0 }
        ]
    }]);
    await driver.releaseActions();
}

async function performSwipe(startX: number, startY: number, endX: number, endY: number, duration: number) {
    await driver.performActions([{
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
            { type: 'pointerMove', duration: 0, x: startX, y: startY },
            { type: 'pointerDown', button: 0 },
            { type: 'pause', duration: 200 },
            { type: 'pointerMove', duration, x: endX, y: endY },
            { type: 'pointerUp', button: 0 }
        ]
    }]);
    await driver.releaseActions();
}

// Swipe hacia abajo estándar
export async function swipeDown(startX = 500, startY = 500, endY = 1500, duration = 800) {
    await performSwipe(startX, startY, startX, endY, duration);
}

// Swipe hacia abajo largo (distancia mayor)
export async function swipeDownLong(startX = 500, startY = 300, endY = 1700, duration = 1000) {
    await performSwipe(startX, startY, startX, endY, duration);
}

// Swipe hacia abajo corto (distancia menor)
export async function swipeDownShort(startX = 500, startY = 800, endY = 1100, duration = 500) {
    await performSwipe(startX, startY, startX, endY, duration);
}

// Swipe hacia abajo rápido (menor duración)
export async function swipeDownFast(startX = 500, startY = 500, endY = 1500, duration = 400) {
    await performSwipe(startX, startY, startX, endY, duration);
}

// Swipe hacia abajo lento (mayor duración)
export async function swipeDownSlow(startX = 500, startY = 500, endY = 1500, duration = 1500) {
    await performSwipe(startX, startY, startX, endY, duration);
}

