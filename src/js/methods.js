const list = document.querySelector('.list');


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

function clearList() {
    list.innerHTML = '<tr><th class="table-head">ID</th><th class="table-head">Name</th><th class="table-head">Gender</th><th class="table-head">Email</th></tr>';
}

function searchList(data, searchID) {
    clearList();

    for(let id in data) {
        if(searchID === id) {
            print(data, id);
            break;
        }
    }

    fadeIn();
}

function populateList(data, gender, searchID) {
    clearList();

    for(let id in data) {

        if(gender === 'All') {
            print(data, id);
        }
        else if(data[id]['gender'] === gender){
            print(data, id);
        }
        
    }

    fadeIn();
}

function print(data, id) {

    let tr = document.createElement('tr');
    var td = document.createElement('td');
    td.textContent = id;
     tr.appendChild(td);
    for(let key in data[id]) {
        if(key === 'first_name' || key === 'email') {
            var td = document.createElement('td');
        }
        if(key === 'first_name') {
            td.textContent = data[id][key];
         }
        if(key === 'last_name') {
            td.textContent += ` ${data[id][key]}`;
        }
        else if(key == 'email') {
            td.textContent = data[id]['gender'];
            tr.appendChild(td);
            td = document.createElement('td');
            td.textContent = data[id][key];
        }
        tr.appendChild(td);
    }
    list.appendChild(tr);
}

function displayDetails(data, itemID) {
    const detailsList = document.querySelector('.details__list');
    for(let id in data) {
        if(id === itemID) {
            for(key in data[id]) {
                let li = document.createElement('li');
                li.textContent = `${key} : ${data[id][key]}`;
                detailsList.appendChild(li);
            }
        }
    }
}

function fadeIn() {
    const listItems = document.querySelectorAll('.list td');

    const items = Array.prototype.slice.call(listItems);

    items.forEach((item) => {
        setTimeout(() => {
            item.style.opacity = 1;
        }, 80*items.indexOf(item));
    });
}