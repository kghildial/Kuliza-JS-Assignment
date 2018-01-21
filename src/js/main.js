(() => {

  
  const allGenders = document.querySelector('#all');
  const male = document.querySelector('#male');
  const female = document.querySelector('#female');
  const idInput = document.querySelector('#id-input');
  const searchBtn = document.querySelector('#search-btn');
  const detailsList = document.querySelector('.details__list');

  let gender = 'All';
  let searchID = '';

  let src = '../json/customer-data.json';

  let xhr = new XMLHttpRequest();

  xhr.open('GET', src);

  xhr.responseType = 'json';

  xhr.send();

  xhr.onload = () => {
    let data = xhr.response;

    let newData = createNewData(data);

    populateList(newData, gender);

    allGenders.addEventListener('click', () => {
      gender = 'All';
      idInput.value = '';
      populateList(newData, gender, searchID);
    });

    male.addEventListener('click', () => {
      gender = 'Male';
      idInput.value = '';
      populateList(newData, gender, searchID);
    });

    female.addEventListener('click', () => {
      gender = 'Female';
      idInput.value = '';
      populateList(newData, gender, searchID);
    });

    searchBtn.addEventListener('click', () => {
      searchID = idInput.value;
      if(searchID === '') {
        console.log('No ID Entered!');
      }
      else if (Number(searchID) > 1000) {
        console.log('Invalid ID!');
      }
      else {
        searchList(newData, searchID);
      }
    });

    const listItems = document.querySelectorAll('.list tr');

    listItems.forEach((item) => {
      item.addEventListener('click', () => {
        const itemID = item.childNodes[0].textContent;
        active(item);
        detailsList.innerHTML = '';
        displayDetails(newData, itemID);
      });
    });

  }


})();
