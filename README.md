# **PokeWatcher**

Url
https://kingnaranja.github.io/PokeWatcher-client/


### Overview 

*Pokewatcher* is a web app where users can log sightings of unique legendary Pokemon. User diary entries are managed by a RubyonRails database.

### Technologies 

1. Javascript
2. HTML
3. CSS / SCSS
4. jQuery
5. Ajax


### Wireframes 

Documentation hosted on Imgur:

https://imgur.com/a/Egx9HR9



### Approach
Building the *PokéWatcher* Client split my development into 3 phases. The websites mockup and design, configuring the handbars template and correctly setting every event listener.

From the wireframe, I was able to quickly mockup a pleasing ui with the help of SCSS templating files that I now carry on from project to project. However, I found it easier to make new pokemon-themed color varibles on a seperate file to import later.

The handlebars file provides a template for each diary entry that get passed on from any request. I was able to use a `limit` helper function to manage size of each diary entry for the user.

The final phase of this project is where I spent a majority of my time. Here I attempted to solve an interesting problem I have never seen before:

After the Handlebars template handles my request data, it appends the template to the DOM. However, this means that some a majority of the events may take place after the user signs in.
Handlebars will add *new* nodes to the DOM every time the user sends a request, so I could not place an event listener on Document ready.

My first solution was to find an event that closely correlated to the event listener and place one before or after it. Although this worked once, this was not the consitent every time. After a day or two of research I came upon jQuery's event delegation documentation, which perfectly enabled me to listen to element that does not yet exist.

*My LifeSaver*: https://learn.jquery.com/events/event-delegation/

# Future 

The next scope of this project will be to allow users to specify a specific legendary pokemon to add to their entry. The user will still be able to create a note to further detail their encounter. The client diary log will most likely use a select dropdown menu which will be populated with Pokémon choices.  
