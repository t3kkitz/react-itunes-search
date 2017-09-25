export function getAPIurl(query, media) {
  return `https://itunes.apple.com/search?media=${media || 'all'}&term=${query.split(' ').join('+')}`;
}
