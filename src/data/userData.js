import Chance from "chance";
let chance = new Chance();
let firstname = chance.first();
let date = Date.now();
let createRandomUser;

// eslint-disable-next-line no-unused-vars
export default createRandomUser = {
	"firstname": firstname,
	"lastname" : chance.last(),
	"email": chance.email({domain: "test.com"}),
	"address": chance.address(),
	"city": chance.city(),
	"zipcode": chance.zip(),
	"login-name": `${firstname}${date}`,
	"password": chance.string({length: 8, pool: "abcdefghijkmnopkrstwxyz"})
};