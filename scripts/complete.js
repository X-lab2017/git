function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

fetch('http://api.kfcoding.com/api/practice/trains/competition/end', {
  headers: {
    'Content-Type': 'application/json',
    Authorization: Cookies.get('token')
  },
  method: 'PUT',
  body: JSON.stringify({id: localStorage.getItem('comp_id')})
}).then(resp => resp.json());
