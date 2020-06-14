const toCamel = (s: any): string => {
  return s.replace(/([-_][a-z])/gi, ($1: any) => {
    return $1
      .toUpperCase()
      .replace("-", "")
      .replace("_", "");
  });
};

const isArray = function(a: any) {
  return Array.isArray(a);
};

const isObjectAndNotDate = (o: any) => {
  return (
    o === Object(o) &&
    !isArray(o) &&
    typeof o !== "function" &&
    !(o instanceof Date)
  );
};

const keysToCamel = (o: any) => {
  if (isObjectAndNotDate(o)) {
    const n: { [key: string]: any } = {};

    Object.keys(o).forEach((k: any) => {
      n[toCamel(k)] = keysToCamel(o[k]);
    });

    return n;
  } else if (isArray(o)) {
    return o.map((i: any) => {
      return keysToCamel(i);
    });
  }

  return o;
};

export default keysToCamel;
