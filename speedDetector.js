function speedDetector(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const maxDemeritPoints = 12;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

        if (demeritPoints <= maxDemeritPoints) {
            console.log(`Points: ${demeritPoints}`);
        } else {
            console.log("License suspended");
        }
    }
}

const carSpeed = 80;
speedDetector(carSpeed);
