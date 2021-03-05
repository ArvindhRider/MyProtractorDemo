function me()
{
    this.name = "Rider";
    this.age = "26";
    this.role = "Automation Engineer"
    this.mymethod = function()
    {
        console.log("I am a method ")
    }
    
     

}


//general way of creating an object 
var a = new me();
a.mymethod();

//if we need the object to be gloablly available then use module.exports()


module.exports = new me();

