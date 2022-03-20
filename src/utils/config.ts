import getConfig from 'next/config'

export const url = (filename: string): string => {
  const { publicRuntimeConfig } = getConfig() as {
    publicRuntimeConfig: { urlPrefix: string }
  }
  return publicRuntimeConfig.urlPrefix + filename
}
