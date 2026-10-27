document.querySelectorAll('#autoYear').forEach(el=> el.textContent = new Date().getFullYear());
function login(e){e.preventDefault();const u=document.getElementById('username').value.trim();const p=document.getElementById('password').value.trim();const err=document.getElementById('loginError');if((u==='admin'&&p==='0794745885')||(u==='martin'&&p==='0700549487')||(u==='admin'&&p==='Martin2026')){localStorage.setItem('martin_logged','true');window.location.href='dashboard.html';}else{err.style.display='block';err.textContent='Wrong. Try admin / 0794745885';}}
function checkAuth(){if(!localStorage.getItem('martin_logged')){window.location.href='login.html';}}
function logout(){localStorage.removeItem('martin_logged');window.location.href='login.html';}
