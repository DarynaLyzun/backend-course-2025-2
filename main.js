const date = "20231001";
const time_period = "q";

const nbuUrl = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/basindbank");

nbuUrl.searchParams.append("date", date);
nbuUrl.searchParams.append("period", time_period);

nbuUrl.searchParams.append("json", "");

const finalUrlString = nbuUrl.toString().replace("json=", "json");
console.log(finalUrlString);