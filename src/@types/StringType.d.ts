export {}

declare global {
  interface String {
    getPx: () => number
  }
}
