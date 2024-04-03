import {test, expect, request} from "@playwright/test";
// eslint-disable-next-line no-undef
const publicKey = process.env.PUBLIC_KEY;
// eslint-disable-next-line no-undef
const timeStamp = process.env.TIMESPAMP;
// eslint-disable-next-line no-undef
const hash = process.env.HASH;
const comicName = "X-Man";

test.describe("Fetch characters of a specified comic from Marvel API Tests", async()=>{
	let apiRequest;
	let comicId;

	test.beforeEach(async()=>{
		apiRequest = await request.newContext({
			// eslint-disable-next-line no-undef
			baseURL: process.env.API_URL
		});
		let response = await (await apiRequest.get(`/v1/public/comics?title=${comicName}&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}&limit=100`)).json();
		comicId= response.data.results[57].id;
	});
 
	test("Fetch X-Man characters of a specified comic", async()=>{
		let response = await (await apiRequest.get(`/v1/public/comics/${comicId}/characters?&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`)).json();
		expect(response.code).toBe(200);
		expect(response.data.results).toHaveLength(10);
	});

	test("Fetch less than 1 X-Man character of a specified comic", async()=>{
		let response = await (await apiRequest.get(`/v1/public/comics/${comicId}/characters?&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}&limit=0`)).json();
		expect(response.code).toBe(409);
		expect(response.status).toBe("You must pass an integer limit greater than 0.");
	});

	test("Fetch X-Man character of a specified comic without ComicID", async()=>{
		let response = await (await apiRequest.get(`/v1/public/comics//characters?&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`)).json();
		expect(response.code).toBe(404);
		expect(response.status).toBe("We couldn't find that comic_issue");
	});

	test("Fetch X-Man character of a specified comic without a parameter", async()=>{
		let response = await (await apiRequest.get(`/v1/public/comics//characters?&ts=${timeStamp}&hash=${hash}`)).json();
		expect(response.code).toBe("MissingParameter");
		expect(response.message).toBe("You must provide a user key.");
	});

	test("Fetch X-Man character of a specified comic with invalid credentials", async()=>{
		let response = await (await apiRequest.get(`/v1/public/comics//characters?&ts=${timeStamp}&apikey=invalid&hash=${hash}`)).json();
		expect(response.code).toBe("InvalidCredentials");
		expect(response.message).toBe("The passed API key is invalid.");
	});
});