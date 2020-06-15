export default (pattern: string): string =>
  pattern.replace(/[x]/g, () => {
    return (Math.floor(Math.random() * 10) + 1).toString();
  });
