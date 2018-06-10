export default (text = 'hello world123') => {
  const element = document.createElement('div');
  element.innerHTML = text;
  return element;
};
