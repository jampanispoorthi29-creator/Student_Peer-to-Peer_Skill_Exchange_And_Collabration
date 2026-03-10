// Perform page navigation
const navItems = document.querySelectorAll('.nav-item');
const pages = {
  home: document.getElementById('homePage'),
  login: document.getElementById('loginPage'),
  register: document.getElementById('registerPage'),
  browse: document.getElementById('browsePage'),
  chat: document.getElementById('chatPage')
};

// Navigation functions
function showPage(pageId) {
  Object.values(pages).forEach(p => p.classList.remove('active-page'));
  pages[pageId].classList.add('active-page');
  navItems.forEach(tab => tab.classList.remove('active'));
  document.querySelector(`.nav-item[data-page="${pageId}"]`).classList.add('active');
}

// Navigation event listeners
navItems.forEach(tab => {
  tab.addEventListener('click', () => showPage(tab.dataset.page));
});

document.getElementById('homeToBrowse').addEventListener('click', () => showPage('browse'));
document.getElementById('homeToRegister').addEventListener('click', () => showPage('register'));
document.getElementById('switchToRegister').addEventListener('click', () => showPage('register'));
document.getElementById('switchToLogin').addEventListener('click', () => showPage('login'));

// Auth events
document.getElementById('fakeLogin').addEventListener('click', (e) => {
  e.preventDefault(); 
  alert('demo login as Jamie'); 
  showPage('browse');
});

document.getElementById('fakeRegister').addEventListener('click', (e) => {
  e.preventDefault(); 
  alert('demo registered'); 
  showPage('browse');
});

// Skills management
let mySkills = ['JavaScript', 'React', 'Node.js', 'Python'];

function renderMySkills() {
  const mySkillsList = document.getElementById('mySkillsList');
  mySkillsList.innerHTML = '';
  
  mySkills.forEach(skill => {
    const div = document.createElement('div');
    div.className = 'my-skill-item';
    div.innerHTML = `${skill} <i class="fas fa-times remove-skill" data-skill="${skill}"></i>`;
    mySkillsList.appendChild(div);
  });

  // Attach remove events
  document.querySelectorAll('.remove-skill').forEach(icon => {
    icon.addEventListener('click', (e) => {
      const skillToRemove = e.target.dataset.skill;
      mySkills = mySkills.filter(s => s !== skillToRemove);
      renderMySkills();
    });
  });
}

document.getElementById('addSkillBtn').addEventListener('click', () => {
  const newSkill = document.getElementById('newSkillInput').value.trim();
  if (newSkill && !mySkills.includes(newSkill)) {
    mySkills.push(newSkill);
    renderMySkills();
    document.getElementById('newSkillInput').value = '';
  }
});

// Expert data and rendering
const experts = [ /* Same expert array as in original file */ ];

// Other functionality (expert browser rendering, chat system)
// Paste all your original JavaScript from <script> block here

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  renderMySkills();
  renderExperts();
});
