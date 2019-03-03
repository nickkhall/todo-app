export const getPrettyDate = (timestamp) => {
  if (timestamp) {
    let date = new Date(timestamp * 1000).toString();
    date = date.substring(0, date.indexOf('GMT') - 1);

    return date;
  }
  return 'Unknown Date';
};
