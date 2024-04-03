import {test, request, expect} from "@playwright/test";
// eslint-disable-next-line no-undef
const publicKey = process.env.PUBLIC_KEY;
// eslint-disable-next-line no-undef
const timeStamp = process.env.TIMESPAMP;
// eslint-disable-next-line no-undef
const hash = process.env.HASH;

test.describe("Fetch characters from Marvel API Tests", async()=>{
	let apiRequest;

	test.beforeEach(async()=>{
		apiRequest = await request.newContext({
			// eslint-disable-next-line no-undef
			baseURL: process.env.API_URL
		});
	});

	test("Fetch All Characters", async()=>{
		let response = await apiRequest.get(`/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}&limit=100`);
		await expect(response).toBeOK();
	});

	test("Fetch more than 100 characters", async()=>{
		let response = await (await apiRequest.get(`/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}&limit=101`)).json();
		expect(response.code).toBe(409);
		expect(response.status).toBe("You may not request more than 100 items.");
	});

	test("Fetch less than 1 character", async()=>{
		let response = await (await apiRequest.get(`/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}&limit=0`)).json();
		expect(response.code).toBe(409);
		expect(response.status).toBe("You must pass an integer limit greater than 0.");
	});
});