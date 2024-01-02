let counter = 0;

function updateCounter() {
  console.log(counter++);

  setTimeout(updateCounter, 1000);
}

updateCounter();
