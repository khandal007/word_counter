# word_counter

This project is built on

- Language -> Javascript
- Web Framework -> Express.js
- ORM -> Sequelize
- Database -> MySQL

Steps for Installation:-

1. Firstly, make clone of the repository.

2. Then install docker on your local machine.

2. Open terminal in the project directory and run the command "docker build . -t himansh007/word-counter".

3. After, run docker compose from the command "sudo docker-compose up".

4. Congrats, project has been setup.

Project has two API endpoints:-

Method: PUT
URL:  "http://localhost:30001/word/<word>" for registering the word.

Method: GET
URL: "http://localhost:30001/word/<word>" to get count of word.
