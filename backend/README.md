# MERN stack application

## References: 

**freecodecamp** https://www.youtube.com/watch?v=7CqJlxBYj-M&t=34s

track 0 - 43:00 backend

track 43:00 - 1:20:00 frontend

track 1:20:12 Connect the frontend to the backend.

## Development notes

### 1.  Create a new react app: (bootstrap it):

```
npx create-react-app [app_name]

cd app_name

npm install bootstrap

npm install react-route-dom

npm install react-datepicker

npm start
```

### 2.  Create backend folder

``` mkdir backend

cd backend

npm init -y

npm install express cors mongoose dotenv

sudo npm install -g nodemon

nodemon server --debug 
```


##  Connecting the frontend to the backend (track 1:19:00)
```
npm install axios
```

## Run

axios is used to send data between the frontend and the backend via
http://localhost:3002/

You must define .env and use process.env.HOST, process.env.HOST for this.