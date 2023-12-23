window.addEventListener('load', function() {
      var links = document.querySelectorAll('a.link');
      links.forEach(function(link) {
        link.addEventListener('click', confirmAndRedirect);
      });
});

function confirmAndRedirect(event) {
      // Display the confirmation dialog
      var userConfirmation = window.confirm("Are you sure that you want to leave the current site?");

      if (!userConfirmation) {
        event.preventDefault();
      }
}
