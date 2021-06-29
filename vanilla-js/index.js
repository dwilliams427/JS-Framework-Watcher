console.log("Welcome to JS Framework Watcher");
/* global axios */

function getStarData() {
  function getVueData() {
    return axios.get("https://api.github.com/repos/vuejs/vue");
  }
  function getAngularData() {
    return axios.get("https://api.github.com/repos/angular/angular.js");
  }
  function getEmberData() {
    return axios.get("https://api.github.com/repos/emberjs/ember.js");
  }
  function getSvelteData() {
    return axios.get("https://api.github.com/repos/sveltejs/svelte");
  }
  function getReactData() {
    return axios.get("https://api.github.com/repos/facebook/react");
  }
  // gets data using previously declared functions(get requests)
  Promise.all([getVueData(), getAngularData(), getEmberData(), getSvelteData(), getReactData()]).then(function (
    results
  ) {
    // star data
    let vueStars = results[0]["data"]["stargazers_count"];
    let angularStars = results[1]["data"]["stargazers_count"];
    let emberStars = results[2]["data"]["stargazers_count"];
    let svelteStars = results[3]["data"]["stargazers_count"];
    let reactStars = results[4]["data"]["stargazers_count"];
    // fork data
    let vueForks = results[0]["data"]["forks"];
    let angularForks = results[1]["data"]["forks"];
    let emberForks = results[2]["data"]["forks"];
    let svelteForks = results[3]["data"]["forks"];
    let reactForks = results[4]["data"]["forks"];
    // watchers data
    let vueWatchers = results[0]["data"]["watchers_count"];
    let angularWatchers = results[1]["data"]["watchers_count"];
    let emberWatchers = results[2]["data"]["watchers_count"];
    let svelteWatchers = results[3]["data"]["watchers_count"];
    let reactWatchers = results[4]["data"]["watchers_count"];

    function createStarsChart() {
      var ctx = document.getElementById("starsChart").getContext("2d");
      var starsChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Vue", "Angular", "Ember.js", "Svelte.js", "React"],
          datasets: [
            {
              label: "# Stars on Github",
              data: [vueStars, angularStars, emberStars, svelteStars, reactStars],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: "Total Repo Stars",
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    function createForksChart() {
      var ctx = document.getElementById("forksChart").getContext("2d");
      var forksChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Vue", "Angular", "Ember.js", "Svelte.js", "React"],
          datasets: [
            {
              label: "# Forks on Github",
              data: [vueForks, angularForks, emberForks, svelteForks, reactForks],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: "Total Repo Forks",
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    function createWatchersChart() {
      var ctx = document.getElementById("watchersChart").getContext("2d");
      var watchersChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Vue", "Angular", "Ember.js", "Svelte.js", "React"],
          datasets: [
            {
              label: "# Watchers on Github",
              data: [vueWatchers, angularWatchers, emberWatchers, svelteWatchers, reactWatchers],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: "Total Repo Watchers",
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
    createStarsChart();
    createForksChart();
    createWatchersChart();
  });
}
getStarData();