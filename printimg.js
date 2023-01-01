const json = {
  html: "<div class='test'>Hello, world!</div>",
  css: ".test { background-color: green; }"
};

const username = '5db65a3e-5f79-4c8a-a176-a89c83dafa7b';
const password = "073abfb9-13f7-4049-93d0-5883d3949efe";

const options = {
  method: 'POST',
  body: JSON.stringify(json),
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + btoa(username + ":" + password)
  }
}

fetch('https://hcti.io/v1/image', options)
  .then(res => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status);
    }
  })
  .then(data => {
    // Image URL is available here
    console.log(data.url)
  })
  .catch(err => console.error(err));
