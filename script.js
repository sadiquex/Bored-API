// http://www.boredapi.com/api/activity/

async function doSomething() {
    const response = await fetch('http://www.boredapi.com/api/activity/')
      .then(response => response.json())
      .then(data => console.log(data.activity));

}

doSomething()