## AAT API
For AAT API I have used Node Js, Express, JEST.

## Pre-requisites
For development, you will only need Node.js and a node global package installed in your environement. 

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
  Navigate to `http://localhost:5000`

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