const domain = 'vzdrazil.com';
const emailString = ('info' + '@' + domain);

const createLink = document.createElement('a');
const createLinkText = document.createTextNode(emailString);

createLink.setAttribute('href', `mailto:${emailString}`);
createLink.appendChild(createLinkText);

const emailElement = document.getElementById('email-mailto');
emailElement.appendChild(createLink);