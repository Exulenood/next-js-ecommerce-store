import Cookies from 'js-cookie';

export function getTestCookie(key) {
  const testCookieValue = Cookies.get(key);

  if (!testCookieValue) {
    return undefined;
  }
  try {
    return JSON.parse(testCookieValue);
  } catch (err) {
    return undefined;
  }
}

export function setTestCookie(key, value) {
  Cookies.set(key, JSON.stringify(value));
}

export function removeTestCookie(key) {
  Cookies.remove(key);
}
