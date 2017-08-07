const wmSelect = document.querySelector(".wmSelect");
const userSelect = document.querySelector(".userSelect");

window.authentication_complete = function() {
	if (lightdm.is_authenticated) {
    lightdm.start_session(wmSelect.value);
	} else {
		document.querySelector(".password").classList.toggle("wiggle");
		document.querySelector(".password").classList.toggle("wrong");
		setTimeout(() => {
			document.querySelector(".password").classList.toggle("wiggle");
			document.querySelector(".password").classList.toggle("wrong");
		}, 1000);
		lightdm.cancel_authentication();
	}
};

window.addEventListener("load", () => {

  // clock stuff
  const timer = document.querySelector(".time");
  updateTime();
  setInterval(() => {
    updateTime();
  }, 1000);

  function updateTime() {
    timer.innerHTML = theme_utils.get_current_localized_time();
  }

  // get user data
  for (let user of lightdm.users) {
    const option = document.createElement("option");
    option.value = user.username;
    option.innerHTML = user.username;
		if (user.username === lightdm.select_user_hint) {
			option.selected = "";
		}
    userSelect.appendChild(option);
  }
  for (let session of lightdm.sessions) {
    const option = document.createElement("option");
    option.value = session.key;
    option.innerHTML = session.name;
		if (session.name === lightdm.default_session) {
			option.selected = "";
		}
    wmSelect.appendChild(option);
  }

  // event listeners
  document.querySelector(".power").addEventListener("click", (e) => {
    lightdm.shutdown();
  });

  document.querySelector(".reboot").addEventListener("click", (e) => {
    lightdm.restart();
  });

  userSelect.addEventListener("click", e => {
    const user = lightdm.users.find(x => x.username === e.target.value);
    for (let i = 0; i < wmSelect.options.length; i++) {
      if (wmSelect.options[i].value === user.session) {
        break;
      }
    }
    wmSelect.options.selectedIndex = i || 0;
  });

  document.querySelector(".form").addEventListener("submit", e => {
    const user = userSelect.value;
    const pass = document.querySelector(".password").value;
    lightdm.authenticate(user);
		lightdm.respond(pass);
  });
});
