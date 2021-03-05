var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');


exports.config = 
{
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //specs: ['spec.js']
    specs: ['framework.js'],
    // capabilities: {
    //   browserName: 'firefox'
    // }
    onPrepare : function()
    {
      //can give all the things which has to be done to each and every testcase
      //eg :- if we need to get reports 
      //eg:- window maximize 
      browser.driver.manage().window().maximize();
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'target/screenshots'
        })
      );
    },
  suites :
  {
    Group: ['Alerts.js']
    //can add more key value pairs with keys as its group name and value as the javascript file 

    },
    jasmineNodeOpts: {
      showColors: true, // Use colors in the command line report.
    }
  };

 