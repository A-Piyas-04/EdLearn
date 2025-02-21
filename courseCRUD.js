/**
 * EduLearn Course Management using localStorage
 * Each course is stored as an object with:
 * - id: Unique identifier
 * - title: Course title
 * - description: Course description
 */

// ------------------------- CREATE -------------------------
/**
 * Adds a new course to localStorage.
 * @param {Object} course - The course object (e.g., { title, description })
 */
function createCourse(course) {
    // Retrieve existing courses or initialize an empty array
    let courses = JSON.parse(localStorage.getItem('courses')) || [];
    // Generate a unique id for the course (using current timestamp)
    course.id = Date.now();
    // Add the new course to the courses array
    courses.push(course);
    // Save updated courses back to localStorage
    localStorage.setItem('courses', JSON.stringify(courses));
  }
  
  // ------------------------- READ -------------------------
  /**
   * Retrieves the list of courses from localStorage.
   * @returns {Array} Array of course objects
   */
  function readCourses() {
    return JSON.parse(localStorage.getItem('courses')) || [];
  }
  
  // ------------------------- UPDATE -------------------------
  /**
   * Updates an existing course in localStorage.
   * @param {number} courseId - The unique ID of the course to update
   * @param {Object} updatedData - The updated data (e.g., { title, description })
   */
  function updateCourse(courseId, updatedData) {
    let courses = readCourses();
    courses = courses.map(course => {
      if (course.id === courseId) {
        return { ...course, ...updatedData };
      }
      return course;
    });
    localStorage.setItem('courses', JSON.stringify(courses));
  }
  
  // ------------------------- DELETE -------------------------
  /**
   * Deletes a course from localStorage.
   * @param {number} courseId - The unique ID of the course to delete
   */
  function deleteCourse(courseId) {
    let courses = readCourses();
    courses = courses.filter(course => course.id !== courseId);
    localStorage.setItem('courses', JSON.stringify(courses));
  }
  
  // ------------------------- DISPLAY -------------------------
  /**
   * Renders the list of courses into a specified container element.
   * @param {string} containerId - The ID of the container to render courses in.
   */
  function renderCourses(containerId) {
    const courses = readCourses();
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Container with id "${containerId}" not found.`);
      return;
    }
    // Clear existing content
    container.innerHTML = '';
    // Loop through each course and create a card element
    courses.forEach(course => {
      const courseElement = document.createElement('div');
      courseElement.className = 'course-card';
      courseElement.innerHTML = `
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <button onclick="updateCourse(${course.id}, { title: 'Updated Title', description: 'Updated Description' }); renderCourses('courseList');">Update</button>
        <button onclick="deleteCourse(${course.id}); renderCourses('courseList');">Delete</button>
      `;
      container.appendChild(courseElement);
    });
  }
  
  // ------------------------- FORM HANDLING -------------------------
  document.addEventListener('DOMContentLoaded', function() {
    // Render courses on page load
    renderCourses('courseList');
  
    // Handle the Add Course Form submission
    const addCourseForm = document.getElementById('addCourseForm');
    addCourseForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const title = document.getElementById('courseTitle').value.trim();
      const description = document.getElementById('courseDesc').value.trim();
      
      if (title === '' || description === '') {
        alert('Please fill in all fields.');
        return;
      }
      
      // Create a new course object and add it to localStorage
      createCourse({ title, description });
      // Clear form fields
      addCourseForm.reset();
      // Re-render the course list
      renderCourses('courseList');
    });
  });
  