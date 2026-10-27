// LIVE CLOCK + AUTO DATE - Professional
function updateClock(){
  const now = new Date();
  const optionsDate = { weekday:'long', year:'numeric', month:'long', day:'numeric' };
  const optionsTime = { hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:true };
  const dateStr = now.toLocaleDateString('en-KE', optionsDate);
  const timeStr = now.toLocaleTimeString('en-KE', optionsTime);
  const year = now.getFullYear();
  const lastUpdate = now.toLocaleString('en-KE');
  
  document.querySelectorAll('#liveDate').forEach(el=> el.textContent = dateStr);
  document.querySelectorAll('#liveClock').forEach(el=> el.textContent = timeStr);
  document.querySelectorAll('#liveYear').forEach(el=> el.textContent = year);
  document.querySelectorAll('#lastUpdated').forEach(el=> el.textContent = lastUpdate);
  
  // Auto copyright year
  document.querySelectorAll('#autoYear').forEach(el=> el.textContent = year);
}
setInterval(updateClock, 1000);
updateClock();

// LOGIN LOGIC - Professional
function login(e){
  e.preventDefault();
  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value.trim();
  const err = document.getElementById('loginError');
  // Demo credentials: admin / 0794745885 or martin / 0700549487
  if((user==='admin' && pass==='0794745885') || (user==='martin' && pass==='0700549487') || (user==='admin' && pass==='Martin2026')){
    localStorage.setItem('martin_logged','true');
    localStorage.setItem('login_time', new Date().toISOString());
    window.location.href='dashboard.html';
  }else{
    err.style.display='block';
    err.textContent='Wrong credentials. Try admin / 0794745885';
  }
}
function checkAuth(){
  if(!localStorage.getItem('martin_logged')){
    window.location.href='login.html';
  }
}
function logout(){
  localStorage.removeItem('martin_logged');
  window.location.href='login.html';
}
