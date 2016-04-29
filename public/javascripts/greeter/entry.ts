class Greeter {
    constructor(public greeting: string) { }
    greet() {
        return "<h1 class='slds-text-heading--medium'>" + this.greeting + "</h1>";
    }
};

var greeter = new Greeter("Hello, world!");
    
document.getElementById("hello").innerHTML = greeter.greet();