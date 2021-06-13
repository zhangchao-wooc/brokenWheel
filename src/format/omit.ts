/**
 * OmitFormat // 省略显示字符串
 */
const OmitFormat = function (data:number | string, argv:Array<number>, omitString = '*'):string {
  const text = data && String(data)
  const len = argv[2] ?  argv[2] : text.length - argv[0] - argv[1]
  let str = ''
  for(let i = 0; i < len; i++) {
      str += omitString
  }
  return text.slice(0,argv[0]) + str + text.slice(-argv[1])
}

export default OmitFormat