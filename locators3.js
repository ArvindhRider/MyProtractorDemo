describe('to handle dropdowns',function()
{

    it('drop down lesson ', function()
    {
    
        browser.get("http://juliemr.github.io/protractor-demo/")
        browser.getTitle().then(function(title)
        {
            console.log(title + "is the title of this page ")
        })

        calc("5","5","MULTIPLICATION");
        clicky();
        calc("5","5","ADDITION");
        clicky();
        calc("5","5","DIVISION");
        clicky();
        calc("5","5","SUBTRACTION");
        clicky();
       

// to see the value 

element.all(by.repeater('result in memory')).each(function(itemsinrep)
{
itemsinrep.element(by.css("td:nth-child(3)")).getText().then(function(textss)
{
    console.log(textss)
})
})

    }) // End of It block

}) //End of describe 




// function to select the type of operation we need to do 
function calc(a,b,c)
 {
     element(by.model("first")).sendKeys(a);
     element(by.model('second')).sendKeys(b);

element.all(by.tagName('option')).each(function(opname)
{
    

   opname.getAttribute("value").then(function(operators)
   {
       
       if(operators==c)
       {
           opname.click();
       }

   })
 

})
}  // end of calc 




//To make a button click
function clicky()
{
    element(by.id('gobutton')).click();
}



    
