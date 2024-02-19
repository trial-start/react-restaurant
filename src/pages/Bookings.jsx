import BookingTable from "../features/bookings/BookingTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookinsTableOperations from "../features/bookings/BookingTableOperations";

function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookinsTableOperations />
      </Row>
      <BookingTable />
    </>
  );
}

export default Bookings;
