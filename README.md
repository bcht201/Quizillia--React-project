# Quizzila

## Methodology 
- Retro at 9:15
- 2 Navigator 1 Driver
- 30 minutes rotation, 5 minute break in between person swap, 10 min break after full cycle
- Write an outline of what to test for, write tests, write code to match test, repeat (TDD)
- 5pm/ 5:15pm/ 5:30pm retro, plan goals for the next day      
  
  
## Git Branches
- Master -> Development -> Feature branch
- We should name the feature branches based on the file or feature that is being worked on
- We should commit once something works
- Merge into dev once feature is complete
- We should commit in present tense


## User Stories
- As a user, I should see a landing page and a button to start the game
- As a user, there should be input available to pick the number of players 
- As a user, there should be input available to pick the category for questions 
- As a user, I should be able to choose the level of difficulty for the quiz questions
- As a user, there should be an input available to pick the number of questions in a round
- As a user, I should be able to clearly see who’s turn it currently is to answer the question
- As a user, there should be a countdown timer to show how much time is left to answer the question
- As a user, there should be a submit button so that I can submit my answer to the question
- As a user, at the end of the game I should be able to see my results on how many I got correct
- As a user, I should be able to see who won the round

## API calls to https://opentdb.com/api_config.php
- 1st API call to get categories and ID 
- 2nd API call to get questions and answers based on input

## Milestones 
### Version 1: 
- 1 player
- no timer
- fixed catergory/ difficulty
- 10 questions

### Version 2:
- 1 or 2 players
- no timer
- Select category from a list
- Select difficulty (easy, medium, hard)
- Up to 10 questions, depends on what is available for the category from the API

### Initial App Structure
![alt text](/map.jpg "App Tree")

### Final App Structure
![alt text](/final_map.jpg "App Tree Final")
