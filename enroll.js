// Example: Enroll in a course
function enrollNow() {
    alert("You have successfully enrolled in this course!");
}

// Example: Search functionality (simple)
document.getElementById("courseSearch").addEventListener("input", function() {
    let query = this.value.toLowerCase();
    let courses = document.querySelectorAll('.course-card');
    courses.forEach(function(course) {
        let courseTitle = course.querySelector('h3').textContent.toLowerCase();
        if (courseTitle.includes(query)) {
            course.style.display = "block";
        } else {
            course.style.display = "none";
        }
    });
});