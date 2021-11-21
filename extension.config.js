module.exports = {
  //config to generate your manifest json
  manifest: {
    name: 'Extension Name',
    description: 'Extension description here',
    version: '1.0',
    manifest_version: 3,
    background: {
      service_worker: 'background.js'
    },
    content_scripts: [
      {
        matches: [
          'https://*.google.com/*',
          'https://*.google.com.br/*'
        ],
        js: ['content.js']
      }
    ],
    permissions: ['storage', 'activeTab', 'declarativeContent'],
    action: {
      default_popup: 'index.html'
    },
  },
  //setting your main,background,content or whatever files
  entry: {
    main: './src/main.js',
    background: './src/background.js',
    content: './src/handle-dom.js'
  }
}