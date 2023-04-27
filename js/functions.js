const manipulateText = () => {
  const textArea = document.getElementById('textArea');
  const toLowerCase = document.getElementById('toLowerCase');
  const toUpperCase = document.getElementById('toUpperCase');
  const toCapitalCase = document.getElementById('toCapitalCase');
  const toKebabCase = document.getElementById('toKebabCase');
  const toCamelCase = document.getElementById('toCamelCase');
  const toSnakeCase = document.getElementById('toSnakeCase');
  const toNormalCase = document.getElementById('toNormalCase');
  const deleteAllText = document.getElementById('deleteAllText');
  const copyAllText = document.getElementById('copy-text');
  const darkMode = document.getElementById('dark-mode');
  const copyModal = document.getElementById('copy-modal');
  const closeCopyModal = document.getElementById('close-copy-modal');

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

  toKebabCase.addEventListener('click', () => {
    textArea.value = convertToKebabCase(textArea.value);
  });

  toCamelCase.addEventListener('click', () => {
    textArea.value = convertToCamelCase(textArea.value);
  });

  toSnakeCase.addEventListener('click', () => {
    textArea.value = convertToSnakeCase(textArea.value);
  });

  toNormalCase.addEventListener('click', () => {
    textArea.value = convertToNormalCase(textArea.value);
  });

  deleteAllText.addEventListener('click', () => {
    textArea.value = '';
    textArea.focus();
  });

  copyAllText.addEventListener('click', () => {
    tippy('#copy-text', {
      delay: 0,
      content: 'Texto copiado 🎉',
      trigger: 'click',
      placement: 'bottom',
      theme: 'light',
      arrow: true,
      animation: 'scale',
      duration: 500
    });
    textArea.select();
    // if (!navigator.clipboard) {
    //   document.execCommand('copy');
    // } else {
    //   navigator.clipboard.writeText(textArea.value.trim());
    // }
    navigator.clipboard.writeText(textArea.value.trim());
  });

  darkMode.addEventListener('click', () => {
    darkMode.checked ? document.body.classList.remove('dark-theme') : document.body.classList.add('dark-theme');
  });

  closeCopyModal.addEventListener('click', () => {
    // copyModal.classList.remove('is-active');
    // copyModal.classList.remove('is-clipped');
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
// toggleDarkTheme(prefersDarkScheme.matches);
toggleDarkTheme(prefersDarkScheme.matches);


function toggleDarkTheme(bool) {
  const darkMode = document.getElementById('dark-mode');
  if (bool) {
    document.body.classList.add("dark-theme");
    darkMode.checked = false;
  } else {
    document.body.classList.remove("dark-theme");
    darkMode.checked = true;
  }

  // if (!darkMode.checked) {
  //   document.body.classList.add('dark-theme');
  // } else {
  //   document.body.classList.remove('dark-theme');
  // }
}

function convertToKebabCase(str) {
  return str.replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c ? '-' + c.toLowerCase() : '').toLowerCase();
}

function convertToCamelCase(str) {
  return str.replace(/[^a-zA-Z]+(.)/g, (_, c) => c ? c.toUpperCase() : '');
}

function convertToSnakeCase(str) {
  return str.replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c ? '_' + c.toLowerCase() : '').toLowerCase();
}

function convertToNormalCase(str) {
  return str.replace(/[-_]+(.)/g, (_, c) => c ? ' ' + c.toUpperCase() : '').toLowerCase();
}

export {
  manipulateText,
  getActualDate
};