# ProcIns_ms
App created with nodejs + express + mongodbAtlas

## Development
Make sure you have installed node and npm

For development just use this command to install all the dependencies `npm install`

Then you can use this two commands

`npm start`

`npm run dev` this one is for development pourposes, using nodemon

## Docker

Build your image in the root directory of the project

	sudo docker build -t procins_devimg .

Run the container with the next template

	sudo docker run -p 3001:3001 -e DB_USER=<THE DATABASE USER> -e DB_PSWD=<THE DATABASE PASSWORD> --name procins_ms procins_devimg

## Routes

