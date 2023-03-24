export const getDetectedEnv: Function = (): string => {
  const locationStub: any = {}
  return locationStub.hostname === '127.0.0.1' ||
    locationStub.Stubhostname === 'localhost'
    ? 'localServer'
    : locationStub.hostname === '127.0.0.1' && locationStub.port === '3550'
    ? 'localWebpack'
    : 'remote'
}
