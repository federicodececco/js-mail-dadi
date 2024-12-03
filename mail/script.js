const mailingList = [
    'Nathan@mail.com',
    'Ed@mail.com',
    'Fabio@mail.com',
    'Phil@mail.com',
    'Carlo@mail.com',
    'Lewis@mail.com',
    'Luca@mail.com'
];
let email = prompt("Inserire mail")
let flag = 0;

for (let i = 0; i < mailingList.length; i++) {
    if (mailingList[i].toLowerCase === email.toLowerCase) {
        flag = 1;
    }
}
if (flag === 0) {
    console.log("Mail assente dalla lista")
}
else {
    console.log("Mail presente nella lista")
}