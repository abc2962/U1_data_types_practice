/*
 * Prompt 1:
 *
 * Declare a variable called myFavoriteSong on one line and console.log the value
 * Then, using your Literals, console.log "my favorite song is..." with the song's value
 */
let myFavoriteSong = "hello"
console.log(myFavoriteSong)

/*
 * Prompt 2:
 *
 * Declare 3 variables using each of let, const, and var, then console.log each of them
 */
let myNameIs = "Muhammad Tariq"
console.log(myNameIs)
const whatIsYourName = "Jeremy"
console.log(whatIsYourName)
var howAreYou = `I am perfect!`
console.log(howAreYou)

/*
 * Prompt 3:
 *
 * Create a variable and assign a number to it. On a separate line for each, using console.log:
 *   - add a number to your variable
 *   - subtract a number from your variable
 *   - multiply your variable by 3
 *   - divide your variable by 7
 *   - calculate the remainder of dividing your variable by 2
 */
let myNumberis = 12
console.log(myNumberis +10)
console.log(myNumberis-5)
console.log(myNumberis*3)
console.log(myNumberis/7)
console.log(myNumberis/2)


/*
 * Prompt 4:
 *
 * Create a variable called firstName and assign it to a string of your first
 * name. Create a variable called lastName and assign it to a string of your
 * last name.
 *
 * Create a variable called fullName and use addition to combine your firstName
 * and lastName variables.
 * Run a console.log that says 'hello my name is..." with your fullName. 
 */
let myFirstName = "Muhammad"
let myLastName = "Tariq"
let fullName = "firstName"+"lastName"
console.log(`hello my first name is ${myFirstName} and my last name is ${myLastName}`)


/* Arrays */

// Create an array of Movies, then log the 2nd movie in your array
// Use your array methods to add a movie in to the Front of the array, then the Back of the Array, then to the 2nd index point of the array
let movies = ["jungle", "panda", "first blood", "Frozen"]

console.log(movies[1])
movies.unshift("freed")
console.log(movies)
movies.push("Superman")
console.log(movies)
movies.splice(1,0, "Spiderman")
console.log(movies)




/*
 *
 * Retrieve "Marty McFly" from each of the arrays below.
 */

let array1 = ['Marty Marion', 'Marty Feldman', 'Marty McFly', 'Marty Marion'];
let one = array1[2]
console.log(one)

let array2 = [
  ['Marty Feldman', 'Marty Marion'],
  ['Marty Stuart', 'Marty McFly'],
  ['Marty Jannetty', 'Marty Robbins']
]
let two = array2[1][1]
console.log(two)
let array3 = [
  ['Marty Feldman', ['Marty Marion']],
  ['Marty Stuart', ['Marty Janetty', ['Marty McFly'], 'Marty Robbins']]
];
let three = array3[1][1][1][0]
console.log(three)

/*
 *
 * Use the length of the array below to retrieve the second to last item.
 */

let array4 = ['a', 'b', 'c', 'd', 'e'];
let length = array4.length 
let index = array4.length-1
console.log(index)
console.log(array4[index-1])

/*
 *
 * Use the following arrays to answer the subprompts below.
 */

let thom = ['Thom', 1000, 'Christchurch'];
let karolin = ['Karolin', 16, 'New York'];
let kristyn = ['Kristyn', 5, 'Pittsburgh'];
let cathleen = ['Cathleen', 186, 'New York'];
thom.splice(0,1, "Tom")
console.log(thom)
karolin.splice(1,1, 17)
console.log(karolin)
cathleen.splice(2,1, "Gotham City")
console.log(cathleen)

// Cathleen decides that Thom can't be named "Thom" anymore. Remove "Thom" from
// the thom array and replace it with "Tom".

// Karolin just had her birthday; change Karolin's array to reflect her being
// a year older.

// Change Cathleen's hometown from New York to "Gotham City".

// Remove "Pittsburgh" from Kristyn's array and add "Oakland".