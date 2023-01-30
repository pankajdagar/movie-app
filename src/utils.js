export function debounce(func, wait) {
  let timeout = null;
  return function (...args) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

export function getRowFromGrid(index, element) {
  const colCount = getComputedStyle(element).gridTemplateColumns.split(' ').length;
  const rowPosition = Math.floor(index / colCount);
  return rowPosition;
}
