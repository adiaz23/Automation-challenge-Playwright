# Automation Challenge Playwright

This demo is divided in two parts:

1. A UI automation of the [https://automationteststore.com/](https://automationteststore.com/) page with the following test cases:
    1. Create a user
    2. Create a user with a used username
    3. Login with valid credentials
    4. Login with invalid credentials
    5. Go to the Reset Password page
    6. Logout
    7. Go to the T-Shirt Gallery
    8. Go to a T-Shirt PDP
    9. Add a T-shirt to the cart
    10. Remove an item from the cart
  
2. An API automation of 3 endpoints of the [Marvel API](https://developer.marvel.com/documentation/getting_started)
   1. Fetch all Marvel characters
   2. Fetch all Spider-Man comics
   3. Fetch all X-Man characters

## Tools and technologies

- [Playwright](https://playwright.dev/)
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Allure reports](https://allurereport.org/docs/)
- [Github Actions](https://docs.github.com/en/actions)

## Setting up

### Dependencies

1. Make sure you have:
- [node](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/package/npm)
- [Java](https://www.java.com/en/download/) and its directory specified in the `JAVA_HOME` environment variable

3. Before you start, remember to run the command to install the dependencies:

```bash
npm install
```
### Config file

1. Create a copy of the `.env.example` file in the same repository folder.
2. Rename the copy to `.env`.
3. Complete the environment variable `URL` with the URL of the [website](https://automationteststore.com/)
4. Complete the environment variable `API_URL` with the [Marvel API URL](https://gateway.marvel.com:443)
5. Complete the environment variable `USERNAME`, `PASSWORD` with the information of a valid user.
6. Complete the environment variable `PUBLIC_KEY` with the Public key generated on the [Marvel API Page](https://developer.marvel.com/documentation/getting_started#:~:text=Sign%20up%3A-,Get%20an%20API%20key,-Be%20a%20good)
7. Complete the environment variable `TIMESPAMP` with a timetsamp generated with this [page](https://timestampgenerator.com/)
8. Complete the environment variable `HASH` with a hash generated with this [page](https://www.md5hashgenerator.com/). To generate a valid hash, it's necessary to paste your previously generated timestamp, your private key and your public key together [more info](https://developer.marvel.com/documentation/authorization).

### Running

To run the test, you can use the following custom commands: 

Headless
```bash
npm test
```
Open the playwright UI mode
```bash
npm run test-ui
```
After running the test, you can generate the Allure report with the following custom command:
```bash
npm run generate-report
```

## Collaboration

### Naming Conventions

- Use `lowerCamelCase`for variables, properties, files and folder names.
- Use `UpperCamelCase` for class names. 
- Use prefix like `is`, `are`, or `has` for bool variables.
- Use self explanatory names for variables, E.g `let cartPage`.
- Always start functions with a verb and the entity being affect by it, E.g `async goToTshirtGallery()`. 

### Eslint
It's necessary to run Eslint before create a Pull Request. For this, you can use the commands:

**All files**

```
npx eslint .
```

**One file**

```
npx eslint file1.js
```

**Two file**

```
npx eslint file1.js file2.js
```

**Multiple files**

```
npx eslint lib/**
```
To fix the errors found by Eslint, you can run:

```
npx eslint --fix
```
