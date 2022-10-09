// (function(){
//     // const fonts = ["cursive","sans-serif","serif","monospace"];
//     const fonts = ["IBM Plex Serif"];
//     let captchaValue = "";
//     function generateCaptcha(){
//       let value = btoa(Math.random()*1000000000);
//       value = value.substr(0,5+Math.random()*5);
//       captchaValue = value;
//     }
//     function setCaptcha(){
//       let html = captchaValue.split("").map((char)=>{
//         const rotate = -20 + Math.trunc(Math.random()*30);
//         const font = Math.trunc(Math.random()*fonts.length);
//         return `<span 
//           style="
//             // transform:rotate(${rotate}deg);
//             // font-family:${fonts[font]}
//           "
//         >${char}</span>`;
//       }).join("");
//       document.querySelector(".login-form .captcha .preview").innerHTML = html;
//     }
//     function initCaptcha(){
//       document.querySelector(".login-form .captcha .captcha-refresh").addEventListener("click",function(){
//         generateCaptcha();
//         setCaptcha();
//       });
//       generateCaptcha();
//       setCaptcha();
//     }
//     initCaptcha();
    
//     document.querySelector(".login-form #login-btn").addEventListener("click",function(){
//       let inputCaptchaValue = document.querySelector(".login-form .captcha input").value;
//       if(inputCaptchaValue === captchaValue){
//         swal("", "Logging In!", "success");
//       } else {
//         swal("Invalid captcha");
//       }
//     });
//   })();


let captcha;
let alphabets = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
console.log(alphabets.length);
let status = document.getElementById('status');
//status.innerText = "Captcha Generator 123";

 generate = () => {
// console.log(status)
let first = alphabets[Math.floor(Math.random() * alphabets.length)];
let second = Math.floor(Math.random() * 10);
let third = Math.floor(Math.random() * 10);
let fourth = alphabets[Math.floor(Math.random() * alphabets.length)];
let fifth = alphabets[Math.floor(Math.random() * alphabets.length)];
let sixth = Math.floor(Math.random() * 10);
captcha = first.toString()+second.toString()+third.toString()+fourth.toString()+fifth.toString()+sixth.toString();
console.log(captcha);
document.getElementById('generated-captcha').value = captcha;
document.getElementById("entered-captcha").value = '';
//status.innerText = "Captcha Generator"
}

 check = () => {
// console.log(status)
let userValue = document.getElementById("entered-captcha").value;
console.log(captcha);
console.log(userValue);
if(userValue == captcha){
    status.innerText = "Correct!!"
}else{
    status.innerText = "Invalid Captcha !! Try Again"
    document.getElementById("entered-captcha").value = '';
}
}





