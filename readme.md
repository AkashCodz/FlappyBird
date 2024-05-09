# Flappy Bird Game

This is a simple Flappy Bird game implemented using HTML, CSS, JavaScript, and Canvas. Users can play the game, and their scores will be saved to a MongoDB database. Additionally, there's a discount feature available for users who reach a certain score threshold.

## Features

- Flappy Bird game implemented using HTML, CSS, JavaScript, and Canvas.
- Users can play the game and attempt to achieve the highest score.
- User authentication system to save scores to a MongoDB database.
- Discount feature available for users who achieve a certain score threshold.
- API endpoints implemented using Node.js and Express.js for integrating with the database.

## Setup Instructions

1. Clone this repository to your local machine.
2. Install Node.js if not already installed.
3. Install MongoDB if not already installed.
4. Navigate to the project directory in your terminal.
5. Run `npm install` to install dependencies.
6. Start the MongoDB server.
7. Run `npm start` to start the Node.js server.
8. Open your web browser and navigate to `http://localhost:3000` to play the game.

## Usage

- Play the Flappy Bird game by clicking or tapping to make the bird fly.
- Try to pass through as many pipes as possible to increase your score.
- Scores will be saved to the database when the game is over.
- Users who achieve a certain score threshold will receive a discount.
- Use the API endpoints to retrieve and manipulate score data.

## API Endpoints

- `POST api/score`: Add a new score to the database with username.

## Technologies Used

- HTML
- CSS
- JavaScript
- Canvas
- Node.js
- Express.js
- MongoDB

## Run Locally

Navigate to the project directory in your terminal.

Go to the project directory

```bash
  cd server
```

Install dependencies

```bash
  npm install express mongoose cors nodemon
```

Start the server

```bash
  npm start
```

Start the MongoDB server if running locally.

Run the live Server.


# Screenshots


## Username and Discount
![FlappyBird (1) (3)](https://github.com/AkashCodz/FlappyBird/assets/101062599/56a994a6-73ad-49dc-a97d-5c61f2eab568)



## Database MongoDB
![Screenshot (616)](https://github.com/AkashCodz/FlappyBird/assets/101062599/58207373-ba34-45f1-b5fb-44cabe16a242)


## Contributors

- [Akash Sharma](https://github.com/AkashCodz)

Feel free to contribute by opening issues or pull requests!


