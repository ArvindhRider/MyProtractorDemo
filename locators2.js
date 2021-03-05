describe('basic locators',function()
{

// it ('second test',function()
// {




// //in jasmine fw by default the promises are taken care of 
// //here we are using assertions 
// expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("12")


// // here we resolve the promise and then only get into text grabbing else we wont get the result 
// element(by.css("h2[class='ng-binding']")).getText().then(function(mytext)
// {
//     console.log(mytext);
// })
// element(by.repeater('result in memory')).element(by.css("td:nth-child(3)")).getText().then(function(result)
// {
//     console.log(result);    
// })

// })



it('Second text on all method ', function()
{

    browser.get("http://juliemr.github.io/protractor-demo/")
    browser.getTitle().then(function(title)
    {
        console.log(title + "is the title of this page ")
    })

    values("3","9");
    clicky();
    values("5","4");
    clicky();
    values("7","7");
    clicky();

    //ELEMENTS.ALL IS USED TO GET A GROUP OF VALUES JUST LIKE BY.ELEMENTS IN SELENIUM

element.all(by.repeater('result in memory')).count().then(function (repeatercount)
    {
console.log(repeatercount);

    })

    // WHEN WE SAY THEN THE PROMISE IS RESOLVED FOR ONLY THE FIRST ITEM OF THE GROUP 
    // WHEN WE SAY EACH THEN PROMISE IS RESOLVED FOR ALL THE ITEMS IN THAT GROUP 

element.all(by.repeater('result in memory')).each(function(itemsinrep)
{
itemsinrep.element(by.css("td:nth-child(3)")).getText().then(function(textss)
{
    console.log(textss)
})
})
    
    
})



})





//Function to send values
function values(a,b)
{

    element(by.model("first")).sendKeys(a);
    element(by.model('second')).sendKeys(b);

}

//Function to click 
function clicky()
{
    element(by.id('gobutton')).click();
}



