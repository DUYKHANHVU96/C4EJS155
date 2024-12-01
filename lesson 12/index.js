// BAI 1
const h1ELement = document.querySelector('h1.titleH1');
h1ELement.innerText = "Đây là nội dung";

// // BAI 2
// const h1 = document.querySelector('h1.titleH1');
// h1ELement.style.color = 'red';
// h1ELement.style.backgroundColor = 'blue';
// h1ELement.style.fontWeight = 'bold';

// // BAI 3
// const btnClick = document.querySelector('button.btnClick');
// let switchStyle = true;
// btnClick.onclick = () =>
// {
//     if (switchStyle) {
//         h1ELement.style.color = "red";
//         h1ELement.style.backgroundColor = "blue";
//     } 
//     else {
//         h1ELement.style.color = "black";
//         h1ELement.style.backgroundColor = "transparent";
//     }
//     switchStyle = !switchStyle;
// }

// BAI 4
const inputTag=document.querySelector('input');
const btnAdd=document.querySelector('button.btnAdd');
btnAdd.onclick=()=>{
    const inputValue=inputTag.value;
    console.log(inputValue);
}

