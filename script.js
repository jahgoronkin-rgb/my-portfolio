const recommendationInput = document.getElementById("new_recommendation");
const recommendationList = document.getElementById("all_recommendations");

function addRecommendation() {
  const text = recommendationInput?.value.trim();

  if (!text) {
    recommendationInput?.focus();
    alert("Please enter a recommendation before submitting.");
    return;
  }

  const item = document.createElement("div");
  item.className = "recommendation";

  const quoteOpen = document.createElement("span");
  quoteOpen.textContent = "“";

  const quoteClose = document.createElement("span");
  quoteClose.textContent = "”";

  const body = document.createElement("p");
  body.textContent = text;

  item.appendChild(quoteOpen);
  item.appendChild(body);
  item.appendChild(quoteClose);

  recommendationList.appendChild(item);
  recommendationInput.value = "";

  showPopup(true);
}

function showPopup(show) {
  const popup = document.getElementById("popup");
  if (!popup) return;

  popup.style.visibility = show ? "visible" : "hidden";
  popup.setAttribute("aria-hidden", String(!show));
}
