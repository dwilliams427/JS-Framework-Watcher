console.log("Welcome to JS Framework Watcher");


//FETCH vue
var vueUrl = "https://api.github.com/repos/vuejs/vue";
var angularUrl = "https://api.github.com/repos/angular/angular.js"
var emberUrl = "https://api.github.com/repos/emberjs/ember.js"
var svelteUrl = "https://api.github.com/repos/sveltejs/svelte"
var reactrUrl = "https://api.github.com/repos/facebook/react"
// var forkData = [];




async function getData(url) {
  await fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    console.log(`Forks: ${data.forks}`)
    forks = data.forks
    // forkData.push(data.forks);
    document.getElementById("vueResults").innerHTML = forks;
    console.log(`Stars: ${data.stargazers_count}`)
    stars = data.stargazers_count
    console.log(`Watchers: ${data.watchers}`)
    watchers = data.watchers
    return data
  });
}

const vueDataBlob = getData(vueUrl);
console.log("vue data blob", vueDataBlob);
// getData(angularUrl);
// getData(emberUrl);
// getData(svelteUrl);
// getData(reactrUrl);

// console.log(`fork data array: ${forkData}`);
//CHART
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Bollocks',
            data: [12, 19],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

//AXIOS
// const searchQueryURL = "https://api.github.com/repos/vuejs/vue";


//   axios
//     .get(searchQueryURL)
//     .then(function (response) {
//       // handle success
//       console.log(response.data.forks);
//       var vueForks = response.data.forks;
//       vueForks = document.getElementById("results").innerHTML;
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     });

// var result = document.getElementById('results');


// function getRequest(url) {
//   axios.get(url)
//   .then(function (response){
//     console.log(response);
//     result = response;
//     // var repoData = {
//     //   watchers: response["data"]["watchers_count"],
//     //   forks: response["data"]["forks"],
//     //   stars: response["data"]["stargazers_count"]
//     // };
//   })
//   return result ;
// }


// var vueData = getRequest("https://api/.github.com/repos/vuejs/vue");
// console.log(vueData);