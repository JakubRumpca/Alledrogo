import { browser, by, element, ExpectedConditions } from 'protractor';

let timeout = 30000

export class AppPage {

private title = element(by.css('[id="Title"]'));
private pageElement = element(by.css('[class="container"]'));
private filterInput = element(by.css('[id="Filter"]'));


  navigateTo() {
    return browser.get('/');
  }

  async getTitleText() {
    await browser.wait(ExpectedConditions.presenceOf(this.title), timeout, `${this.title.locator()} was not present`);
    return this.title.getText();
  }

  async goToTab(tabName: "Login" | "Cars" | "Motorcycles" | "Home", model?: "Audi" | "BMW" | "Volvo" | "Kawasaki"| "Yamaha" | "HarleyDavidson"){
    const tabLocator = element(by.css(`[id=${tabName}]`));    
    const modelLocator = element(by.css(`[id=${model}]`));    
    await browser.wait(ExpectedConditions.elementToBeClickable(tabLocator), timeout, `${tabLocator.locator()} was not clicable`);
    await tabLocator.click();
    if(model){
      await browser.wait(ExpectedConditions.elementToBeClickable(modelLocator), timeout, `${modelLocator.locator()} was not clicable`);
      await modelLocator.click();
    }
  } 

  async elementIsPresentInTable({element}:{element: string}){
    const componentText = await this.pageElement.getText();
    return componentText.includes(element);
  }

  async filterBy(text: string) {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.filterInput), timeout, `${this.filterInput.locator()} was not clicable`);
    await this.filterInput.sendKeys(text);
  }

}
