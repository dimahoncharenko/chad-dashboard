export const sleep = (value = 5000) =>
  new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, value)
  })
