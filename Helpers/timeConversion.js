function secondsToHms(d) {
    const seconds = parseFloat(d, 10);
    let h = Math.floor(seconds / 3600);
    let m = Math.floor(seconds % 3600 / 60);
    let s = Math.floor(seconds % 3600 % 60);

    if (h < 10) h = '0' + h;
    if (m < 10) m = '0' + m;
    if (s < 10) s = '0' + s;

    return h + ':' + m + ':' + s;
}

function minutesToHms(d) {
    const minutes = parseFloat(d, 10);
    let h = Math.floor(minutes / 60);
    let m =  Math.floor((minutes - ((h * 3600)) / 60));
    let s = Math.floor((minutes * 60) - (h * 3600) - (m * 60));

    if (h < 10) h = '0' + h;
    if (m < 10) m = '0' + m;
    if (s < 10) s = '0' + s;
    
    return h + ':' + m + ':' + s; 
}

const timeConversion = (duration, type) => {
    switch(type) {
        case 'seconds':
            return secondsToHms(duration);
        case 'minutes':
            return minutesToHms(duration);
    }
}

console.log(timeConversion(1200, 'seconds'))