export const getIdFromUrl = (url) => {
  const splitUrl = url.split('/');
  const id = splitUrl[splitUrl.length - 2];
  return Number(id);
};
