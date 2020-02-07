## A Check-In App
### Possibly your first web app?

This repository contains a simple web app built using HTML, CSS, JavaScript, and Go for the backend. It has two parts - a form to enter your name, and a display that shows the names of everyone who has filled out the form.

### Demo

Go to [form page](https://go.hackku.org/submit) to submit your name and watch the magic!

### Install

To run the code you'll need to install Go, which you can do [here](https://golang.org/dl/). That's the only dependency!

You can then download the code by running the following commands in a command prompt/terminal:

```
git clone https://github.com/ehiggins98/HackKU-Workshop-2020
cd HackKU-Workshop-2020
```

Once you've done that, start the server using `go run server/main.go`.

To get the website to work you'll need to modify the code to send requests to the correct URL. This will be `http://localhost:2020`. At the top of `display/loader.js` and `form/submit.js`, change the value of `Url` to that URL. After that, you should be able to use the form and/or display pages in your browser!

For local display, have `const Url = "https://go.hackku.org/api/get"`

For local form, have `const Url = "https://go.hackku.org/api/submit"`

### Ideas for Extending this Project

If you want to use this code as a base for your hackathon project, I came up with a few starter ideas. 

The web app reminds me of the sign-up page of Kahoot! - you could make a quiz website like that. Another cool idea might be to make a message board, so people attending an event can post their thoughts to other attendees in real-time. Those are by no means all the good ideas though, and you can probably come up with better ideas than I can.
