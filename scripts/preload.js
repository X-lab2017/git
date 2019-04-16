function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

fetch('http://api.kfcoding.com/api/practice/trains/competition/begin', {
  headers: {
    'Content-Type': 'application/json',
    Authorization: getCookie('token')
  },
  method: 'POST',
  body: JSON.stringify({repo: 'https://github.com/openx-lab/git.git'})
}).then(resp => resp.json())
  .then(data => {
    if (data.data)
      localStorage.setItem('comp_id', data.data.id)
  });
