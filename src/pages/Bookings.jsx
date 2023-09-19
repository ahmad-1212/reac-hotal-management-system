import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import { useScreenSize } from "../hooks/useScreenSize";

function Bookings() {
  const { screenSize } = useScreenSize();
  return (
    <>
      <Row type={screenSize <= 1200 ? "vertical" : "horizontal"}>
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </Row>

      <BookingTable />
    </>
  );
}

export default Bookings;
