# SMS Gratitude Journal

## Introduction
This application is an SMS-based journal for people who are looking to express gratitude in their day to day lives.

## Setup
First, install all dependencies using `npm install`.

Use the `sample-env` file as the basis for environment variables. There are many strategies for including environment variables in your project - for our purposes, this app uses node-foreman to add environment variables into the local application.

To use `node-foreman`, install via `npm install -g foreman`, then run it using `nf start`. Make sure your database is running, and that a twilio webhook is set up to handle user responses.

## Architecture
This system has three major components:

#### worker
The worker reads from the database, and uses the collection of users to send a daily text message to users.

#### web
The web server performs read and write operations against the database. It's also the connection to the Twilio webhook, and thus receives text messages from the user.

#### database
Stores information, as databases tend to do.
