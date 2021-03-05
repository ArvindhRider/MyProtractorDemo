function pageObjectModel()
{
    this.url = browser.get("https://www.rahulshettyacademy.com/angularpractice/");
    this.namefield = element(by.name('name'));
    this.emailfield = element(by.name('email'));
    this.passwordfield = element(by.id('exampleInputPassword1'));
    this.checkbosfield = element(by.id('exampleCheck1'));

}



//object of this class
module.exports = new pageObjectModel();