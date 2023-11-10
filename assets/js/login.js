// const { application } = require("express");


// function register() {
//     document.getElementById('regmdl').style.top = "13%";
//     // document.getElementById('logbtn').style.display="none";
// }

// ============================================================

var empreg = document.getElementById('signup')
empreg.addEventListener('click', (e) => {
    e.preventDefault()

    // alert("entering")

    var username = document.getElementById('userName').value;
    // var email = document.getElementById('email').value;
    var password = document.getElementById('loginPassword').value;



    var newreg = {
        username: username,
        password: password
    }

    console.log(newreg)
    if (!username || !password) {
        alert('the fields are empty')
        // document.getElementById('torf').style.border = "2px solid red";
        // document.getElementById('torf').style.color = 'red';
        // document.getElementById('torf').style.right = '0%';
        // document.getElementById('torf').innerHTML = "some fields are mandatory";
        return false;
    }
    else {

        fetch('http://localhost:3000/api/employees', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newreg)
        })

            .then((res) => {
                if (res.ok) {
                    // return res.json();
                    // document.getElementById('torf').style.right = '0%';
                    console.log("res not ok");
                }
                else {
                    return res.json().then((err) => {

                        // document.getElementById('torf').style.border = "2px solid red";
                        // document.getElementById('torf').style.color = 'red';
                        // document.getElementById('torf').style.right = '0%';
                        // document.getElementById('torf').innerHTML = "user already exist";
                        console.log('user already exist');

                    })

                }
            })


    }

})


// // =======================================================