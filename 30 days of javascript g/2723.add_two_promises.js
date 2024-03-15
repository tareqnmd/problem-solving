var addTwoPromises = async function (promise1, promise2) {
    // const [value1, value2] = await Promise.all([promise1, promise2]);
    // return value1 + value2;
    return await promise1 + await promise2
};

const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));
addTwoPromises(promise1, promise2);
