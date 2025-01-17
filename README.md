# Connect Vite to Chat Engine!

This simple repo shows how to easily add chat functionality into a Vite project with [Chat Engine](https://chatengine.io).

**You can choose between 2 layer of Chat Page,  ChatPage.jsx or ChatPage1.jsx ,just the chosen one named 'ChatPage.jsx'**
## Setup Steps

Setup this chat client in 3 steps below.

These steps assume you have already setup one of the server projects in `../backend` 

### 1 - Setup a Chat Engine server

Go to [Chat Engine](https://chatengine.io) to setup your own chat server.

- Click "New Project" and follow the steps
- Your `Project ID` and `Private Key` will be required for step 2

### 2 - Connect `.env` to Chat Engine

We will connect to your Chat Engine server with environment varibles.

This allows you to connect to different backend in local vs staging vs production.

Replace the UUID below with your own. In `.env` write :

**First in frontend folder**
```
VITE_CHAT_ENGINE_PROJECT_ID=enter your project id
```
also replace in ChatPage.jsx:
```
projectId='enter your project id'
```
**Install & Start**

Run the following two lines of code in `frontend/`.

```
npm install
npm run dev
```
**Second in backend folder**
```
CHAT_ENGINE_PRIVATE_KEY=enter your project key
CHAT_ENGINE_PROJECT_ID=enter your project id

```

**Install & Start**

Run the following two lines of code in `backend/`.

```
npm install
npm run start
```

Done! Your Express server is on `localhost:3000` and connected to Chat Engine!

All new "Sign Up" users are on Chat Engine, and their credentiuals are found upon "Login".

