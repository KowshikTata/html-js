var reviews = [8.5, 7, 9, 6.9, 9];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var average = total / reviews.length;
console.log(average);
