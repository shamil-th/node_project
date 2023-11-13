var empreg = document.getElementById('regmdl')
empreg.addEventListener('click', (e) => {
    e.preventDefault()

    var username = document.getElementById('userName').value;
    var password = document.getElementById('loginPassword').value;

    var newreg = {
        username: username,
        password: password
    }

    console.log(newreg)
    if (!username || !password) {

        let alertbox = document.getElementById('alertbox');

        alertbox.classList.remove('hide');
        alertbox.classList.add('show');

        alertbox.innerHTML = `<p class="alertsession signuptext">The fields can't be empty</p>`;

        let usernameoutline = document.getElementById('userName');
        let passwordoutline = document.getElementById('loginPassword');

        usernameoutline.classList.remove('removeborder');
        passwordoutline.classList.remove('removeborder');
        usernameoutline.classList.add('showborder');
        passwordoutline.classList.add('showborder');

        return false;
    }
    else {
        fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newreg)
        })

            .then((res) => {
                if (res.ok) {
                    alert('Account created successfully');

                    // Redirect to the login page
                    window.location.href = "/login";

                } else {
                    return res.json().then((err) => {

                        console.log('user already exists');

                        let alertbox = document.getElementById('alertbox');

                        alertbox.classList.remove('hide');
                        alertbox.classList.add('show');

                        alertbox.innerHTML = `<p class="alertsession signuptext">User already exists</p>`;

                        let usernameoutline = document.getElementById('userName');
                        let passwordoutline = document.getElementById('loginPassword');

                        usernameoutline.classList.remove('removeborder');
                        passwordoutline.classList.remove('removeborder');
                        usernameoutline.classList.add('showborder');
                        passwordoutline.classList.add('showborder');
                    });
                }

            })


    }

})

function removeborders() {
    let alertbox = document.getElementById('alertbox');

    alertbox.classList.add('hide');
    alertbox.classList.remove('show');

    alertbox.innerHTML = "";

    let usernameoutline = document.getElementById('userName');
    let passwordoutline = document.getElementById('loginPassword');

    usernameoutline.classList.add('removeborder')
    passwordoutline.classList.add('removeborder')
    usernameoutline.classList.remove('showborder')
    passwordoutline.classList.remove('showborder')
}

