const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");
const resultText = document.getElementById("resultText");

function updateResultText(count) {
  resultText.textContent = `Showing ${count} cities`;
}

updateResultText(cards.length);

searchInput.addEventListener("input", function () {
  const searchValue = searchInput.value.toLowerCase().trim();
  let visibleCount = 0;

  cards.forEach(function (card) {
    const cityName = card.querySelector("h3").textContent.toLowerCase();

    if (cityName.includes(searchValue)) {
      card.style.display = "flex";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  if (visibleCount === 0) {
    resultText.textContent = "No city found";
  } else {
    updateResultText(visibleCount);
  }
});

