// Javascript Nuggets - Promises

// async await
// consume/use promises

// Pending, Rejected, FulFilled

const value = 2;

const promise = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 3);
  console.log(random);
  if (random === value) {
    resolve("you guessed correctly");
  } else {
    reject("wrong number");
  }
});

console.log(promise);

promise.then((data) => console.log(data)).catch((err) => console.log(err));


// EXAMPLE OF PROMISES
//  Javascript Nuggets - Promises Example
// .first - after 1s first red;
// .second - after 3s second blue; 4s
// .third - after 2s third green; 6s
// IN SEQUENCE !!!!

const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
  console.log(addColor(1000, '.first', 'red'))
})

function addColor(time, selector, color) {
  const element = document.querySelector(selector)
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color
        // resolve(data)
      }, time)
    } else {
      reject(`There is no such element : "${selector}"`)
    }
  })
}