## AAT API
For AAT API I have used Node Js, Express, JEST.

## Pre-requisites
For development, you will only need Node.js and a node global package installed in your environement. 

## Tasks Completed:
```
- Get – Gets all items from the data source
- Get by Id – Gets one item from the data source where the id matches the id being passed
- Filter by Item – Filter the data source by an item passed. (Ideally should bring a list of 2 or more items)
- Written 3 test cases for Unit Test
```
## Tasks TODO (Improvements):
```
- Implement Authentication & Authorization Process for user list using(JWT)
- Prepare continious integration + deployment pipeline (CICD) with Github and AWS
- Write more test cases
- The NoSQL/RDBMS data source could be used instead of getting data from File.
```
## Getting started
- Clone the repository
```
git clone  git@github.com:alimulrazi/aat.git
```
- Install dependencies
```
cd <project_name>
npm install
```
- Build and run the project
```
npm start
```
  Navigate to `http://localhost:3000`

To run the tests.
```
  npm run test
```

## Project API End Point
For the API I have used data source as File System. The API End Point Below:

| Method | URL | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- | --- |
| **GET**                  | /api/users | Gel All users information from File as a data source|
| **GET**                  | /api/users/2   | Gel individual user information from File as a data source|
| **GET**                  | /api/filter?country=United Kingdom  | Gel users information filtered by country name from File as a data source |