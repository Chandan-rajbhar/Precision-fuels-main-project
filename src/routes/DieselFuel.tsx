import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/rec90-1")({
  head: () => ({
    meta: [
      { title: "Diesel Fuel — VoltaFuel" },
      {
        name: "description",
        content:
          "25+ years of energy expertise. VoltaFuel powers retail, industry and aviation across 40 countries.",
      },
    ],
  }),
  component: DieselFuelPage,
});


function DieselFuelPage() {
  return (
    <>
    <h1>Diesel Fuel</h1>
    </>
  );
}

export default DieselFuelPage;
