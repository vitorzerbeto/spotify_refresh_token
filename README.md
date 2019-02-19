# Spotify Refresh Token
Note App that return a new spotify token

## Usage

First, i'll need to install the dependenses with the command: 
```
npm i
```

Now just run the command to start server:
```
npm run production
```

## Params

To receive the token, simply use the "auth" on yout POST request. The value must be a base 64 encoded string that contains the client ID and client secret key.

Params|Value
------|------
auth|&lt;base64 encoded client_id:client_secret&gt;
