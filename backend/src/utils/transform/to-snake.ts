const camelToSnake = (key: string) => {
  return key
    .replace(/[\w]([A-Z])/g, function(m) {
      return m[0] + "_" + m[1];
    })
    .toLowerCase();
};

export default (arr: any): any =>
  Object.entries(arr)
    .map(([key, value]) => {
      return { [camelToSnake(key)]: value };
    })
    .reduce((result, current) => {
      return Object.assign(result, current);
    }, {});
