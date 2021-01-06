const timeConverter = (UNIX_timestamp) => {

  const addZero = (i) => {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  let a = new Date(UNIX_timestamp * 1000);
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let year = a.getFullYear();
  let month = addZero(months[a.getMonth()]);
  let date = addZero(a.getDate());
  let hour = addZero(a.getHours());
  let min = addZero(a.getMinutes());
  let sec = addZero(a.getSeconds());
  let time1 = `${date} ${month} ${year} la ora ${hour}:${min}:${sec}`;
  let time2 = `${date}  ${month}`;
  let time3 = ` la ora ${hour}:${min}:${sec}`;

  return {
    timeDateMonthYearHour: time1,
    timeDateMonth: time2,
    timeHour: time3,
  };

}

export default timeConverter;