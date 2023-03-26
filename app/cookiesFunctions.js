import Cookies from 'js-cookie';

export function getCookieClientSide(key) {
  const cookieValue = Cookies.get(key);

  if (!cookieValue) {
    return undefined;
  }
  try {
    return JSON.parse(cookieValue);
  } catch (err) {
    return undefined;
  }
}

export function setCookie(key, value) {
  Cookies.set(key, JSON.stringify(value));
}

export function removeCookie(key) {
  Cookies.remove(key);
}
