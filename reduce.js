/* var numbers = [1, 2, 3, 4, 5],
    total = 0;
     
numbers.forEach(function (number) {
    total += number;
}); */

/* 
var total = [1, 2, 3, 4, 5].reduce(function (previous, current, index,usedArray) {
    var val = previous + current;
    console.log("The previous value is " + previous + 
                "; the current value is " + current +
                ", and the current iteration is " + (index + 1));
    //console.log(usedArray);
    
    return val;
}, 0);
console.log("The loop is done, and the final value is " + total + "."); 
*/

var faceBookPosts = [
    { day: 'Saturday', likes:20 },
    { day: 'Sunday', likes:75 },
    { day: 'Monday', likes:124 },
    { day: 'Tuesday', likes:211 },
    { day: 'Wednesday', likes:520 },
    { day: 'Thrusday', likes:712 },
    { day: 'Friday', likes:1011 }
  ];

totalLikes = 0;
/* 
for (var i = 0, max = faceBookPosts.length; i < max; i++) {
    totalLikes += faceBookPosts[i].likes;
}
 */

/* 
faceBookPosts.forEach(function (faceBookPost) {
    totalLikes += faceBookPost.likes;
});  
*/

/* var totalLikes = faceBookPosts.reduce(function (total, post,index) {
    console.log("The previous value is " + total + 
                "; the current value is " + post.likes +
                ", and the current iteration is " + (index + 1));
    return total + post.likes;
  }, 0);

  console.log(totalLikes); */

/*   
//Implementation
  var reduce = function (array, callback, initial) {
    var accumulator = initial || 0;
     
    array.forEach(function (element) {
       accumulator = callback(accumulator, element);
    });
     
    return accumulator;
};
  
var totalLikes = reduce([1, 2, 3, 4, 5], function (previous,current) {
    return previous+=current;
  },0); 

console.log(totalLikes);
 */

 //Putting It Together: Map, Filter, Reduce, and Chainability


 //total likes from weekend

/* let weekendTotalLikes = faceBookPosts
                        .filter(faceBookPost => faceBookPost.day=="Saturday" || faceBookPost.day=="Sunday")
                        .map(filteredPosts=>filteredPosts.likes)
                        .reduce((prev,curr)=> prev+curr);
console.log(weekendTotalLikes); */


//Let's say I want to do the following:

//1. Collect two days' worth of tasks.
//2. Convert the task durations to hours, instead of minutes.
//3. Filter out everything that took two hours or more.
//4. Sum it all up.
//5. Multiply the result by a per-hour rate for billing.
//6. Output a formatted dollar amount.

var monday = [
    {
        'name'     : 'Write a tutorial',
        'duration' : 180
    },
    {
        'name'     : 'Some web development',
        'duration' : 120
    }
];

var tuesday = [
    {
        'name'     : 'Keep writing that tutorial',
        'duration' : 240
    },
    {
        'name'     : 'Some more web development',
        'duration' : 180
    },
    {
        'name'     : 'A whole lot of nothing',
        'duration'  : 240
    }
];
 
var tasks = [monday, tuesday];

var result = tasks.reduce(function (accumulator, current) {
    return accumulator.concat(current);
})
.map(function (task) {
    return (task.duration / 60);
})
.filter(function (duration) {
    return duration >= 2;
})
.map(function (duration) {
    return duration * 25;
})
.reduce(function (accumulator, current) {
    return [(+accumulator) + (+current)];
})
.map(function (dollar_amount) {
    return '$' + dollar_amount.toFixed(2);
})
.reduce(function (formatted_dollar_amount) {
    return formatted_dollar_amount;
});
;
console.log(result);

