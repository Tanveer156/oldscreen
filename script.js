// Mobile Menu Toggle
function toggleMobileMenu() {
  const navMenu = document.getElementById('navMenu');
  navMenu.classList.toggle('active');
}

// Login Modal Functions
function openLoginModal() {
  document.getElementById('loginModal').style.display = 'block';
}

function closeLoginModal() {
  document.getElementById('loginModal').style.display = 'none';
}

// Signup Modal Functions
function openSignupModal() {
  document.getElementById('signupModal').style.display = 'block';
}

function closeSignupModal() {
  document.getElementById('signupModal').style.display = 'none';
}

// Switch between modals
function switchToSignup() {
  closeLoginModal();
  openSignupModal();
}

function switchToLogin() {
  closeSignupModal();
  openLoginModal();
}

// Close modal when clicking outside
window.onclick = function(event) {
  const loginModal = document.getElementById('loginModal');
  const signupModal = document.getElementById('signupModal');
  
  if (event.target == loginModal) {
    closeLoginModal();
  }
  if (event.target == signupModal) {
    closeSignupModal();
  }
}

// IMPROVED SEARCH FUNCTION
function performSearch() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase().trim();
  
  if (searchInput === '') {
    alert('Please enter a search term');
    return;
  }
  
  // Complete list of all movies with their review pages
  const movies = [
    {name: 'Casablanca', keywords: ['casablanca', 'bogart', 'bergman', '1942'], url: 'review.html'},
    {name: 'Vertigo', keywords: ['vertigo', 'hitchcock', 'stewart', 'novak', '1958'], url: 'list1.html'},
    {name: 'Gone with the Wind', keywords: ['gone', 'wind', 'vivien', 'leigh', 'clark', 'gable', '1939'], url: 'list2.html'},
    {name: 'Roman Holiday', keywords: ['roman', 'holiday', 'audrey', 'hepburn', 'peck', '1953'], url: 'list3.html'},
    {name: "Singin' in the Rain", keywords: ['singin', 'rain', 'gene', 'kelly', 'musical', '1952'], url: 'list4.html'}
  ];
  
  // Search through movie names and keywords
  const results = movies.filter(movie => {
    // Check if search matches movie name
    if (movie.name.toLowerCase().includes(searchInput)) {
      return true;
    }
    // Check if search matches any keyword
    return movie.keywords.some(keyword => keyword.includes(searchInput));
  });
  
  if (results.length > 0) {
    // Redirect to first match
    window.location.href = results[0].url;
  } else {
    alert('No movies found matching "' + searchInput + '". Try searching for:\n- Casablanca\n- Vertigo\n- Gone with the Wind\n- Roman Holiday\n- Singin\' in the Rain');
  }
}

// Allow Enter key to search
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        performSearch();
      }
    });
  }
});

// Dropdown toggle for mobile
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        this.parentElement.classList.toggle('active');
      }
    });
  });
});
