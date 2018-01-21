(() => {

  
  const allGenders = document.querySelector('#all');
  const male = document.querySelector('#male');
  const female = document.querySelector('#female');
  let gender = 'All';

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
      populateList(newData, gender);
    });

    male.addEventListener('click', () => {
      gender = 'Male';
      populateList(newData, gender);
    });

    female.addEventListener('click', () => {
      gender = 'Female';
      populateList(newData, gender);
    });

  }
})();
