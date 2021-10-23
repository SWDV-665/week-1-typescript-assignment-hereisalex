var Grocery = /** @class */ (function () {
    function Grocery(name, qty) {
        this.name = name;
        this.qty = qty;
    }
    return Grocery;
}());
;
var g1 = new Grocery("Milk", 19);
var g2 = new Grocery("Butter", 12);
var g3 = new Grocery("Flour", 14);
var g4 = new Grocery("Sugar", 9);
var g5 = new Grocery("Eggs", 12);
var g6 = new Grocery("Bread", 10);
var g7 = new Grocery("Coffee", 20);
var g8 = new Grocery("Tea", 14);
var gList = [g1, g2, g3, g4, g5, g6, g7, g8];
var html = '';
for (var i = 0; i < gList.length; i++) {
    html += '<li>' + gList[i].name + ': ' + gList[i].qty + '</li>';
}
console.log(html);
document.getElementById('list').innerHTML = '<ul>' + html + '</ul>';
