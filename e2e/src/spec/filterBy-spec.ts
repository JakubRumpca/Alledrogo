import { AppPage } from '../app.methods';
import { browser } from 'protractor';

describe('Switch pages - Test:', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
    
  it('Should open App and check Title', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('Alledrogo');
  });
  
  it('Should go to Volvo page', async () => {
    await page.goToTab("Cars", "Volvo");
    expect(await page.elementIsPresentInTable({element: "XC90"})).toBe(true);
  });

  it('Should filter table in Volvo tab', async () => {
    expect(await page.elementIsPresentInTable({element: "S80"})).toBe(true);
    await page.filterBy("XC90");
    expect(await page.elementIsPresentInTable({element: "S80"})).toBe(false);
  });
});
