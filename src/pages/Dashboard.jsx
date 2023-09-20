import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import { useScreenSize } from "../hooks/useScreenSize";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Dashboard() {
  const { screenSize } = useScreenSize();

  return (
    <>
      <Row type={screenSize <= 600 ? "vertical" : "horizontal"}>
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
