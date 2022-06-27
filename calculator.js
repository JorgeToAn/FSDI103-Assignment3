function calculator(){
    console.log(`Calculating...`);
    //get the values from the prompt
    let num1 = Number(prompt("Enter the first number"));
    let num2 = Number(prompt("Enter the second number"));

    //do the four operations
    let sum = num1+num2;
    let substraction = num1-num2;
    let multiplication = num1*num2;
    let division = num1/num2;

    //display the results in the results zone
    document.getElementById("results").innerHTML=
        `<table>
            <tr>
                <th>Sum <i class="fa-solid fa-plus"></i></th>
                <th>Substraction <i class="fa-solid fa-minus"></i></th>
                <th>Multiplication <i class="fa-solid fa-xmark"></i></th>
                <th>Division <i class="fa-solid fa-divide"></i></th>
            </tr>
            <tr>
                <td>${sum}</td>
                <td>${substraction}</td>
                <td>${multiplication}</td>
                <td>${division}</td>
            </tr>
        </table>`;
}