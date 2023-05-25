export function removeProperty(obj, propertyName) {
  let newObj = { ...obj };
  delete newObj[propertyName];
  return newObj;
}
