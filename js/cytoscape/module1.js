const isServerEnvironment = window.location.protocol === 'http:' || window.location.protocol === 'https:';

if (isServerEnvironment) {
    console.log("Module 1 loaded.");
}

export function module1() {
    console.log("Module 1 function executed.");
}
