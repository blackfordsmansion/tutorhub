function setupCurriculumSlider(curriculum) {
  const slider = document.getElementById('gradeSlider');
  const label = document.getElementById('gradeLabel');
  const curriculumDisplay = document.getElementById('curriculumText');


  // Change max value of slider to reflect K-8
  slider.max = 8;


  function updateCurriculum() {
    const grade = parseInt(slider.value, 10);
    let displayGrade = grade === 0 ? 'Kindergarten' : `Grade ${grade}`;
    label.textContent = displayGrade;
    curriculumDisplay.textContent = curriculum[grade];
  }


  slider.addEventListener('input', updateCurriculum);


  // Initialize display
  updateCurriculum();
}