document.getElementById("myButton").onclick = function() {
  document.getElementById("demo").innerText = "Tu as cliqué ! 🚀";
};
const menuItems = document.querySelectorAll('.menu > ul > li > a');

menuItems.forEach(item => {
  item.addEventListener('click', function(e) {
    const dropdown = item.nextElementSibling;
    if (dropdown && dropdown.classList.contains('dropdown')) {
      e.preventDefault(); // empêche le lien # de défiler
      dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
    }
  });
});
