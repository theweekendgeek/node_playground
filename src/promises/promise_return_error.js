function thisFunctionRejects() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('test'))
        }, 400)
    })
}


async function thisFunctionCatches() {
    try {
        const a = await thisFunctionRejects()
        console.log(a);
    } catch (e) {
        console.log(e);

        // this line will return the error itself and not throw/reject the promise returned from this function
        return e
    }
}

// returns an error
const b = await thisFunctionCatches()

console.log(b);