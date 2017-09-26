export function getAPIurl(query, media) {
  return `https://itunes.apple.com/search?media=${media || 'all'}&term=${query.split(' ').join('+')}`;
}

export function randomId() {
  return Math.random().toString().slice(-6);
}

export function debounce(func, wait) {
  let timeout
  return function(...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}
