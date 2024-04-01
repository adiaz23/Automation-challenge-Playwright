import {test, expect, request} from "@playwright/test"
const publicKey = process.env.PUBLIC_KEY;
const timeStamp = process.env.TIMESPAMP;
const hash = process.env.HASH;
const characterName = "Spider-Man (Peter Parker)";

test.describe("Fetch Comics from Marvel API", async()=>{
    let apiRequest;
    let characterID;

    test.beforeEach(async()=>{
        apiRequest = await request.newContext({
            baseURL: process.env.API_URL
        });
        let response = await (await apiRequest.get(`/v1/public/characters?name=${characterName}&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`)).json();
        characterID = response.data.results[0].id
    });

    test("Fetch Spider-Man Comics", async()=>{
        let response = await (await apiRequest.get(`/v1/public/characters/${characterID}/comics?&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}&limit=100`)).json();
        expect(response.data.results).toHaveLength(100);
        expect(response.data.results[0].characters.items[0].name).toBe(characterName);
    });

    test("Fetch more than 100 Spider-Man Comics", async()=>{
        let response = await (await apiRequest.get(`/v1/public/characters/${characterID}/comics?&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}&limit=101`)).json();
        expect(response.code).toBe(409);
        expect(response.status).toBe("You may not request more than 100 items.");
    });

    test("Fetch less than 1 Spider-Man Comic", async()=>{
        let response = await (await apiRequest.get(`/v1/public/characters/${characterID}/comics?&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}&limit=0`)).json();
        expect(response.code).toBe(409);
        expect(response.status).toBe("You must pass an integer limit greater than 0.");
    });
})