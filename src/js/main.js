(() => {

  let src = '../json/customer-data.json';

  let xhr = new XMLHttpRequest();

  xhr.open('GET', src);

  xhr.responseType = 'json';

  xhr.send();

  xhr.onload = () => {
    let data = xhr.response;

    createNewData(data);

  }
})();
