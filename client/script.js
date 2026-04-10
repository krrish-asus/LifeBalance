async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    console.log(data);

    if (data.token) {
      localStorage.setItem('token', data.token);

      alert("Login Successful ✅");

      window.location.href = "dashboard.html";
    } else {
      alert(data.msg);
    }

  } catch (err) {
    console.error(err);
    alert("Error ❌");
  }
}