const data = [
  {
    topic: "Food",
    title: "Wake Up and Smell the Coffee",
    price: "$0.90",
    color: "rgba(118,174, 170, 1)"
  },
  {
    topic: "Architecture",
    title: "The Brand New NASA Office",
    price: "$0.19",
    color: "rgba(23,35, 50, 1)"
  },
  {
    topic: "Travel",
    title: "Experience the Saharan Sands",
    price: "$2.29",
    color: "rgba(205,164, 133, 1)"
  },
  {
    topic: "Interior",
    title: "9 Air-Cleaning Plants Your Home Needs",
    price: "$0.09",
    color: "rgba(62,171, 201, 1)"
  },
  {
    topic: "Food",
    title: "One Month Sugar Detox",
    price: "$0.99",
    color: "rgba(254,156, 161, 1)"
  },
  {
    topic: "Photography",
    title: "Shooting Minimal Instagram Photos",
    price: "$0.29",
    color: "rgba(98,189, 254, 1)"
  }
];

const container = document.getElementById("content");

data.forEach((result, idx) => {
  //  card element creation
  const card = document.createElement("div");
  card.classList = "card-body";

  //  card content construction
  const content = `
    <div class="card" style="background-color: ${result.color}">
    <div class="card-header">
      <h3 class="topic">
      ${result.topic}
      </h3>
    </div>

    <div data-parent="#content">
      <div class="card-body">
              <h5 class="mb-0 title">
              ${result.title}
      </h5>
        <button class="btn btn-link buy-button">
      Read for ${result.price}
              </button>

      </div>
    </div>
  </div>
  `;

  // Append newyly created card element to the container
  container.innerHTML += content;
});





