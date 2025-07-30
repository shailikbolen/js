const accountId=14453
let accountEmail="sunny@yahoo.com"
var accountPassword="12345"
accountCity="jaipur"

console.table([accountId,accountEmail,accountPassword,accountCity])

accountEmail="hc@hc.com"
accountPassword="212121"
accountCity="Bengaluru"

console.table([accountId,accountEmail,accountPassword,accountCity])
/*
prefer not to use var
because of issue in block scope and functional scope
*/