function saveOptions(event) {
  browser.storage.local.set({
    wsAddress: document.querySelector('#wsAddress').value
  });
  event.preventDefault();
}

function restoreOptions() {
  browser.storage.local.get('wsAddress').then((options) => {
    if (options.wsAddress) {
      document.querySelector('#wsAddress').value = options.wsAddress;
    }
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector('form').addEventListener('submit', saveOptions);
