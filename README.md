# ChessMaster
#### _A chess app built with React and Django_


## Getting started

### Requirements:
- python3
- pip
- node.js
- npm

### Running the project:
1. Download repository: `$ git clone https://github.com/fdias1/chessmaster && cd chessmaster`
2. Get back-end requirements: `$ cd ./chess-backend && pip3 install -r requirements.txt`
2. Run backend application: `$ python3 manage.py runserver`
3. Get the front-end depedencies: `$ cd ../chess-frontend && npm install`
4. Run front-end web app: `$ npm start`

### Documentation:
API browser client automatically created by Django rest framework

### API Guide:
[POST] `/chesspiece/`:
Create a new ChessPiece with the request body attributes
- Request body example:
```
{
	"type": "bishop", // or: "pawn" || "rook" || "knight" || "queen" || "king"
	"color": "d", // for 'dark', or "l" for 'light'
}
```

[GET] `/chesspiece/`:
Returns a list of all ChessPieces

[GET] `/chesspiece/{id}/`:
Returns a specific ChessPiece

[PUT] `/chesspiece/{id}/`:
Update a specific ChessPiece with the request body attributes

[DELETE] `/chesspiece/{id}/`:
Delete a specific ChessPiece

[POST] `/position/{id}/{position}`:
Returns a list of all possible positions after two moves of a ChessPiece
- Use the standard chess notation
- request params example: `localhost:8000/position/40/h4`



### To Do:
- back-end unit tests
- integration tests
- API docs
- front-end unit tests

## Enjoy! 
###### ~~and hire me!~~
