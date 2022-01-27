module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: "To Do App",
        appId: 'todo.app.com',
        win: {
          "target": [
            "nsis"
          ],
          icon: './src/assets/favicon.ico',
          "requestedExecutionLevel": "requireAdministrator"
        },
        "nsis": {
          "installerIcon": "./src/assets/favicon.ico",
          "uninstallerIcon": "./src/assets/uninstall.ico",
          "uninstallDisplayName": "CPU Monitor",
          "license": "license.txt",
          "oneClick": false,
          "allowToChangeInstallationDirectory": true
        }
      },
    },
  },
}