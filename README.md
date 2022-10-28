# expense-tracker-app
## React Native Learning Project

*an expense tracker app, which is connected to a firebase Firestore database. User can add, edit, delete and get data from database.*

*There are 4 screens in this app*

## ScreenShots
<img src="https://github.com/yellow0125/expense-tracker-app/blob/implement/img/1.png" height="350" alt="1"/>

Screenshot of the home screen and add screen. At the beginning the database is empty, it will show a message to user. Then add an expense, request the amount cannot be empty and must be number, and description cannot be empty and mush be string.

<img src="https://github.com/yellow0125/expense-tracker-app/blob/implement/img/2.png" height="400" alt="2"/>    

Screensho of home screen two bottom tabs, all expenses and important expenses showed in list.

<img src="https://github.com/yellow0125/expense-tracker-app/blob/implement/img/3.png" height="400" alt="3"/>    

When user tab an expense it will navigate to edit screen of the target expense, you can delete or modify the status of its important. All of these operation will have a ALERT.
- confirm to delete
- confirm mark as important
- confirm mark as unimportant

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
