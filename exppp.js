
let nem=require("nem-sdk").default;
// Create an NIS endpoint object
let endpoint = nem.model.objects.create("endpoint")(nem.model.nodes.defaultTestnet, nem.model.nodes.defaultPort);

// Create a common object holding key
var common = nem.model.objects.create("common")("", "54102bbdc7358bd56e2c327a7a891e22819d86c970402fcdf03d1b4c4f991ccf");

// Create an un-prepared transfer transaction object
var transferTransaction = nem.model.objects.create("transferTransaction")("TBCI2A67UQZAKCR6NS4JWAEICEIGEIM72G3MVW5S", 10, "Hello");

// Prepare the transfer transaction object
var transactionEntity = nem.model.transactions.prepare("transferTransaction")(common, transferTransaction, nem.model.network.data.testnet.id);

/* Serialize transfer transaction and announce
nem.model.transactions.send(common, transactionEntity, endpoint).then(function(res){
console.log(res);
}, function(err){
console.log(err);
});
*/
nem.com.requests.account.namespaces.owned(endpoint).then(function(res){
console.log(res);
}, function(err){
console.log(err);
})