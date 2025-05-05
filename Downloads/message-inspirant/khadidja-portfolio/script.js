// Show the "Back to Top" button when scrolling down
window.onscroll = function () {
    const button = document.getElementById("backToTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  };
  
  // Scroll smoothly to the top
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  