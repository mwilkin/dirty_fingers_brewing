## JavaScript | Angular2 JS

#### Template in Angular2, August 10, 2016

#### By _**Matt Wilkin**_


##Objectives

| Objective        | Complete           |
| ------------- |:-------------:|
| Objective     | -- |
| Objective     | -- |
| Objective     | -- |
| Objective     | -- |
| Objective     | -- |


##Component Tree
| Component        | Function           | Parent  |
| ------------- |:-------------:| -----:|
| AppComponent | Hold Data | -- |
| KegListComponent | Display keg name, brand, price, and alcohol content and filter kegs by criteria | AppComponent |
| NewKegComponent | Makes form to create new keg | KegListComponent |
| EditKegComponent | Allows us to edit a keg's properties | KegListComponent |
| EditKegComponent | Allows us to edit a keg's properties | KegListComponent |
| KegComponent | Displays a single keg | KegListComponent |

## Description

Tap Room App
Build a small Angular app for a bar to keep track of their kegs. Use the To-Do List homework as a guide. Look for relationships between the various parts of this program and the parts of the To-Do List.
Here are some user stories to get you started. As a bartender ...
I want to fill out a form when I tap a new keg to create a display for it.
I want to see what kegs I have available. For each keg, I need to see its name, brand, price and alcohol content.
I want to see a display of how many pints are left in a keg. A full keg has 124 pints in it.. I want to be able to click a button on a display of a keg whenever I sell a pint of that kind of beer and have the display of how many pints are left decrease by 1.
I want to be able to see all the kegs that have less than 10 pints left so that I can be ready to change them.
I want to be able to edit a keg's properties after entering them.
I want to have kegs color coded to show me at a glance if they are cheap or expensive - say greater or less than $5 per pint. I also want to use the alcohol content property to display stronger beers differently than weaker beers.
Further Exploration
If you have finished all objectives above, you can get some more practice with your TypeScript To-Do List (the non-angular one) by adding the following functions to your to-do-listing-functions.ts file with a way to trigger them and display the results on the front-end of your app:
Sort tasks to only show tasks of a given type (hobby/work/home)
List all tasks that are of a given priority.
Display the first, high priority task for the given person.
Peer Code Review
By the end of Tuesday, you should have two functioning To-Do lists, one in TypeScript, and one in Angular. It would also be good to have a basic Tap Room app started.
Here are the Peer Code Review goals for the TypeScript To-Do list:
Does the project include TypeScript?
Does the project function and look well presented in the browser? Is the code clean and readable?
Does the project include classes and objects?
Is the project structured in a logical way?
Does the project have a detailed, clean commit history?
Here are the Peer Code Review goals for each Angular project:
Does the app function as expected?
Does the app include multiple components as well as a model?
Can you view, create and edit instances of the model?
Is the project structured logically?
Is the code neat and organized?
Does the project have a detailed, clean commit history?


## Setup/Installation Requirements

* Clone this repository

* In the command-line run:
```
$ npm install
```
```
$ bower install
```
```
$ bower init
```
```
$ apm install atom-typescript
```
```
$ gulp build
```
```
$ gulp serve
```

## Known Bugs

* Currently no known bugs

## Support and contact details

If you run into any issues or have questions, ideas, or concerns, please feel free to contact me on GitHub.

## Technologies Used

* JavaScript
* Angular2
* Bower
* NPM
* GitHub API

### License

*MIT License*
<a href="https://opensource.org/licenses/MIT">https://opensource.org/licenses/MIT</a>

Copyright (c) 2016 **_Epicodus_**
