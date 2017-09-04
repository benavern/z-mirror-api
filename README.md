# Z-MIRROR API

This is my z-mirror api application

## how to

1. Install heroku-cli & login [link](https://devcenter.heroku.com/articles/heroku-cli)
1. clone this repo & enter the newly created directory
    ```
    git clone https://github.com/benavern/z-mirror-api && cd z-mirror-api
    ```
    ```
1. Create a new heroku app
    ```
    heroku create
    ```
    _You can name your app here:_
    ```
    heroku create [[YOUR_DESIRED_API_NAME]]
    ```
1. Create an account on [cloudinary](https://cloudinary.com/) & add your cloudinary_url to the heroku config
    ```
    heroku config:set CLOUDINARY_URL=[[YOUR_CLOUDINARY_URL]]
    ```
1. Add a Token to your api so that you'll be able to post/put/delete. It can be whatever you want as a string
    ```
    heroku config:set Z_MIRROR_TOKEN=[[YOUR_TOKEN]]
    ```

1. Add your app a database
    ```
    heroku addons:create heroku-postgresql:hobby-dev
    ```
1. Connect to your database & create the tables by copy/pasting everything in the `pginit.sql` file 
    ```
    heroku pg:psql

    # copy-paste pginit.sql file here
    
    \q
    ```
1. Deploy the app
    ```
    git push heroku master
    ```
1. Enjoy your api
    ```
    heroku open
    ```

## Why
This project is part of my z-mirror project

* [The mirror](https://github.com/benavern/z-mirror)
* [The web app](https://github.com/benavern/z-mirror-app)