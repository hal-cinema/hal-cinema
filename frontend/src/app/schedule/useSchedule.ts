export const useSchewdule=()=>{
  const date = new Date();
  date.setDate(date.getDate() -1);

  const weekName = ["日", "月", "火", "水", "木", "金", "土"];
  
  const week = [...Array(14)].map((e, i) => {
    date.setDate(date.getDate() + 1);
    const tmp = {date:date.getMonth() + 1 + "/" + date.getDate(),day: weekName[date.getDay()]}
    return tmp;
  });

  return week;
}

