# Take Home Software Engineering Test

## Case Two

Candidate : Tanor Abraham Reyuko

The candidate are tasked to provide a simple web-based dashboard displaying stats of Dota
heroes. The data can be fetched from https://api.opendota.com/api/herostats
Then based on those data, create 2 of these
• Meta suggestion of 10 best heroes for each of the 8 tier.
• Meta suggestion based on pro pick + ban and winrate
• Automated hero suggestion given a player account ID (for testing please use 152740380
or 80523971)

## Candidate Solution 
Candidate has chosen the first two options which are :
• Meta suggestion of 10 best heroes for each of the 8 tier.
• Meta suggestion based on pro pick + ban and winrate

Platform : Windows (Portability untested)
Front End Framework : React.js
Back End Framework : Node.js
DBMS : MySQL (RDBMS)

Node Modules : express, mysql, cors, node-fetch, cron, styled-components

Front End :
    • Main Page in **App.js** (Currently only rendering top 10 Meta Heroes based on Winrate)
    • Using **HeroCard** component to visualize the heroes in card format
    • Data fetched from backend using **fetchData()** function
    • Still need to be hardcoded to get specific tier data and pro hero data

Back End :
    • Have 2 REST API both can be accessed at url **"/hero/:tier"** (tier 0-7) and **"/pros"**
    • CRON Job running every 5 seconds to update database data with data fetched from opendota API (app.js)

## How to Setup
Requirements (preferably latest versions) :
    • npm 
    • MySQL Workbench (Or any MySQL platform)

Steps :
    1. Clone repository
    2. Run `npm install` for both frontend and backend
    3. Create database in your mysql platform 
    4. Run `npm start` for backend first to setup server and load data, then frontend
    5. Change the port to suit your ports in 
        - Frontend : **frontend/package.json -> change proxy value**
        - Backend : app.js
        - Database (backend connection): connectDatabase.js 
    6. Open `localhost:3000` in your browser where React App will run
    7. Backend and Database will use port `3001` and `3306` respectively
