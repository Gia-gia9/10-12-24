// task1
function randompromice(taskName) {
    const delay = Math.random() * 5000;
    const outcome = Math.random()<0.5;
    return new Promise ((resolve, reject) => 
        setTimeout(() => {
            if (outcome) {
                resolve(`${taskName}, resolve`)
            } else {
                reject(`${taskName}, reject`)
            }
        } ,delay));

    }

Promise.race([randompromice("Task 1"),randompromice("Task 2"),randompromice("Task 3 ")])
  .then(result => console.log("complete", result))
  .catch(error => console.log("incomplite", error));

// task2

const randomdelay = Math.random()*3000;
function task1() {
    return new Promise (resolve => setTimeout(() => resolve ("task 1 completed"), randomdelay));
}
function task2() {
    return new Promise (resolve => setTimeout(() => resolve ("task 2 completed"), randomdelay));
}
function task3() {
    return new Promise (resolve => setTimeout(() => resolve ("task 3 completed"), randomdelay));
}

Promise.all([task1(),task2(),task3()])
  .then(results => console.log(results))
  .catch(error => console.log(error))


// task3

function randomTaks(taskName2) {
    const delay = Math.random() * 3000;
    return new Promise (resolve => setTimeout(() => resolve (`${taskName2} completed`) ,delay ));

}

Promise.race([randomTaks("Task 1"),randomTaks("Task 2")])
  .then(result => console.log("first complete", result))
  .catch(error => console.log(error));


// task4

function promises() {
    const delay = Math.random() * 4000; 
    const outcome = Math.random() < 0.5; 
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (outcome) {
                resolve('resolved');
            } else {
                reject('rejected');
            }
        }, delay);
    });
}

const promiseArray = []; 

for (let i = 0; i < 5; i++) {
    promiseArray.push(promises());
}

Promise.allSettled(promiseArray)
    .then(results => {
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(`Promise ${index + 1}: ${result.value}`);
            } else {
                console.log(`Promise ${index + 1}: ${result.reason}`);
            }
        });
    });
