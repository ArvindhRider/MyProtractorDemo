

describe('this is a e2e automation', function()
{

    var pomobj = require ("./pom.js");
    var d = require ("./dProviderwithsubmodules.js");
    //we have to include this line to use multi set data provider 
    const using = require('jasmine-data-provide');
    


// providing before each from jasmine framework its like before test of testng 
beforeEach(function()
{
    pomobj.url;
})

using(d.datadriven, function (data, description)
{
    it ('this is my form page test'+description, function()
    {
       //NOTE : Here we use d.dataProvider.name not just d.name 
        pomobj.namefield.sendKeys(data.name).then(function()
        {
            browser.sleep(2000);
        })
        
        pomobj.emailfield.sendKeys("abc@gmail.com")
       pomobj.passwordfield.sendKeys("abcsecret");
        pomobj.checkbosfield.click();

        //conatins text method use ebcsstxt
        element(by.cssContainingText('#exampleFormControlSelect1 option', 'Female')).click()

        //to select the radio button 
        // we have name as a common one in all the radio buttons from that we can select our desired one using index
        //we can also use first() / last() also 

        element.all(by.name('inlineRadioOptions')).get(1).click();
        element(by.css("input[name='bday']")).sendKeys("05121995")
        element(by.buttonText('Submit')).click().then(function()
        {
            //browser.sleep(5000);
            element(by.css("div[class*='success']")).getText().then(function(textresult)
            {
                console.log(textresult);
            })
        })

        //now we clear the name field and get the error message available to it '
        //validatng the error message 
        element(by.name('name')).clear().sendKeys("A").then(function()
        {
            element(by.css("div[class='alert alert-danger']")).getText().then(function(errortetname)
            {
console.log(errortetname);
            })
        })

        element(by.linkText('Shop')).click();

selectitem("iphone X");
selectitem("Blackberry");

//After selecting we have to validate whether we see the exact number of items in the checkout button 
//for that first we need to get the text available in the checkout button !

element(by.partialLinkText("Checkout")).getText().then(function(checkoutdetails)
{
    console.log(checkoutdetails);
    

    // we split the data and extract the number (2) --> 2 
    var result = checkoutdetails.split("(");
    //on splitting it would be in an array so we need the second part 2) so we use [1] 
    //after trim the whitespace will be gone and we would be having the character so we use charAt 0th pos to get the count 
    var count = result[1].trim().charAt(0);
    console.log(count)


    // on asserting the value 
    expect(count).toBe("2");
})


// tbody tr:nth-child(1) td:nth-child(4) strong:nth-child(1)
// tbody tr:nth-child(2) td:nth-child(4) strong:nth-child(1)

element(by.partialLinkText("Checkout")).click().then(function()
{
    browser.sleep(3000);
})

    var value1;
    var value2;
    element(by.css("tbody tr:nth-child(1) td:nth-child(4) strong:nth-child(1)")).getText().then(function(value1)
{
    console.log(value1);
    var sum1= value1.split(".");
    item1amount = sum1[1].trim()
    console.log(item1amount);
    

})
element(by.css("tbody tr:nth-child(2) td:nth-child(4) strong:nth-child(1)")).getText().then(function(value2)
{
    console.log(value2);
    var sum2= value2.split(".");
    item2amount = sum2[1].trim()
    console.log(item2amount);
    
    
 })
// console.log(item1amount + item2amount );

// element.all(by.css("tbody tr td:nth-child(4)")).each(function(items)
// {
//     var arr=[];
//     items.getText().then(function(sum)
//     {
// console.log(sum)
// var val = sum.split(".");
// console.log(val)




//     })
   

// })








    })//end of it 
}); //end of using block    
afterEach(function()
{
    console.log("Tests completed successfully !")
})





})//end of describe










function selectitem( product)  
{

   element.all(by.css("app-card[class*='col-lg-3 col-md-6 mb-3']")).each(function(items)
{
   
   browser.driver.manage().window().maximize();
  items.element(by.css("h4 a")).getText().then(function(name)
  {
console.log(name);
if(name==product)
{
   //here we do items.ebcss becoz we want to click that particular item's add button !
   items.element(by.css("button[class*='btn btn-info']")).click()
}
  })
   

})

}     
