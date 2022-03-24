import { test, expect } from '@playwright/test';
import { browser } from '../page/computer-database-list';
import { computerCreateForm } from '../page/computer-create-form';


test.describe('Computer data base - Create form', () => {

    test.beforeEach(async ({ page }) => {
        const computerList = new browser(page);
        const createForm = new computerCreateForm(page);
        await computerList.openPage();
        await createForm.clickOnAddNewComputerButton();
    });

    test('should allow me to add new computer into the list', async ({ page }) => {
        const createForm = new computerCreateForm(page);
        await createForm.enterComputerNameField();
        await createForm.clickOnCreateThisComputerButton();
        await createForm.verifyPresentOfSuccessfulMessageForCreateNewComputer();
    });

    test('should not allow me to add new computer if I try to submit without Computer name', async ({ page }) => {
        const createForm = new computerCreateForm(page);
        await createForm.enterIntroducedDate();
        await createForm.enterDiscontinuedDate();
        await createForm.chooseCompanyFromList();
        await createForm.clickOnCreateThisComputerButton();
        await createForm.verifyPresentOfErrorAlertFieldNotificationOnComputerName();

    });

    test('should not allow me to add new computer if I try to submit wrong format for Introduced date', async ({ page }) => {
        const createForm = new computerCreateForm(page);
        await createForm.enterComputerNameField();
        await createForm.enterWrongFormatForIntroducedDate();
        await createForm.clickOnCreateThisComputerButton();
        await createForm.verifyPresentOfErrorAlertFieldNotificationOnIntroducedDate();

    });

    test('should not allow me to add new computer if I try to submit wrong format for Discontinued date', async ({ page }) => {
        const createForm = new computerCreateForm(page);
        await createForm.enterComputerNameField();
        await createForm.enterWrongFormatForDiscontinuedDate();
        await createForm.clickOnCreateThisComputerButton();
        await createForm.verifyPresentOfErrorAlertFieldNotificationOnDiscontinuedDate();
    });

});


