/**
 * OmitFormat // 省略显示字符串
 */
const OmitFormat = (data: string, argv: number[], omitString = '*'): string => {
  const text = JSON.parse(JSON.stringify(data))
  const len = argv[2] !== null ? argv[2] : text.length - argv[0] - argv[1]
  let str = ''
  for (let i = 0; i < len; i++) {
    str += omitString
  }
  console.log(argv[1] > 0 ? text.slice(-argv[1]) : '')

  return text.slice(0, argv[0]) + str + (argv[1] > 0 ? text.slice(-argv[1]) : '')
}

export default OmitFormat
