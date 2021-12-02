export function getFromLocalStorage(key) {
    return localStorage.getItem(key);
}

export function setToLocalStorage(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
}

export function removeFromLocalStorage(key) {
    return localStorage.removeItem(key);
}

export function clearLocalStorage() {
    return localStorage.clear();
}