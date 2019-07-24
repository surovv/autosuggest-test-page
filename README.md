## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run lint`

Runs the eslint in src folder 


# Coding Challenge
================
The challenge is to create a search autocomplete input backed by the Plugify API.

Users should be able to start typing in the input, and the input should start showing them suggestions as provided by the API.

You can find a similar implementation on [Plugify's homepage](https://www.plugify.nl) .

## Rules
1. It must be well tested, please include a README.md in your repo explaining how to run the tests.
2. The app must be versioned using git, git history should be meaningful.
3. Please state your reasoning for adding any external code libraries.

## API Docs

API CORS accepts connections from localhost:8000, that should be the URL to set your app to.

### Autocomplete API

Base URL: https://api.earlytestabc.plugify.nl/autocomplete.json

You need to provide the param "query" with a string value, the API will reply with a mix of objects, you can know what kind of object it is from the _type field

You can see it in action here:
https://api.earlytestabc.plugify.nl/autocomplete.json?query=amst

#### Object Types:

Below are the most important attributes on different types, there are more that are sent back, be as creative in your display of the results as much you like.

##### City:

|Attribute|Value|
|---|---|
|_type|city|
|name|Siddeburen|
|province|Groningen|

##### Autocomplete Value:

The value field can have any of two keys, the values are in dutch:
- occasion: Wedding, Birthday, etc.. (In dutch)
- artist_group: Dj, bands etc..

|Attribute|Value|
|---|---|
|_type|"autocomplete_value"|
|category|"artist_group_occasion"|
|id| 60|
|name|"Huiskamerconcert Duo Trio"|
|value| \{ occasion: "huiskamerconcert", artist_group: "duo-trio" \} |

##### Artist

Artist objects have a lot of data, listed below are the most important ones:

|Attribute|Value|
|---|---|
|_type|"artist"|
|main_category|bands|
|name|Madonna|
