// Array of quotes
const quotes = [
  "Plan. Explore. Share.",
  "Discover. Capture. Inspire.",
  "Organize. Document. Connect.",
  "Prepare. Experience. Engage.",
  "Chart. Photograph. Bond.",
  "Schedule. Snap. Share."
];

let currentQuoteIndex = 0;
const quoteElement = document.getElementById("quote");

// Function to display each quote one by one with typing effect
function typeQuote(index = 0) {
  const currentQuote = quotes[currentQuoteIndex];

  if (index < currentQuote.length) {
    quoteElement.textContent += currentQuote.charAt(index);
    setTimeout(() => typeQuote(index + 1), 100); // Adjust speed (100ms) for typing
  } else {
    setTimeout(() => {
      quoteElement.textContent = ""; // Clear the quote before displaying the next one
      currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length; // Move to the next quote
      typeQuote(); // Recursively call to type the next quote
    }, 2000); // Pause for 2 seconds before the next quote
  }
}

// Start typing the first quote when DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
  typeQuote();
});


document.addEventListener("DOMContentLoaded", function() {
  const navbarLinks = document.querySelectorAll(".nav-link"); // Select all navbar links

  navbarLinks.forEach(link => {
      link.addEventListener("click", function(event) {
          // Remove active class from all links
          navbarLinks.forEach(link => link.classList.remove("active"));

          // Add active class to the clicked link
          event.target.classList.add("active");

          // Handle smooth scrolling for "Search"
          if (event.target.id === "search") {
              let targetDiv = document.getElementById("description");
              let navbarHeight = document.querySelector(".navbar").offsetHeight;
              let extraOffset = 20;

              let targetPosition = targetDiv.getBoundingClientRect().top + window.scrollY - navbarHeight - extraOffset;
              window.scrollTo({
                  top: targetPosition,
                  behavior: "smooth"
              });
          }
      });
  });
});

// for search scrolling effect
document.getElementById("search").addEventListener("click", function() {
  let targetDiv = document.getElementById("description-div"); // Target div
  let navbarHeight = document.querySelector(".navbar").offsetHeight; // Navbar height
  let extraOffset = 20; // Extra space below navbar

  // Get the target position and adjust for navbar height
  let targetPosition = targetDiv.getBoundingClientRect().top + window.scrollY - navbarHeight - extraOffset;

  window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
  });
});

document.getElementById("about").addEventListener("click", function() {
  let targetDiv = document.getElementById("about-div"); // Target div
  let navbarHeight = document.querySelector(".navbar").offsetHeight; // Navbar height
  let extraOffset = 20; // Extra space below navbar

  // Get the target position and adjust for navbar height
  let targetPosition = targetDiv.getBoundingClientRect().top + window.scrollY - navbarHeight - extraOffset;

  window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
  });
});
