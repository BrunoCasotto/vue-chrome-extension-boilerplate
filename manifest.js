module.exports = {
  name: "Csgo Seller tools",
  description: "Tool to sell csgo items",
  version: "1.0",
  manifest_version: 3,
  background: {
    service_worker: "main.js"
  },
  permissions: ["storage"],
  action: {
    default_popup: "index.html"
  },
}