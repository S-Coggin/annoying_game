alert("CONNECTED");
var answer = prompt("Are we there yet?");

while(answer !=="yes" && answer !== "yeah") {
    var answer = prompt("Are we there yet?");
}
alert("Yay, we finally made it!");
