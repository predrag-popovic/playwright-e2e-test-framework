import { expect, Locator, Page } from '@playwright/test';
import { creatFromTestData, expectResultForErrorAlert } from '../data/create-form';

export class computerCreateForm {
  readonly addNewComputerButton: Locator;
  readonly computerNameField: Locator;
  readonly createThisComputerButton: Locator;
  readonly introducedDateField: Locator;
  readonly discontinuedDate: Locator;
  readonly companyList: Locator;
  readonly successfulMessageForCreateNewComputer: Locator;
  readonly errorAlertFieldNotification: Locator;

  constructor(page: Page) {
    this.addNewComputerButton = page.locator('id=add');
    this.computerNameField = page.locator('id=name');
    this.createThisComputerButton = page.locator('css=input.btn.primary');
    this.introducedDateField = page.locator('id=introduced');
    this.discontinuedDate = page.locator('id=discontinued');
    this.companyList = page.locator('id=company');
    this.successfulMessageForCreateNewComputer = page.locator('css=div.alert-message.warning');
    this.errorAlertFieldNotification = page.locator('css=div.clearfix.error > label');
  }

  async clickOnAddNewComputerButton() {
    await this.addNewComputerButton.click();
  }

  async enterComputerNameField() {
    await this.computerNameField.fill(creatFromTestData.computerName);
  }

  async clickOnCreateThisComputerButton() {
    await this.createThisComputerButton.click();
  }

  async enterIntroducedDate() {
    await this.introducedDateField.fill(creatFromTestData.introducedDate);
  }

  async enterDiscontinuedDate() {
    await this.discontinuedDate.fill(creatFromTestData.discontinuedDate);
  }

  async chooseCompanyFromList() {
    await this.companyList.selectOption({value:'1'});
  }

  async enterWrongFormatForIntroducedDate() {
    await this.introducedDateField.fill(creatFromTestData.wrongFormatForIntroducedDate);
  }

  async enterWrongFormatForDiscontinuedDate() {
    await this.discontinuedDate.fill(creatFromTestData.wrongFormatForDiscontinuedDate);
  }

  async verifyPresentOfSuccessfulMessageForCreateNewComputer() {
    await expect(this.successfulMessageForCreateNewComputer).toBeVisible();
    await expect(this.successfulMessageForCreateNewComputer).toHaveText(creatFromTestData.successfulMessageForCreateNewComputer);
  }

  async verifyPresentOfErrorAlertFieldNotificationOnComputerName() {
    await expect(this.errorAlertFieldNotification).toBeVisible();
    await expect(this.errorAlertFieldNotification).toHaveText(expectResultForErrorAlert.fieldComputerName);
  }

  async verifyPresentOfErrorAlertFieldNotificationOnIntroducedDate() {
    await expect(this.errorAlertFieldNotification).toBeVisible();
    await expect(this.errorAlertFieldNotification).toHaveText(expectResultForErrorAlert.filedIntroducedDate);
  }

  async verifyPresentOfErrorAlertFieldNotificationOnDiscontinuedDate() {
    await expect(this.errorAlertFieldNotification).toBeVisible();
    await expect(this.errorAlertFieldNotification).toHaveText(expectResultForErrorAlert.filedDiscontinuedDate);
  }


}