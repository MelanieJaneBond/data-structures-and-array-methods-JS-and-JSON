//reduce
let numArr = [1, 2, 3, 4]
let total = numArr.reduce( (current, next) => {
    return current + next
})
//you can use it to concatenate strings, but he says it's clunky

let greetings = ["hello", "bonjour", "hola"]
let str = greetings.reduce( (curr, next) => {
    return curr + " " + next
    //or, write the last line as " return `${curr} ${next}` "
})
console.log(str)

let otherNums = [10, 2, 5]
let difference = otherNums.reduce( (curr, next) => {
    return curr - next
})
console.log(difference)

let dataArr = [
    {
      country: 'China',
      pop: 1409517397,
    },
    {
      country: 'India',
      pop: 1339180127,
    },
    {
      country: 'USA',
      pop: 324459463,
    },
    {
      country: 'Indonesia',
      pop: 263991379
    }
  ]

  let overcrowding = dataArr.reduce( (curr, next) => {
      return curr + next.pop
    }, 0)
    //in this case, the equation starts with the number we give it at the end "0"
    //it then goes to the first array object and takes the population key value out of it
    //next.pop accesses that value and it adds the populations from there.
    //after the first add, it doesn't need "curr" to be the population key inside the object.
    //This is a great way to reduce values inside an array of objects.

    