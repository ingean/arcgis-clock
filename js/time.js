function showTime() {
  let date = new Date();
  let options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  let locale = 'no-NB'

  let h = date.getHours(); // 0 - 23
  let m = date.getMinutes(); // 0 - 59
  let s = date.getSeconds(); // 0 - 59
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  let time = h + ":" + m + ":" + s;  
  let datestring = date.toLocaleDateString(locale, options);

  document.getElementById("timeDisplay").innerText = time;
  document.getElementById("timeDisplay").textContent = time;
  document.getElementById("dateDisplay").innerText = datestring;
  document.getElementById("dateDisplay").textContent = datestring;

  setTimeout(showTime, 1000);  
}

showTime();

function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

function getURLParams() {
  let qs = window.location.search;
  return new URLSearchParams(qs);
}

window.onload = function() {
  let params = getURLParams();

  if(params.has('theme')) {
    setTheme(params.get('theme'))
  } else {
    setTheme('theme-light');
  }

  setCustomColors(params); //Override themes
}

function setCustomColors(params) {
  for (const entry of params.entries()) {
    if (entry[0] === 'bgColor') {
      document.getElementById('container').style.backgroundColor = `#${entry[1]}`;
    } else {
      document.getElementById(entry[0]).style.color = `#${entry[1]}`;
    }  
  }
}