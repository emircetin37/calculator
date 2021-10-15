function all(suan, operator) {

    this.suan = suan;
    this.operator = operator;
}
all.suan = 0
function num(num) {
    document.getElementById("result").innerText += num;
}
function nokta(n) {
    var text = document.getElementById("result").innerText.toString();
    if (!isNaN(Number(text.substr(text.length - 1, 1)))) {
        document.getElementById("result").innerText += n.toString();
    } 
    //if(text.substr(text.length,)){

    //}
}
function myClear() {
    document.getElementById("result").innerText = ""
}

function backSpace() {
    var text = document.getElementById("result").innerText.toString();
    document.getElementById("result").innerText = text.slice(-(text.length), -1)
}

function operatorf(op) {
    all.operator = op;
    var text = document.getElementById("result").innerText



    if (text.includes("+")) {

        document.getElementById("result").innerText = text.replace("+", all.operator)
    }
    else if (text.includes("-")) {

        document.getElementById("result").innerText = text.replace("-", all.operator)
    }
    else if (text.includes("*")) {

        document.getElementById("result").innerText = text.replace("*", all.operator)
    }
    else if (text.includes("/")) {

        document.getElementById("result").innerText = text.replace("/", all.operator)
    }
    else {
        if (text.length > 0) {
            document.getElementById("result").innerText += all.operator
        }

    }
    //document.getElementById("result").innerText

}
var myArray = []
function hesapla(val) {
    myArray = val.split(all.operator)
    if (all.operator == "+") {
        for (let i in myArray) {
            all.suan += Number(myArray[i])
        }

        document.getElementById("result").innerText = Number(all.suan)

    }
    if (all.operator == "*") {
        if (all.suan == 0) {
            all.suan = 1;
        }
        for (let i in myArray) {
            all.suan *= Number(myArray[i])
        }
        document.getElementById("result").innerText = Number(all.suan)
    }
    if (all.operator == "-") {
        for (let i in myArray) {
            if (i == 0) {
                all.suan = myArray[i];
            }
            else {
                all.suan -= myArray[i];
            }

        }
        document.getElementById("result").innerText = Number(all.suan)
    }
    if (all.operator == "/") {
        for (let i in myArray) {
            if (all.suan == 0) {
                all.suan = 1;
            }
            if (i == 0) {
                all.suan = Number(myArray[i])
            }
            else {
                all.suan /= Number(myArray[i])
            }
        }
        document.getElementById("result").innerText = Number(all.suan)
    }
    myArray = []
    all.suan = 0;

}

