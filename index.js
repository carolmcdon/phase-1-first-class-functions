function receivesAFunction(cb) {
    return cb()
}

function beforeAll() {
    console.log('This is a function')
}

function returnsANamedFunction() {
    return function beforeAll() {
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log('This is an unnamed function')
    }
}