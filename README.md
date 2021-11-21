<p align="center"><a href="https://vuejs.org" target="_blank" rel="noopener noreferrer"><img width="100" src="https://vuejs.org/images/logo.png" alt="Vue logo"></a></p>

<h2 align="center">Vue Chrome Extension Boilerplate </h2>

<p>A vueJs boilerplate to create a chrome extension</p>

<h3> Main scripts <h3>
  
 ```bash
  $ npm run dev
  $ npm run build
 ```
  
  <h3> Configure your manifest </h3>
  <p>
    To configure extension manifest edit the file extension.config.js. <a target=”_blank” href="https://developer.chrome.com/docs/extensions/mv3/manifest/">see more.</a>
  </p>
  <p>Example:</p>
  
  ```javascript
  ...
    manifest: {
      name: 'Extension Name',
      description: 'Extension description here',
      version: '1.0',
      manifest_version: 3,
      background: {
        service_worker: 'background.js'
      },
      content_scripts: [],
      permissions: [],
      action: {
        default_popup: 'index.html'
      },
    }
  ...
  ```
  
  <p>
    To configure your source files edit the entry parameter on extension.config.js
  </p>
  <p>Example</p>
  
  ```javascript
  ...
    entry: {
      main: './src/main.js',
      background: './src/background.js',
      content: './src/handle-dom.js'
    }
  ...
  ```
  
  <h3> Test demo </h3>
  <h4>1) Clone the repository and run</h4>
  
  ```bash
    npm run dev
  ```
  
  <h4>2) Access extension chrome page</h4>
  
```
  chrome://inspect/#devices
```
  
  <h4>3) Load the extension on "load unpacked" button </h4>
  
  <h4>4) Select dist folder</h4>
  
  <h4>5) Access Google search page</h4>
  
![image](https://user-images.githubusercontent.com/15523068/142745900-4effb0dc-c51c-4a8c-afbe-7df63a55f29a.png)
![image](https://user-images.githubusercontent.com/15523068/142745903-548f02bd-ce42-4a45-a753-1cc9db1847ce.png)

<a href="https://developer.chrome.com/docs/extensions/mv3/getstarted/#unpacked" target=”_blank”>For more informations</a>
