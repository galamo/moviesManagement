# Movies Mangement

1. Add new Movie
2. Delete A Movie
3. Edit Movive - 2024

## Form

1. Movie name
2. publish year
3. rank
4. duration
5. Link to trailer
6. category
7. image - poster
8. description

button - add movie

creating new object which describe a movie
adding the new object into a new array

adding the movie into the table

Lets start!

# Homework

1. Add new column to the table - Actors
2. Add new column to the table - director
3. In rank column instead of number show stars ( images ) 6
4. Add selectable functionality to the table - when clicking a row ( ADvanced@!) 8

# Next phase

1. Delete row.
2. Edit row?

# ex2

write a function that recieve id and movies array.
the function will return the mached movie.

# ex3

## Delete row

1. button - delete - v
2. event - onclick - v
3. fucntion - handler
4. remove ?

# Homework

1. Total result, present the total items in the table
2. clicking the image in the table will increase the height and width
3. Delete button on top - clicking on the delete will remove all the selected items bulk deletion

# Higher order functions

- map
- filter - based on the boolean creteria return all the elements which answer the boolean creteria (new array)
- find - based on the boolean creteria return the first element which answer the boolean creteria (object-ref)
- findIndex - based on the boolean creteria return the first index which answer the boolean creteria (number)

# ex

- Create a Button - clicking the button will present the avarage of the movies ranks

1. add button avarage rank ( you can put this button under statistics header)
2. click the button will trigger the rank calculation
3. print the avarage ( Rank avarage is: 4.5)

## Steps for solution

1. Button v
2. Container - for result v
3. Event - onclick v
4. calcAvgFunction v

- state.movies
- for loop
- avg
- sum

# Homework

1. implement search operation on the movies - filter

- when user searching a movie name ( by inserting string in the relevant input)
- present the relevant moveis which match exactly to the input search

2. get movie duration avarage ( with button )
3. get the hottest movies ( highest rank ) wirte the names ( with button )

## LocalStorage

- https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- localStorage.setItem("key","value")
- const value = localStorage.getItem("key")
- localStorage.clear()
- localStorage.removeItem("key")

# lets set our site theme

- #888585
- white

# Add new Class - another color to the theme configuration

how to?
add new class!

# Support local storage in our movies managmeent

- save the movies in local storage
- when application is loaded - show the movies
- when movie is removed - update the ls
- when movie is added - update the ls

# Homework

צור תיבת טקסט שכל הוספה של אות מחליפה את הצבע של הטקסט בין 2 צבעים קבועים.
לאותה תיבת טקסט הוסף תכונה שכשאר עוזבים את התיבה עולה הודעה עם התוכן שלה.

# GIT

1. select a folder
2. run `git init`
3. run `git config --global user.name <USER>`
4. run `git config --global user.email <EMAIL>`
5. run `git add <FileName>`
6. run `git commit -m <CommitMessage>`
