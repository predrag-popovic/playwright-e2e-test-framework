import { expect, Locator, Page } from '@playwright/test';
import { creatFromTestData, expectResultForErrorAlert } from '../data/create-form';
import { editFormTestData } from '../data/edit-form';

export class computerEditForm {
    readonly addNewComputerButton: Locator;
    readonly computerNameField: Locator;
    readonly createThisComputerButton: Locator;
    readonly introducedDateField: Locator;
    readonly discontinuedDate: Locator;
    readonly companyList: Locator;
    readonly searchBox: Locator;
    readonly searchButton: Locator;
    readonly chooseComputerName: Locator;
    readonly successfulMessageForCreateNewComputer: Locator;
    readonly errorAlertFieldNotification: Locator;


    constructor(page: Page) {
        this.addNewComputerButton = page.locator('id=add');
        this.computerNameField = page.locator('id=name');
        this.createThisComputerButton = page.locator('css=input.btn.primary');
        this.introducedDateField = page.locator('id=introduced');
        this.discontinuedDate = page.locator('id=discontinued');
        this.companyList = page.locator('id=company');
        this.searchBox = page.locator('id=searchbox');
        this.searchButton = page.locator('id=searchsubmit');
        this.chooseComputerName = page.locator('text=ASCI White');
        this.successfulMessageForCreateNewComputer = page.locator('css=div.alert-message.warning');
        this.errorAlertFieldNotification = page.locator('css=div.clearfix.error > label');
    }


    async searchComputerNameFromList() {
        await this.searchBox.click();
        await this.searchBox.fill(editFormTestData.computerName);
        await this.searchButton.click();
    }

    async chooseComputerNameFromList() {
        await this.chooseComputerName.click();
    }

    async leaveEmptyComputerName() {
        await this.computerNameField.selectText();
        await this.computerNameField.press('Backspace');
    }

    async clickOnCreateThisComputerButton() {
        await this.createThisComputerButton.click();
    }

    async enterWrongFormatForIntroducedDate() {
        await this.introducedDateField.selectText();
        await this.introducedDateField.press('Backspace');
        await this.introducedDateField.fill(editFormTestData.wrongFormatForIntroducedDate);
    }

    async enterWrongFormatForDiscontinuedDate() {
        await this.discontinuedDate.selectText();
        await this.discontinuedDate.press('Backspace');
        await this.discontinuedDate.fill(editFormTestData.wrongFormatForDiscontinuedDate);
    }

    async changeComputerNameField() {
        await this.computerNameField.selectText();
        await this.computerNameField.press('Backspace');
        await this.computerNameField.fill(editFormTestData.computerName);
    }

    async changeIntroducedDate() {
        await this.introducedDateField.selectText();
        await this.introducedDateField.press('Backspace');
        await this.introducedDateField.fill(editFormTestData.introducedDate);
    }

    async changeDiscontinuedDate() {
        await this.discontinuedDate.selectText();
        await this.discontinuedDate.press('Backspace');
        await this.discontinuedDate.fill(creatFromTestData.discontinuedDate);
    }

    async changeCompanyFromList() {
        await this.companyList.selectOption({ value: '3' });
    }

    async verifyPresentOfErrorAlertFieldNotificationOnComputerName() {
        await expect(this.errorAlertFieldNotification).toBeVisible();
        await expect(this.errorAlertFieldNotification).toHaveText(expectResultForErrorAlert.fieldComputerName);
    }

    async verifyPresentOfSuccessfulMessageForCreateNewComputer() {
        await expect(this.successfulMessageForCreateNewComputer).toBeVisible();
        await expect(this.successfulMessageForCreateNewComputer).toHaveText(editFormTestData.successfulMessageForCreateNewComputer);
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