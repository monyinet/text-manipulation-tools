const manipulateText = () => {
  const textArea = document.getElementById('textArea');
  const toLowerCase = document.getElementById('toLowerCase');
  const toUpperCase = document.getElementById('toUpperCase');
  const toCapitalCase = document.getElementById('toCapitalCase');
  const deleteAllText = document.getElementById('deleteAllText');
  const copyAllText = document.getElementById('copyAllText');

  textArea.addEventListener('keyup', () => {
    textArea.value = textArea.value;
  });

  toLowerCase.addEventListener('click', () => {
    textArea.value = textArea.value.toLowerCase();
  });

  toUpperCase.addEventListener('click', () => {
    textArea.value = textArea.value.toUpperCase();
  });

  toCapitalCase.addEventListener('click', () => {
    textArea.value = textArea.value.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  });

  deleteAllText.addEventListener('click', () => {
    textArea.value = '';
  });

  copyAllText.addEventListener('click', () => {
    textArea.select();
    if (!navigator.clipboard) {
      document.execCommand('copy');
    } else {
      navigator.clipboard.writeText(textArea.value.trim());
    }
  });
};

const getActualDate = () => {
  let newDate = new Date();
  let year = newDate.getFullYear();
  const setYear = document.getElementById('year');
  setYear.innerHTML = year;
}

//* Menu listeners
document.querySelector("a.ham-icon").addEventListener("click", (event) => {
  document.getElementById("sideNavigation").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
});
document.querySelector("a.close-btn").addEventListener("click", (event) => {
  document.getElementById("sideNavigation").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
});

//* Dark mode
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
if (prefersDarkScheme.matches) {
  document.body.classList.add("dark-theme");
} else {
  document.body.classList.remove("dark-theme");
}

function toKebabCase(str) {
  //* Modify this regex to replace all spaces and non alpha characters with dashes and lowercase the string
  return str.replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c ? '-' + c.toLowerCase() : '').toLowerCase();
}

function toCamelCase(str) {
  //* The first letter should be lowercase. Then remove all non alpha characters and capitalize the first letter of each word without spaces.  
  return str.replace(/[^a-zA-Z]+(.)/g, (_, c) => c ? c.toUpperCase() : '');
}

function toSnakeCase(str) {
  //* Modify this regex to replace all spaces and non alpha characters with underscores and lowercase the string
  return str.replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c ? '_' + c.toLowerCase() : '').toLowerCase();
}

function toNormalCase(str) {
  //* Modify this regex to replace all dashes and underscores with spaces and capitalize the first letter of each word
  return str.replace(/[-_]+(.)/g, (_, c) => c ? ' ' + c.toUpperCase() : '').toLowerCase();
}

export {
  manipulateText,
  getActualDate,
  toKebabCase,
  toCamelCase,
  toSnakeCase,
  toNormalCase
};