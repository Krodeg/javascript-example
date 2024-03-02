/****************************************/
/*                   1                  */
/****************************************/
// bitta function bolsin va u bitta number parametr olsin va olgan paramterni 30 ta gacha Oshirilsin lekin berilgan parametr 20dan katta bolsa "fail" degan yozik chiqsin //

// function increment(number) {
//     console.log(number);
// }

// let a = 14;

// if(a >= 20) {
//     console.log("fail");
// }

// else {
//     for(let i = a; i <= 30; i++) {
//         increment(i);
//     }
// }



/****************************************/
/*                   2                  */
/****************************************/
// bitta function bolsin va u 2ta parametr olsin, 2ta birhil password kirgizish kerak, password birhil bolmasa "fail"degan yoziq chiqsin va birhil bolsa "success" chiqsin //

// function checkPassword(pwd, pwdCheck) {
//     if(pwd != pwdCheck) {
//         console.log("fail");
//     }
//     else {
//         console.log("success");
//     }
// }

// checkPassword(123, 123);



/****************************************/
/*                   3                  */
/****************************************/
// bitta Bank function yaseng, 3ta parametr oladi, 1chisi 출금 va 입금, 2chisi carddagi qolgan summa, 3chisi 출금 yo 입금 qilodigon summasi //

// function bank(mode, card, price) {
//     if(mode == "출금") {
//         console.log(`card dan ${price} olindi, card da ${card - price} qoldi`);
//     }
//     else if(mode == "입금") {
//         console.log(`cardga ${price} qoshildi, cardda ${card + price} qoldi`);
//     }
//     else {
//         console.log("fail");
//     }
// }

// // bank("출금", 10000, 3000);
// // bank("입금", 10000, 3000);
// // bank("입", 10000, 3000);



/****************************************/
/*                   4                  */
/****************************************/
// 2ta variableni qiymatini ozgartirodigon function yaseng //

// function changeValue(value1, value2) {
//     console.log("ozgartirishdan oldin", value1, value2)
//     let change = value1;;
//     value1 = value2;
//     value2 = change;
//     console.log("ozgartirishdan kegin", value1, value2);
// }

// let a = 20;
// let b = 23;

// changeValue(a, b);



/****************************************/
/*                   5                  */
/****************************************/
// bitta function yaseng, u аттракцион togrisida boladi, аттракцион ga chiqish uchun yoshi 11ga teng yo katta bolsin va boyi 150cm dan katta bolsin va yoshi kichkina bolsa qancha yil kutish kerak ligini aytsin, boyini ham qancha osish kerakligini aytsin //

// function rollerCoaster(age, height) {
//     if(age >= 11 && height >= 150) {
//         console.log("you can ride roller coaster");
//     }
//     else if(age < 11 && height < 150) {
//         console.log(`sorry, but you cant ride roller coaster, you can wait ${11 - age} year and you should to grow ${150 - height}cm`);
//     }
//     else if(age < 11) {
//         console.log("sorry, but you cant ride roller coaster,", `wait '${11 - age}' year`);
//     }
//     else if(age < 150) {
//         console.log(`you are small, you should to grow ${150 - height}cm`);
//     }
//     else {
//         console.log(`not correct value`);
//     }
// }

// rollerCoaster(13, 120);



/****************************************/
/*                   6                  */
/****************************************/
// 가위바위보 function yaseng, function bitta parametr oladi, computerham 3tadan bittani chiqaradi, yutkaniniham chiqaring // 

function rockScissorsPaper(user) {
    let computer = parseInt(Math.random() * 3);
    
    switch(computer) {
        // Computer: Scissors
		case 0:
			switch(user)
			{
			case "scissors":
                console.log("computer: scissors, user: scissors");
                console.log("draw");
				break;
			case "rock":
                console.log("computer: scissors, user: rock");
                console.log("User win");
				break;
			case "paper":
                console.log("computer: scissors, user: paper");
                console.log("computer win");
				break;
			}
			break;
        // Computer: Rock
        case 1:
        	switch(user)
			{
			case "scissors":
                console.log("computer: rock, user: scissors");
                console.log("computer win");
				break;
			case "rock":
                console.log("computer: rock, user: rock");
                console.log("draw");
				break;
			case "paper":
                console.log("computer: rock, user: paper");
                console.log("User win");
				break;
			}
			break;	
        // Computer: Paper
        case 2:
        	switch(user)
			{
			case "scissors":
                console.log("computer: paper, user: scissors");
                console.log("User win");
				break;
			case "rock":
                console.log("computer: paper, user: rock");
                console.log("computer win");
				break;
			case "paper":
                console.log("computer: paper, user: paper");
                console.log("Draw");
				break;
			}
			break;	
		default:
			console.log(`Fail`);
			break;
		}
}


// rock, scissors, paper
// rockScissorsPaper("paper");



/****************************************/
/*                   7                  */
/****************************************/
// bitta function yaseng, u bitta parametr oladi, olgan parametrini karrasini chiqaradi //

// function multiplicationTable(number) {
//     for (let i = 1; i < 10; i++) {
//         let result = number * i;
//         console.log(`${number} x ${i} = ${result}`);
//     }   
// }

// multiplicationTable(5);



/****************************************/
/*                   8                  */
/****************************************/
// 0dan 50gacha juft son va toq son ni chiqaring //

// console.log("toq son");

// for(let i = 0; i <= 50; i++) {
//     i++;
//     console.log(i);
// }

// console.log("juft son");

// for(let j = 0; j <= 50; j++) {
//     if(j % 2 == 0) {
//         console.log(j);
//     }
// }



/****************************************/
/*                   9                  */
/****************************************/
// bitta function yaseng va u function 3ta number parametr oladi, ularni ichidan orta sonni topadi // 

// function middleNumber(num1, num2, num3) {
//     let max = Math.max(num1, num2, num3);
//     let min = Math.min(num1, num2, num3);

//     console.log(num1 + num2 + num3 - max - min);
// }

// middleNumber(10, 9, 4);



/****************************************/
/*                   10                 */
/****************************************/
// bitta function yaseng u 3ta parametr oladi, 1 va 2chisi son, 3chisi operator //

// function calculator(num1, num2, operator) {
//     if(operator == "add") {
//         console.log(num1 + num2);
//     }
//     else if(operator == "subtract") {
//         console.log(num1 - num2);
//     }
//     else if(operator == "divide") {
//         console.log(num1 / num2);
//     }
//     else if(operator == "square") {
//         console.log(num1 ** num2);
//     }
//     else {
//         console.log("Coming soon... or not correct");
//     }
// }

// calculator(10, 5, "add");