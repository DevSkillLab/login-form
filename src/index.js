const passwordInput = document.querySelector('input[type="password"]');
const showButton = document.querySelector(".show-btn");

const show = `<svg width="24" height="24" viewBox="0 0 25 25" fill="none" stroke="black">
<path d="M12.2494 11.1639C13.9954 11.1639 15.4114 12.5789 15.4114 14.3259C15.4114 16.0719 13.9954 17.4869 12.2494 17.4869C10.5034 17.4869 9.08838 16.0719 9.08838 14.3259" stroke-width="1.5" stroke-linecap="square"/>
<path d="M21.5 14.3251C19.539 10.1971 16.056 7.72107 12.248 7.72107H12.252C8.444 7.72107 4.961 10.1971 3 14.3251" stroke-width="1.5" stroke-linecap="square"/>
</svg>`;

const hide = `<svg width="24" height="24" viewBox="0 0 25 25" fill="none" stroke="black">
<path d="M21.5 7.93359C19.539 12.0616 16.056 14.5386 12.248 14.5386H12.252C8.444 14.5386 4.961 12.0616 3 7.93359" stroke-width="1.5" stroke-linecap="square"/>
<path d="M20.4275 13.3745L20.9515 13.9135" stroke-width="1.5" stroke-linecap="square"/>
<path d="M5.58121 11.8022L3.47021 13.9132" stroke-width="1.5" stroke-linecap="square"/>
<path d="M15.4274 17.1195L14.5824 14.2095" stroke-width="1.5" stroke-linecap="square"/>
<path d="M8.99293 17.1194L9.13793 16.4294" stroke-width="1.5" stroke-linecap="square"/>
</svg>`;

showButton.innerHTML = show;

const handleClick = () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showButton.innerHTML = hide;
  } else {
    passwordInput.type = "password";
    showButton.innerHTML = show;
  }
};

showButton.addEventListener("click", handleClick);
