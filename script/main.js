document.addEventListener('DOMContentLoaded', function () {
    const modal = new bootstrap.Modal(document.getElementById('loginModal'));
    const loginForm = document.getElementById('loginForm');
    const logoutBtn = document.getElementById('logoutBtn');
    const errorMsg = document.getElementById('loginError');
  
    // Show login modal if not logged in
    if (localStorage.getItem('loggedIn') !== 'true') {
      modal.show();
    } else {
      logoutBtn.classList.remove('d-none');
    }
  
    // handle login form submit
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const user = document.getElementById('username').value.trim();
      const pass = document.getElementById('password').value.trim();
      if (!user || !pass) {
        errorMsg.style.display = 'block';
        return;
      }
      errorMsg.style.display = 'none';
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('username', user);
      modal.hide();
      logoutBtn.classList.remove('d-none');
    });
  
    // handle logout
    logoutBtn.addEventListener('click', function () {
      localStorage.clear();
      logoutBtn.classList.add('d-none');
      modal.show();
    });
  });