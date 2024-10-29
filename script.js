
function calculateTicketPrice() {
 
    let age = Number(prompt("Enter your age:"));
    let movieType = prompt("Enter movie type (regular or 3D):").toLowerCase();
    let timeOfDay = prompt("Enter time of day (matinee or evening):").toLowerCase();
    let hasDiscountTicket = prompt("Do you have a discount ticket? (yes or no):").toLowerCase() === "yes";

   
    let basePrice;

 
    switch (true) {
        case (age < 10):
            basePrice = 5;
            break;
        case (age >= 10 && age <= 65):
            basePrice = 15;
            break;
        case (age > 65):
            basePrice = 10;
            break;
        default:
            console.log("Invalid age.");
            return;
    }

   
    if (movieType === "3d") {
        basePrice += 5;
    }

   
    if (timeOfDay === "evening") {
        basePrice += 5;
    }

   
    if (hasDiscountTicket) {
        basePrice *= 0.75; 
       
    }

  
    console.log(`The price of the ticket for you is: ${basePrice.toFixed(2)} GEL.`);
}


calculateTicketPrice();
