const browsers = {
    CHROME: 'chrome',
    FF: 'firefox',
    EDGE: 'edge',
    SAFARI: 'safari'
}

let browser = browsers.CHROME

function execute() {
    switch (browser) {
        case browsers.CHROME:
            console.log('execute chrome');
            break;

        case browsers.FF:
            console.log('execute firefox');
            break;

        case browsers.SAFARI:
            console.log('execute safari');
            break;

        case browsers.EDGE:
            console.log('execute edge');
            break;

    }
}

console.log(execute());





