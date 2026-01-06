const accountId = 14453
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

// accountId = 2121 // not allowed as constant cannot be updated

accountEmail = "cdcd@gmail.com"
accountPassword = "23421"
accountCity = "Mumbai"

console.table([accountEmail,accountPassword,accountCity,accountState])

/*
PREFER NOT TO USE VAR , BCZ OF ISSUE IN BLOCK SCOPE AND FUCNTIONAL SCOPE
*/
