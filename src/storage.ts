export const useLocalStorage = <T>(name: string) => {
  const set = (value: T) => {
    localStorage.setItem(name, JSON.stringify(value))
  }
  const get = () => {
    const value = localStorage.getItem(name)
    return value ? JSON.parse(value) : null as T | null
  }
  const del = () => {
    localStorage.removeItem(name)
  }
  return { set, get, del }
}
