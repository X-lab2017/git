function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}
try {
  fetch('http://api.kfcoding.com/api/practice/trains/competition', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: getCookie('token')
    },
    method: 'POST',
    body: JSON.stringify({repo: 'https://github.com/openx-lab/git.git'})
  }).then(resp => resp.json())
    .then(data => {
      return fetch('http://api.kfcoding.com/api/practice/trains/competition/end', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: getCookie('token')
        },
        method: 'PUT',
        body: JSON.stringify({id: data.data.id})
      })
    })
} catch (e) {
  console.log(e)
}

