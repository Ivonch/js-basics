function balance(input) {
    index = 0;
    let income = (input[index]);
    index++

    let total = 0;

    while (income !== "NoMoreMoney") {
        let curSum = Number(income);

        if (curSum < 0) {
            console.log(`Invalid operation!`)
            break;
        }
        total += curSum;

        console.log(`Increase: ${curSum.toFixed(2)}`)

        income = input[index];
        index++
    }

    console.log(`Total: ${total.toFixed(2)}`)


}
balance
(["120", "45.55", "-150"])