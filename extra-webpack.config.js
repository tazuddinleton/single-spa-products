const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  // Feel free to modify this webpack config however you'd like to
  singleSpaWebpackConfig.externals.push(...[
    '@kaz/auth',
    '@kaz/utility',
    '@angular/core',
    '@angular/animations',
    '@angular/common',
    '@angular/forms',
    '@angular/platform-browser',
    '@angular/router',
  ]);
  singleSpaWebpackConfig.output.libraryTarget = 'system';
  return singleSpaWebpackConfig;
};
