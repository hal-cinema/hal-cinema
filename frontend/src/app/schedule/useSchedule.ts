export const useSchewdule=()=>{
  const date = new Date();
  date.setDate(date.getDate() -1);

  const weekName = ["日", "月", "火", "水", "木", "金", "土"];
  
  const week = [...Array(14)].map((e, i) => {
    date.setDate(date.getDate() + 1);
    console.log(date.getMonth() + 1 + "/" + date.getDate() + weekName[date.getDay()]);
    const tmp = {date:date.getMonth() + 1 + "/" + date.getDate(),day: weekName[date.getDay()]}
    return tmp;
  });

  return week;
}

