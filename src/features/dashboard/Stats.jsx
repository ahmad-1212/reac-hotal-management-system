import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";

import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmStays, numDays, cabinCount }) {
  // 1.
  const numBookings = bookings.length;

  // 2.
  const sales = bookings.reduce((prev, cur) => prev + cur.totalPrice, 0);

  // 3.
  const checkins = confirmStays.length;

  // 4.
  const occupation =
    confirmStays.reduce((prev, cur) => prev + cur.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
        gridColumn="1 / 2"
        gridRow="1 / 2"
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
        gridColumn="2 / -1"
        gridRow="1 / 2"
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
        gridColumn="1 / 2"
        gridRow="2 / 3"
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
        gridColumn="2 / -1"
        gridRow="2 / 3"
      />
    </>
  );
}

export default Stats;
