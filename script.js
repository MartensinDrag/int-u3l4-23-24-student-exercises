let header = document.querySelector("h1");
let button = document.querySelector("button");
let img = document.querySelector("img");

// 1. Press the button on the webpage to change it up! Take notice of what happens.
// - What do you think innerHTML does?
// - What do you think .src does?


// 2. Try the following:
// - Make it so that the header says your name when the button is clicked.
// - Change the src of the image to something random.
button.addEventListener("click", function() {
    header.innerHTML = "🤯 Nyla Williams";
    img.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDFnc3pwYnhsMnRsMTh2NDYyaWI2M2NoNjhjNTk4Nmt2NXQ2bHkzMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lkcIQY7IuctvFCGAD3/giphy.gif";
});


