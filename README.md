## JavaScript | Angular2 JS | TypeScript

#### August 10, 2016


#### By _**Matt Wilkin**_

## Description
Tap Room App
Build a small Angular app for a bar to keep track of their kegs.


##Objectives

| Objective        | Complete           |
| ------------- |:-------------:|
| I want to fill out a form when I tap a new keg to create a display for it.     | -- |
| I want to see what kegs I have available.     | -- |
| For each keg, I need to see its name, brand, price and alcohol content.ctive     | -- |
| I want to see a display of how many pints are left in a keg. A full keg has 124 pints in it.. tive     | -- |
| I want to be able to click a button on a display of a keg whenever I sell a pint of that kind of beer and have the display of how many pints are left decrease by 1.     | -- |
| I want to be able to see all the kegs that have less than 10 pints left so that I can be ready to change them.   | -- |
| I want to be able to edit a keg's properties after entering them. | -- |
| I want to have kegs color coded to show me at a glance if they are cheap or expensive - say greater or less than $5 per pint.      | -- |

### Further Exploration



##Component Tree

| Component        | Function    | Parent  |
| ------------- |:-------------:| -----:|
| AppComponent | Hold Data | -- |
| KegListComponent | Display keg name, brand, price, and alcohol content and filter kegs by criteria | AppComponent |
| NewKegComponent | Makes form to create new keg | KegListComponent |
| EditKegComponent | Allows us to edit a keg's properties | KegListComponent |
| EditKegComponent | Allows us to edit a keg's properties | KegListComponent |
| KegComponent | Displays a single keg | KegListComponent |
| Keg | model class definition | not a component |


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
