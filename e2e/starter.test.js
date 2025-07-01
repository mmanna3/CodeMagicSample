describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  // The new React Native architecture crashes when calling
  // `device.reloadReactNative()` unless the AppDelegate exposes a
  // `rootViewFactory`. We are temporarily skipping the reload between
  // tests to keep the sample tests working. If you add additional test
  // cases that rely on a fresh React Native instance, explicitly launch a
  // new app instance instead, e.g. `await device.launchApp({newInstance: true});`.

  it('should have welcome screen', async () => {
    await expect(element(by.text('Welcome to React Native'))).toBeVisible();
  });

  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
