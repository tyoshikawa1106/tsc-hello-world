var Greeter = (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    Greeter.prototype.greet = function () {
        return "<h1 class='slds-text-heading--medium'>" + this.greeting + "</h1>";
    };
    return Greeter;
}());
;
var greeter = new Greeter("Hello, world!");
document.getElementById("hello").innerHTML = greeter.greet();
//# sourceMappingURL=greeter.js.map