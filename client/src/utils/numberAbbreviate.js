module.exports = num => {
  if(num >= 1000000000000) {
    return `${(num/1000000000000).toFixed(1)} T`
  }
  if(num >= 1000000000) {
    return `${(num/1000000000).toFixed(1)} B`
  }
  if(num >= 1000000) {
    return `${(num/1000000).toFixed(1)} M`
  }
  if(num>=1000) {
    return `${(num/1000).toFixed(1)} K`
  }
  else {
    return num;
  }
};