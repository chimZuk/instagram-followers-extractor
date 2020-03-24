var list = [];
var array = document.getElementsByClassName("FPmhX");
for(var i = 0; i < array.length; i++) {
    var temp = {};
    var data = array[i].textContent;

    temp.tag = data;
    temp.link = "https://instagram.com/" + data + "/";

    list.push(temp);
}

console.log(JSON.stringify(list));