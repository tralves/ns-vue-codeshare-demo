'use strict'

function getExtensions(platform) {
  return ['js', 'css', 'scss', 'vue'].reduce((exts, ext) => {
    exts.push(`.${platform}.${ext}`)
    if (platformIsNative(platform)) exts.push(`.native.${ext}`)
    exts.push(`.${ext}`)
    return exts
  }, [])
}

function platformIsNative(platform) {
  return ['ios', 'android'].includes(platform)
}

module.exports = {
  getExtensions: getExtensions,
  platformIsNative: platformIsNative,
}
