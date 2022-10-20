# Toggle-Reviews

I created a toggle of reviews using local data due to still learning AJAX and HTTP requests.
Created the local data with objects inside an array.

I then used my knowledge learned with DOM and selected the elements that will be toggling and getting clicked.

Set the starting item at 0 and added 'DOMContentLoaded' so when the page is loaded, the first object will be on display [0].
Created a function to show a person based on an item, this function was used so I didn't have to write the same code for each object (review).

Added an EventListener 'click' to each button, first prev and next. Each time the button is clicked it will either ++ || -- from the starting item changing the display of the element to the desired object. 

Surprise me btn was also added with an EventListener 'click'. The function was made up of Math.floor and Math.random to generate a random number between 
1 - 4 to then display the number that was produced. 

I will come back to this project once I get a better understanding of AJAX and API's to make this code more effective. 
I also understand that the whole DIV is reloading instead of the individual elements, I would like to fix this whilst my understanding grows.
