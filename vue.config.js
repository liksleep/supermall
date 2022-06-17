module.exports = {
    transpileDependencies: true,
    configurewebpack:{
        resolve:{
          alias:{
              'assets':'/assets',
              'common':'/common',
              'components':'/components',
              'network':'/network',
              'views':'/views',
          }
        }
    }
  }

