# Restroom Locater by Sean Buchas
---

## Description
---
Chances are you are at one point in your life you were out of the house and needed to use the restroom but had an incredibly difficult time finding one. If you are in a city like New York it could feel almost impossible to find one. The goal of this application is to solve that and make finding a public restroom as easy as possibly. Using the Google Maps API with data submitted by users results in a convenient to use website and in the future a mobile app. 

Users can scroll around on google maps to find all the public restrooms near them. If they click on a marker on the map it will bring up information on the restroom like its address, ratings on the restrooms cleanliness and location, a description of the restroom, and an image if available. Users can also add a bathroom themselves via Latitude and Longitude. 

## Technologies Used
---
For this app I used the **MERN** stack. Along with the **MERN** stack I used the **Google Maps API**. **Express** was used along with **MongoDB** for my backend. In the backend I have 3 models. One for user, one for restrooms, and one for submissions which tie a user and restroom together. On the frontend I used **React** with **Google Maps API**. Google Maps were used to display the locations of restrooms via markers placed on the map. When a user clicks the marker the information about that particular restroom is shown on the screen under the map. The markers for the Google Map are populated from the restroom model on the backend. I pull all the restrooms from the backend and then map over them pulling out the lng and lat coordinates to create multiple markers. 

## Screenshots
---
![Main Page](https://i.imgur.com/Y8RcZMl.png)
This is the main page you see when you first enter the site.
![Main Page Populated](https://i.imgur.com/Lx66CLy.png)
This is how the main page gets populated when you click on a marker.
![Add New Submission](https://i.imgur.com/bLHb3It.png)
This is the page where you can add a new submission.
![Edit Submission](https://i.imgur.com/g7yHsx2.png)
This is the page where you can edit a restroom submission.
![Admin Panel](https://i.imgur.com/ufNANkV.png)
This is the admin panel where you can view the data in the data base as well as any submissions that have been reported.