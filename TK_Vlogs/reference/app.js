function changeByValue (b) {
    b = 2;
}

var a = 1;
changeByValue(a);
console.log(a);

function changeByReference (obj) {
    obj.pro1 = function () {

    };
    obj.newPro2 = {};
    obj.d = 100;
}

var c = {};
c.pro1 = {};
changeByReference(c);

console.log(c)