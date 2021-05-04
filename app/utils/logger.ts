export default (...args) => {
  args.forEach((arg) => {
    if (typeof arg === 'object') {
      try {
        console.log(JSON.stringify(arg, null, 2))
      } catch {
        console.log(arg)
      }
    } else {
      console.log(arg)
    }
  })
  console.log('- '.repeat(5))
}
