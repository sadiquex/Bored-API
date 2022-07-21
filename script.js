// http://www.boredapi.com/api/activity/

const storage = document.querySelector('.output')

async function doSomething() {
    const response = await fetch('https://www.boredapi.com/api/activity/', {mode: “cors”})
    
    // console.log(response.json())

    // got json data here
      .then(response => response.json())
    //  manipulate json data for what we want
      .then(data => {return data.activity});


    // store the data into html
    storage.innerText = response;
      
}

doSomething()
