function skillsMember() {
  const skills = document.querySelectorAll(".skills");
  for (let i = 0; i < skills.length; i++) {
    skills[i].addEventListener("click", function() {
      this.classList.toggle("active");
    });
  }
}