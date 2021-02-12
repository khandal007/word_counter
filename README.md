# word_counter

Steps for Installation:-

1. Firstly, make clone the repository.

2. Then in the terminal run the command "docker build . -t himansh007/word-counter".

3. After run docker compose from the command "sudo docker-compose up".

4. Congrats, project has been setup.

Project has two API endpoints:-

Method: PUT
URL:  'http://localhost:30001/word/<word>' for registering the word.

Method: GET
URL: 'http://localhost:30001/word/<word>' to get count of word.
