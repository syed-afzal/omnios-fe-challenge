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

export const storage = {
  prefix: 'omnios',
  timeSign: '|omnios|',
  setKey(key, value, time) {
    key = `${this.prefix}${key}`;
    time = time ? new Date(time).getTime() : Date.now() + 24 * 60 * 60 * 1000 * 30;
    localStorage.setItem(key, `${value}${this.timeSign}${time}`);
  },
  getKey(key) {
    key = `${this.prefix}${key}`;
    let value = localStorage.getItem(key);
    if (value) {
      const index = value.indexOf(this.timeSign);
      const time = +value.slice(index + this.timeSign.length);
      if (time > Date.now()) {
        value = value.slice(0, index);
      } else {
        value = null;
        localStorage.removeItem(key);
      }
    }
    return value;
  },
};
