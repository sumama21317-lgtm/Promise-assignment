// 1. Simple Promise
let promise1 = new Promise((resolve, reject) => {
    resolve("Success");
});
promise1.then(result => console.log(result));

// 2. Rejected Promise
let promise2 = new Promise((resolve, reject) => {
    reject("Failed");
});
promise2.catch(error => console.log(error));

// 3. Promise with Condition
let promise4 = new Promise((resolve, reject) => {
    let age = 20;
    if (age >= 18) {
        resolve("Eligible");
    } else {
        reject("Not Eligible");
    }
});
promise4.then(result => console.log(result))
        .catch(error => console.log(error));

// 4. Promise with Number
let promise5 = new Promise((resolve, reject) => {
    let num = 10;
    if (num > 0) {
        resolve("Positive Number");
    } else {
        reject("Negative Number");
    }
});
promise5.then(result => console.log(result))
        .catch(error => console.log(error));

// 5. Promise.resolve()
Promise.resolve("Hello JavaScript")
    .then(result => console.log(result));

// 6. Promise.reject()
Promise.reject("Something Went Wrong")
    .catch(error => console.log(error));

// 1. Simple Promise Chaining
Promise.resolve(10)
    .then(result => {
        console.log(result);
        return result + 5;
    })
    .then(result => console.log(result));

// 2. Addition and Multiplication
Promise.resolve(10)
    .then(result => result + 20)
    .then(result => result * 2)
    .then(result => console.log(result));

// 3. Subtraction
Promise.resolve(100)
    .then(result => result - 20)
    .then(result => result - 10)
    .then(result => console.log(result));

// 4. Check Positive Number
Promise.resolve(25)
    .then(num => {
        return num > 0 ? "Positive" : "Negative";
    })
    .then(result => console.log(result));

// 5. Multiple Asynchronous Tasks
Promise.resolve()
    .then(() => {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log("First Task Completed");
                resolve();
            }, 1000);
        });
    })
    .then(() => {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log("Second Task Completed");
                resolve();
            }, 1000);
        });
    })
    .then(() => {
        console.log("All Tasks Completed");
    });