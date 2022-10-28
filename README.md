# expense-tracker-app
## React Native Learning Project

*an expense tracker app, which is connected to a firebase Firestore database. User can add, edit, delete and get data from database.*

*There are 4 screens in this app*

## ScreenShots
<img src="https://github.com/yellow0125/hw1-guessing/blob/main/img/startscreen.png" height="500" alt="startscreen"/>

Screenshot of the first screen. The two buttons, one it is used to reset and clean the input and the other to confirm user's input. It accepts only number form 1020 to 1029.

If the input value is invalid, an alert will be shown to the user with a button to reset the input. 

<img src="https://github.com/yellow0125/hw1-guessing/blob/main/img/gaming.png" height="500" alt="startscreen"/>    

The Game Screen is shown in a modal, which shows a message to the user notifying them if the number they entered matches what you have chosen or if it's bigger or smaller.   
- when user pick a number and it will also make the modal visible
- If they have won they will see another message congratulating them.  
- If they haven't won, users can choose to continue the game (taken back to the starting game to guess again) or choose to end the game. 

<img src="https://github.com/yellow0125/hw1-guessing/blob/main/img/gameOverScreen.png" height="500" alt="startscreen"/>    

- If the user guessed the number right, the game is over. On this screen, it is shown a picture with a URL constructed based on the chosen value, e.g. if the chosen value is 1024 the URL should be https://picsum.photos/id/1024/100/100.
- If user had chosen to finish the game without guessing correctly, it will show them a sad smiley face.
- there will be a button to start the game again where all the game states (including the chosen number) are reset.

## Install and Use

In order to install, clone this repository and run:

> npm install  
//OR  
>yarn install

This was made with Expo, so you need it to run. To do it, run:
> npm start  
 //OR  
> npm expo start --tunnel

This starts the Metro Bundler. You can simulate the app in an Android emulator (such as in Android Studio) or in your own device, Android or iOS powered, by downloading the Expo App.
