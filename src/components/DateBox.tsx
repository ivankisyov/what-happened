import * as React from "react";
import { formatToUserTime } from "../services/date.service";

export default function DateBox({ date }: { date: string | undefined }) {
  return <div>created at: {formatToUserTime(date)}</div>;
}
