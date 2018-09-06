# Full Stack Review WPX7
* start with getting the server going
* client side stuff


# Server
* npm install packages
* express
* body-parser
* axios
* dotenv
* express-session
* massive

## File structure

* server folder
* controllers
    * memes
* index file
* add a `main` to `package.json`
    * proxy
        * remember special proxy for use with Auth0
* middlewares (might not have today but will likely have later on)
* db folder 
    * init.sql

## Routes 
* /auth/callback
* /logout
* /user-data
* /api/memes
* stretch goals
    * /api/memes POST/GET
    * /api/memes/:id PATCH/DELETE (update)

# Client
* 

## Packages 
* redux
* react-redux
* react-router-dom 
* axios

## Components
* Header
* Dashboard
* Home
* Memes
* Login ? (might not have time)
* Meme

## Redux
* reducer
* store
* Provider wrapper (modify index.js)
* action creators
    * type
    * payload 
    * action types/names
* initial state
    * user (user is something good for global state)
    * memes list 

# Routes 
* Home /
* Dashboard /dashboard
* Memes /memes


# Database
* memes
    * id
    * url
    * title
    * text caption?
    * who posted it (user_id)
    * date
    * category/type

* users
    * id
    * auth0_id
    * name
    * email
    * picture
    * nickname

for likes, you'd probably want a separate table 
* likes

* sql statements
    * get_memes_by_user_id
    * get_user_by_auth0_id
    * create_user
    * delete_meme?
    * update_meme?
    
