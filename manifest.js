module.exports = {
  name: "Extension Name",
  description: "Extension description here",
  version: "1.0",
  manifest_version: 3,
  background: {
    service_worker: "background.js"
  },
  content_scripts: [
    {
      "matches": ["https://*.steamcommunity.com/*/inventory/"],
      "js": ["handle.js"]
    }
  ],
  permissions: ["storage", "activeTab", "declarativeContent"],
  action: {
    default_popup: "index.html"
  },
}