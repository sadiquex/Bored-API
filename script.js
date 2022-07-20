// http://www.boredapi.com/api/activity/

const storage = document.querySelector('.output')

async function doSomething() {
    const response = await fetch('http://www.boredapi.com/api/activity/')
    // console.log(response.json())

    // got json data here
      .then(response => response.json())
    //  manipulate json data for what we want
      .then(data => {return data.activity});

    // store the data into html
    storage.textContent = response;
      
}

doSomething()