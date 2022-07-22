// http://www.boredapi.com/api/activity/
// https://jsonplaceholder.typicode.com/posts

const storage = document.querySelector('.output')
const category = document.querySelector(".category");
const button = document.getElementById("btn");

button.addEventListener('click', () => {
  location.reload()
})

async function doSomething() {
    const response = await fetch("https://www.boredapi.com/api/activity/", {
      mode: "cors",
    })
      // console.log(response.json())

      // got json data here
      .then((response) => response.json())
      //  manipulate json data for what we want
      .then((data) => {
        activity = data.activity;
        // category = data.type;
        // console.log(activity);
      });


    // store the data into html
    storage.innerText = activity;
      
}

doSomething()


// add a reload button
