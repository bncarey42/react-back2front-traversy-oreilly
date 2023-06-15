import { useState } from "react"

const useLocalStorage = (key: string, initialValue: any) => {
    const [localStorageValue, setLocalStorageValue] = useState(() => getLocalStorageValue(key, initialValue) )

    const setValue = (value: any) => {
        const valueToStore = value instanceof Function ? value(localStorageValue) : value
        setLocalStorageValue(value)
        localStorage.setItem(key, JSON.stringify(valueToStore))
    }

  return [localStorageValue, setValue]
}

const getLocalStorageValue = (key: string, initialValue: any) => {
    const itemFromStorage = localStorage.getItem(key);
    return itemFromStorage ? (typeof itemFromStorage === 'object' ? JSON.parse(itemFromStorage) : itemFromStorage) : initialValue;
}

export default useLocalStorage