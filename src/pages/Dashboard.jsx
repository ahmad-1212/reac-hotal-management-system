import { useEffect } from "react";
import { isToday } from "date-fns";
import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import { useScreenSize } from "../hooks/useScreenSize";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import supabase from "../services/supabase";

import {
  deleteBookings,
  deleteCabins,
  createBookings,
  createCabins,
} from "../data/Uploader";
import { useQueryClient } from "@tanstack/react-query";

function Dashboard() {
  const { screenSize } = useScreenSize();
  const queryClient = useQueryClient();

  useEffect(() => {
    async function uploadAll() {
      let { data: date, error } = await supabase.from("date").select("*");
      if (error) return;
      if (!isToday(new Date(date[0].date))) {
        console.log("uploading");
        // Bookings need to be deleted FIRST
        await deleteBookings();
        await deleteCabins();

        // Bookings need to be created LAST
        await createCabins();
        await createBookings();

        const { error: dateError } = await supabase
          .from("date")
          .update({ date: new Date() })
          .eq("id", date[0].id);

        if (dateError) return;

        queryClient.invalidateQueries({
          active: true,
        });
      }
    }
    uploadAll();
  }, [queryClient]);

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
