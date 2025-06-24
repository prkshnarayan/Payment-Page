document.addEventListener("DOMContentLoaded", function () {
  const cardOption = document.getElementById("cardOption");
  const upiOption = document.getElementById("upiOption");
  const cardSection = document.getElementById("card-section");
  const upiSection = document.getElementById("upi-section");

  function togglePaymentSections() {
    if (cardOption.checked) {
      cardSection.style.display = "block";
      upiSection.style.display = "none";
    } else {
      cardSection.style.display = "none";
      upiSection.style.display = "block";
    }
  }

  cardOption.addEventListener("change", togglePaymentSections);
  upiOption.addEventListener("change", togglePaymentSections);
  togglePaymentSections();
});
