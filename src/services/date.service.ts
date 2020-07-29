import * as moment from "moment";

export function setCreationDate(): string {
  return moment.utc().format();
}

export function formatToUserTime(utcTime: string | undefined): string {
  // @ts-ignore
  return moment(utcTime).format("DD-MM-YYYY");
}
