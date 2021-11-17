export const domIsReady = async () => {
  return new Promise((resolve, reject) => {
    window.addEventListener('DOMContentLoaded', () => resolve({}))
  })
}

export const getTabId = async () => {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({ active: true, currentWindow: true}, tabs => {
      if (!tabs && tabs.length < 1) {
        return reject({})
      }

      resolve(tabs[0].id)
    })
  })
}

export const sendMessage = async (tabId, message) => {
  return new Promise((resolve, reject) => {
    chrome.tabs.sendMessage(tabId, message, response => {
      if(!response) {
        return reject({})
      }

      resolve(response)
    })
  })
}
