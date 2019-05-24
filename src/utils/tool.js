
export const format = (value) => {
  if (!value) return 

  const reg = new RegExp(/\\n/, 'g')

  return value.replace(reg, '<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;')
}
