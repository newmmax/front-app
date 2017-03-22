
import 'jquery'
export function configure(aurelia) {

  let materialize = 'materialize-css'; // ONLY when using the "npm" option above
  return aurelia.loader.loadModule(materialize).then(() => {
    aurelia.use
      .standardConfiguration()
      .developmentLogging()
      // Install and configure the plugin
      .plugin('aurelia-materialize-bridge', bridge => bridge.useAll())


    aurelia.start().then(() => aurelia.setRoot())
  })
}
