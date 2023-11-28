export const convertTime = (unix_timestamp) => {
  var date = new Date(unix_timestamp * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  var formattedTime = hours + ':' + minutes.substr(-2);
  return formattedTime
}

export const getData = async url => {
  const response = await fetch(url)
  const result = await response.json();
  if (response.ok) {
    return result
  } else {
    throw new Error("Error...")
  }
}

