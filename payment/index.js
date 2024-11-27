let card = document.getElementById("card");
let submit = document.getElementById("submit");

submit.onclick = function() {
    let amt = Number(document.getElementById("amt").value); // Get the value inside the function
    let displayCard = card.checked ? "You are paying using Visa" : "You are not paying using Visa";
    document.getElementById("forcard").textContent = displayCard;

    let discountAmt = amt > 100 ? 10 : 0;
    document.getElementById("foramt").textContent = `You will be paying $${(amt - amt * (discountAmt / 100)).toFixed(2)}`; // Use toFixed to format the number
};
