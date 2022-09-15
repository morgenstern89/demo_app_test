
describe("My Login Demo", ()=>{

    beforeEach(async ()=>{

        await $("~open menu").click();
        await $('//*[@text="Log In"]').click();
    }); 

    it("Login with valid credentials", async ()=> {

        await $('//android.widget.EditText[@content-desc="Username input field"]').setValue("bob@example.com");
        await $('//android.widget.EditText[@content-desc="Password input field"]').setValue("10203040");
        await $('//android.view.ViewGroup[@content-desc="Login button"]').click();

        await driver.pause(3000);

        const selector =
            'new UiSelector().text("Products").className("android.widget.TextView")';
        const productsUISelector= await $(`android=${selector}`);
        await expect(productsUISelector).toHaveText("Products");
    })
})