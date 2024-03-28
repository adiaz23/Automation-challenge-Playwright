import {test, request, expect} from "@playwright/test";
const publicKey = process.env.PUBLIC_KEY;
const timeStamp = process.env.TIMESPAMP;
const hash = process.env.HASH;

test.describe("Fetch characters from Marvel API", async()=>{
    let apiRequest;

    test.beforeEach(async()=>{
        apiRequest = await request.newContext({
            baseURL: process.env.API_URL
        });
    });

    test("Fetch All Characters", async()=>{
        let response = await apiRequest.get(`/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`);
        await expect(response).toBeOK();
    });

    test("Fetch more than 100 characters", async()=>{
        let request = await apiRequest.get(`/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}&limit=101`);
        let response = await request.json();
        expect(response.code).toBe(409);
        expect(response.status).toBe("You may not request more than 100 items.");
    });

    test("Fetch zero character", async()=>{
        let request = await apiRequest.get(`/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}&limit=0`);
        let response = await request.json();
        expect(response.code).toBe(409);
        expect(response.status).toBe("You must pass an integer limit greater than 0.");
    });
});