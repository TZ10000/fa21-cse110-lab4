for (const property in statistic) {
    if (property.startsWith('r') || statistic[property] % 2 == 1) {
        console.log(statistic[property]);
    }
}


