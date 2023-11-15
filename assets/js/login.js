function passwordVisibility() {
    var paswdLock = document.getElementById("loginPassword");
    let lock = document.getElementById('lock');
    let lockOpen = document.getElementById('lockOpen');
    if (paswdLock.type === "password") {
        lock.style.display = 'none';
        lockOpen.style.display = 'block';
        paswdLock.type = "text";
    } else {
        lockOpen.style.display = 'none';
        lock.style.display = 'block';
        paswdLock.type = "password";
    }
  }

  