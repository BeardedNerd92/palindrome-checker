const palindrome = (e) => {
  input = document.querySelector(".input").value;

  e.preventDefault();
  reverseStr = "";
  input.split("").forEach((i) => (reverseStr = i + reverseStr));
  if (!input) return (output.textContent = "Valid responce is required!");
  if (reverseStr === input)
    return (output.textContent = `${input} = ${reverseStr}: a palindrome`);
  output.textContent = `${input} = ${reverseStr}: not a palindrome`;
};

let output = document.querySelector(".output");
let btn = document.querySelector(".btn");
btn.addEventListener("click", palindrome);

const footer = () => {
  let date = new Date().getFullYear();
  let output = `&copy; ${date} by Zack Grooms`;
  document.querySelector(".copyright").innerHTML = output;
};
footer();
