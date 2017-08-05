# SMS Gratitude Journal

## Introduction
This application is an SMS-based journal for people who are looking to express gratitude in their day to day lives.

## Setup
First, install all dependencies using `npm install`. Then, install node-foreman via `npm install -g node-foreman`, then run it using `nf start`. Make sure your database is running.

### Twilio setup

To start using Twilio, use the .env file - and for any lost souls who look at this project and don't have the .env file, create one in the iot-gym directory, and include your Twilio auth token and SID. .env should look like:

```
TWILIO_AUTH: #################################
TWILIO_SID:  #################################
```

Finally, once the server is running, feel free to test the Twilio recommendation by changing `to` in the JSON field to the number of your choice. Then, using localhost and the current port of the application, you can POST the recommendation using CURL or a tool like PostMan. You could probably also just change it to a GET request. ;)

## Verbs



###check-in
Indicates that the actor has checked-in with the object. For example, a person checks in with a piece of exercise equipment to indicate they are using the equipment.
```
{
"actor": {
    "id": "01",
    "objectType": "person",
    "displayName": "Ricky" },
  "verb": "check-in",
  "object": {
    “id”: “02”,
    "objectType": "equipment",
    "displayName": "Treadmill" },
  "title": "Ricky is checked in to the treadmill."
  }
```

### check-out
Indicates that the actor has checked-out with the object. For example, a person checks out with the piece of exercise equipment to indicate they are not using the equipment. Also includes duration (in MINUTES).
```
{
"actor": {
    “id”: “01”,
    "objectType": "person",
    "displayName": "Ricky" },
  "verb": "check-out",
  "object": {
    “id”: “02”,
    "objectType": "equipment",
    "displayName": "Treadmill" },
  "title": "Ricky is checked out of the Treadmill.",
  "duration": "12"
  }
```

###recommend
Indicates that the actor recommends itself to the object. For example, a treadmill will recommend itself to a person who needs cardio.
```
{
"actor": {
    “id”: “01”,
    "objectType": "equipment",
    "displayName": "Treadmill" },
  "verb": "recommend",
  "object": {
    “id”: “02”,
    "objectType": "person",
    "displayName": "Ricky"}
  "target" :{
    “objectType”: "event",
    “displayName”: "Workout"
  }
}
```

## Object types


### Person
Human being interested in working out
### Equipment
Represents any piece of exercise equipment
### Recommendation
A suggested object for another actor

## Object Properties


### displayName
The natural-language, human-readable and plain-text keyword or phrase identifying the actor. HTML markup MUST NOT be included.

This property has the type `String`.

### title
A human-readable descriptive label for the link. HTML-markup SHOULD NOT be used.

This property has the type `String`.
