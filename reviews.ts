let reviews: number[] = [8.5,7,9,6.9,9];
let total: number =0;
for(let i=0;i<reviews.length;i++)
{
    console.log(reviews[i]);
    total+=reviews[i];
}
let average:number =total/reviews.length;
console.log(average);