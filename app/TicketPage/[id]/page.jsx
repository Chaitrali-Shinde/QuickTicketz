const { default: TicketForm } = require("@/app/(components)/TicketForm");

const getTicketById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;
  let updateTicketData = {};

  if (EDITMODE) {
    //get data of a single ticket
    updateTicketData = await getTicketById(params.id);
    console.log(updateTicketData);
  }

  return <TicketForm />;
};

export default TicketPage;
