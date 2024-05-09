document.addEventListener("DOMContentLoaded", function() {
    const yesNoButtons = document.querySelectorAll('.yes-no-btn');
    const feedbackForm = document.getElementById('feedback-form');
    const previewBtn = document.getElementById('preview-btn');
    const closePreviewBtn = document.getElementById('close-preview');
    const previewModal = document.getElementById('preview-modal');
    const previewName = document.getElementById('preview-name');
    const previewEmail = document.getElementById('preview-email');
    const previewFirstTime = document.getElementById('preview-first-time');
    const previewInformative = document.getElementById('preview-informative');
    const previewRecommend = document.getElementById('preview-recommend');
    const previewSatisfied = document.getElementById('preview-satisfied');
    const previewRating = document.getElementById('preview-rating');
    const previewComment = document.getElementById('preview-comment');
    const submitBtn = document.getElementById('submit-btn');
  
    // Handle Yes/No Radio Button Selections
    yesNoButtons.forEach(button => {
      button.addEventListener('click', function() {
        const parentDiv = this.parentElement;
        const inputHidden = parentDiv.querySelector('input[type="hidden"]'); // Assuming a hidden field stores the selection
        if (inputHidden) {
          inputHidden.value = this.value;
        }
        yesNoButtons.forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');
      });
    });
  
    // Preview Button Functionality
    previewBtn.addEventListener('click', function() {
      previewName.textContent = `Name: ${document.getElementById('name').value}`;
      previewEmail.textContent = `Email: ${document.getElementById('email').value}`;
  
      // Handle Radio Button Selections (assuming selections are stored in checked radio buttons)
      previewFirstTime.textContent = `Was this your first time visiting? ${document.querySelector('input[name="first-time"]:checked') ? document.querySelector('input[name="first-time"]:checked').value : 'Not provided'}`;
      previewInformative.textContent = `Are you to suggest our service? ${document.querySelector('input[name="suggest"]:checked') ? document.querySelector('input[name="suggest"]:checked').value : 'Not provided'}`;
      previewRecommend.textContent = `Were you able to complete your tasks easily? ${document.querySelector('input[name="Easy"]:checked') ? document.querySelector('input[name="Easy"]:checked').value : 'Not provided'}`;
      previewSatisfied.textContent = `Are you satisfied with our service? ${document.querySelector('input[name="satisfied"]:checked') ? document.querySelector('input[name="satisfied"]:checked').value : 'Not provided'}`;
  
      previewRating.textContent = `Rating: ${document.querySelector('input[name="rating"]:checked') ? document.querySelector('input[name="rating"]:checked').value : 'Not provided'}`;
      previewComment.textContent = `Comment: ${document.getElementById('comment').value}`;
      previewModal.classList.remove('hidden');
    });
  
    // Close Preview Button Functionality
    closePreviewBtn.addEventListener('click', function() {
      previewModal.classList.add('hidden');
    });
  
    // Form Submission (basic example, replace with validation and server-side interaction)
    feedbackForm.addEventListener('submit', function(event) {
      event.preventDefault();
      alert('Form submitted!');
    });
  
    // Submit Button Functionality (submits the form when clicked)
    submitBtn.addEventListener('click', function() {
      feedbackForm.submit();
    });
  });