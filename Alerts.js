describe('Protractor Alert steps',function() {  


    it('Open NonAngular js website Alerts',function() {
    
    browser.waitForAngularEnabled(false);
    browser.get("http://qaclickacademy.com/practice.php");
    element(by.id("confirmbtn")).click();
    
// here to go with positive status we use 
//accept() 
//if we go with cancel or negative kind of response we do 
//dismiss()

    browser.switchTo().alert().dismiss().then(function()
    
    {
    //10sec
    browser.sleep(5000);
    })
    
    
    
    
    
    
    
    
    
    
    })
    
     
    
    
    
    
    
    //browser.get() will hit url on the browser
    // write your raw protractor code
    
    //Each it block will be called as a spec
    
    
    
    it('close browswer', function() {
    
    
    
    // code to close browser
    })
    
    
    
    
    
    })
    //first parameter- Test suite name
    //Second parameter - function (function wil have all tests (it blocks)
    
    //first parameter- Test case  name
    
    
    