const Utils = {

  // 是否是图片
  isImage(imgName = '') {
    return /\.(png|jpg|jpeg|gif|ico)$/.test(imgName)
  },

  // 文件是否是在规定的大小
  isSize(size, diffSize = 1) {
    return size / 1024 / 1024 < diffSize  //tslint:disable-line
  },

  extract(filterFn, mapFn) {
    return function process(col) {
      return col.filter(filterFn).map(mapFn)
    }
  },

}

export default Utils
