import { AppPage } from '../app.methods';
import { browser } from 'protractor';

describe('Switch pages - Test:', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
    
  it('Should open App and check Title', async () => {
    await page.navigateTo();
    await browser.sleep(3000);
    expect(await page.getTitleText()).toEqual('Alledrogo');
  });
  
  it('Should go to Login page', async () => {
    await page.goToTab("Login");
    expect(await page.elementIsPresentInTable({element: "Sign In"})).toBe(true);
  });
  
  it('Should go to Cars page', async () => {
    await page.goToTab("Cars", "Volvo");
    expect(await page.elementIsPresentInTable({element: "XC90"})).toBe(true);
  });
  
  it('Should go to Motorcycles page', async () => {
    await page.goToTab("Motorcycles", "HarleyDavidson");
    expect(await page.elementIsPresentInTable({element: "Harley Davidson"})).toBe(true);
  });
});
