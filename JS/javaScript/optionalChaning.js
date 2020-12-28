let details = {
    name: "gopi",
    age: 24,
    address: {
        street: 24,
        colony: "vishwakarma colony",
        are: "jeedimetla",
    }
}
console.log(details && details.address && details.address.street)//24
console.log(details?.address.street)//24

