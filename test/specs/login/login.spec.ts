describe('Amazon App Login Tests', () => {
  beforeEach(async () => {
    // Esperar a que la pantalla de inicio esté visible
    const signInButton = await $('id:com.amazon.mShop.android:id/sign_in_button');
    await signInButton.waitForDisplayed({ timeout: 10000 });
    await signInButton.click();
  });

  it('should login with valid credentials', async () => {
    const emailField = await $('id:ap_email');
    await emailField.setValue('usuario_valido@example.com');

    const continueButton = await $('id:continue');
    await continueButton.click();

    const passwordField = await $('id:ap_password');
    await passwordField.setValue('contraseña_valida');

    const loginButton = await $('id:signInSubmit');
    await loginButton.click();

    const homeScreen = await $('id:com.amazon.mShop.android:id/home_screen');
    await expect(homeScreen).toBeDisplayed();
  });

  it('should show error for invalid email', async () => {
    const emailField = await $('id:ap_email');
    await emailField.setValue('correo_invalido');

    const continueButton = await $('id:continue');
    await continueButton.click();

    const errorMessage = await $('id:auth-error-message-box');
    await expect(errorMessage).toBeDisplayed();
    await expect(errorMessage).toHaveTextContaining('No pudimos encontrar una cuenta con esa dirección de correo electrónico');
  });

  it('should show error for invalid password', async () => {
    const emailField = await $('id:ap_email');
    await emailField.setValue('usuario_valido@example.com');

    const continueButton = await $('id:continue');
    await continueButton.click();

    const passwordField = await $('id:ap_password');
    await passwordField.setValue('contraseña_invalida');

    const loginButton = await $('id:signInSubmit');
    await loginButton.click();

    const errorMessage = await $('id:auth-error-message-box');
    await expect(errorMessage).toBeDisplayed();
    await expect(errorMessage).toHaveTextContaining('Tu contraseña es incorrecta');
  });

  it('should show error when fields are empty', async () => {
    const continueButton = await $('id:continue');
    await continueButton.click();

    const errorMessage = await $('id:auth-error-message-box');
    await expect(errorMessage).toBeDisplayed();
    await expect(errorMessage).toHaveTextContaining('Introduce tu dirección de correo electrónico o número de teléfono móvil');
  });
});
