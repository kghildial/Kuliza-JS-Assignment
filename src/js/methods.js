function createNewData(data) {

    let newData = {};
    
    data.forEach((obj) => {
        let id = {};
        for(let key in obj) {
            if(key === 'id') {
                id = newData[obj[key]] = {};
            }
            else if(key === 'bitcoin') {
                continue;
            }
            else {
                id[key] = obj[key];
            }
        }
    });

    return newData;
}