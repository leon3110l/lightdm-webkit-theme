window.addEventListener("load", () => {
  const wmSelect = document.querySelector(".wmSelect");
  const userSelect = document.querySelector(".userSelect");

  // clock stuff
  const timer = document.querySelector(".time");
  updateTime();
  setInterval(() => {
    updateTime();
  }, 30000);

  function updateTime() {
    timer.innerHTML = theme_utils.get_current_localized_time();
  }

  // get user data
  for (let user in lightdm.users) {
    console.log(user);
    const option = document.createElement("option");
    option.value = user.username;
    option.innerHTML = user.username;
    userSelect.appendChild(option);
  }
  for (let session in lightdm.sessions) {
    console.log(session);
    const option = document.createElement("option");
    option.value = session.key;
    option.innerHTML = session.name;
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
    const pass = document.querySelector(".password").value;
  });
});
