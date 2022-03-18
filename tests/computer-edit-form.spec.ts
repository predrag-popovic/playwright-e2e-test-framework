import { test, expect } from '@playwright/test';
import { browser } from '../page/computer-database-list';
import { computerEditForm } from '../page/computer-edit-form';


test.describe('Computer data base - Create form', () => {

    test.beforeEach(async ({ page }) => {
        const openComputerList = new browser(page);
        const editForm = new computerEditForm(page);
        await openComputerList.goto();
        await editForm.searchComputerNameFromList();
        await editForm.chooseComputerNameFromList();
    });

    test('should allow me to edit computer data', async ({ page }) => {
        const editForm = new computerEditForm(page);
        await editForm.changeComputerNameField();
        await editForm.changeIntroducedDate();
        await editForm.changeDiscontinuedDate();
        await editForm.changeCompanyFromList();
        await editForm.clickOnCreateThisComputerButton();
        await editForm.verifyPresentOfSuccessfulMessageForCreateNewComputer();
    });

    test('should not allow me to edit computer if I try to submit without Computer name', async ({ page }) => {
        const editForm = new computerEditForm(page);
        await editForm.leaveEmptyComputerName();
        await editForm.clickOnCreateThisComputerButton();
        await editForm.verifyPresentOfErrorAlertFieldNotificationOnComputerName();
    });

    test('should not allow me to edit computer if I try to submit wrong format for Introduced date ', async ({ page }) => {
        const editForm = new computerEditForm(page);
        await editForm.enterWrongFormatForIntroducedDate();
        await editForm.clickOnCreateThisComputerButton();
        await editForm.verifyPresentOfErrorAlertFieldNotificationOnIntroducedDate();
    });

    test('should not allow me to edit computer if I try to submit wrong format for Discontinued date ', async ({ page }) => {
        const editForm = new computerEditForm(page);
        await editForm.enterWrongFormatForDiscontinuedDate();
        await editForm.clickOnCreateThisComputerButton();
        await editForm.verifyPresentOfErrorAlertFieldNotificationOnDiscontinuedDate();
    });

});