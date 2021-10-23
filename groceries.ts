class Grocery {
    name: string;
    qty: number;

    constructor(name: string, qty: number) {
        this.name = name;
        this.qty = qty;
    }
};

const g1 = new Grocery("Milk", 19);
const g2 = new Grocery("Butter", 12);
const g3 = new Grocery("Flour", 14);
const g4 = new Grocery("Sugar", 9);
const g5 = new Grocery("Eggs", 12);
const g6 = new Grocery("Bread", 10);
const g7 = new Grocery("Coffee", 20);
const g8 = new Grocery("Tea", 14);

const gList = [g1, g2, g3, g4, g5, g6, g7, g8];

var html = '';
for (var i = 0; i < gList.length; i++) {
    html += '<li>' + gList[i].name + ': ' + gList[i].qty + '</li>';
}
console.log(html);
document.getElementById('list').innerHTML = '<ul>' + html + '</ul>';
