import platform from 'platform'

export const useGetPlatform = () => {
  const isMobile =
    platform?.manufacturer === 'Gooogle' ||
    platform.manufacturer === 'Apple' ||
    platform.os?.family === 'Android'

  return {
    isMobile,
    ...platform,
  }
}
