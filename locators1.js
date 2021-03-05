describe('basic locators',function()
{

 it ('First test',function()
 {




//in jasmine fw by default the promises are taken care of 
//here we are using assertions 
expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("12")


// here we resolve the promise and then only get into text grabbing else we wont get the result 
element(by.css("h2[class='ng-binding']")).getText().then(function(mytext)
{
    console.log(mytext);
})
element(by.repeater('result in memory')).element(by.css("td:nth-child(3)")).getText().then(function(result)
{
    console.log(result);    
})

})

})
