

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

function searchList(data, searchID) {
    const list = document.querySelector('.list');
    list.innerHTML = '<tr><th class="table-head">ID</th><th class="table-head">Name</th><th class="table-head">Gender</th></tr>';
    
    for(let id in data) {
        if(searchID === id) {
            print(list, data, id);
            break;
        }
    }
}

function populateList(data, gender, searchID) {
    const list = document.querySelector('.list');
    list.innerHTML = '<tr><th class="table-head">ID</th><th class="table-head">Name</th><th class="table-head">Gender</th></tr>';

    for(let id in data) {

        if(gender === 'All') {
            print(list, data, id);
        }
        else if(data[id]['gender'] === gender){
            print(list, data, id);
        }
        
    }
}

function print(list, data, id) {

    let tr = document.createElement('tr');
    var td = document.createElement('td');
    td.textContent = id;
     tr.appendChild(td);
    for(let key in data[id]) {
        if(key === 'first_name' || key === 'gender') {
            var td = document.createElement('td');
        }
        if(key === 'first_name') {
            td.textContent = data[id][key];
         }
        if(key === 'last_name') {
            td.textContent += ` ${data[id][key]}`;
        }
        else if(key === 'gender') {
            td.textContent = data[id][key];
        }
        tr.appendChild(td);
    }
    list.appendChild(tr);
}