import { useImmer } from "use-immer";

export default function ContactForm() {
  const [contact, setContact] = useImmer({
    name: "",
    message: "",
    hobby: [
      {
        name: "Futsal",
        description: "Main bola",
      },
      {
        name: "Basket",
        description: "Main bola",
      },
    ],
  });

  function handleChangeName(e) {
    setContact((draft) => {
      draft.name = e.target.value;
    });
  }

  function handleChangeMessage(e) {
    setContact((draft) => {
      draft.message = e.target.value;
    });
  }
  function handleChangeHobbies(e) {
    setContact((draft) => {
      draft.hobby = e.target.value.split(",").map((e) => {
        return {
          name: e,
        };
      });
    });
  }

  return (
    <div>
      <h4>Contact Form:</h4>

      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Name" value={contact.name} onChange={handleChangeName} />
        <input type="text" placeholder="Message" value={contact.message} onChange={handleChangeMessage} />
        <input type="text" placeholder="Hobbies" onChange={handleChangeHobbies} />
      </form>

      <h4>Contact Detail</h4>
      <p>Name: {contact.name}</p>
      <p>Your Message: {contact.message}</p>
      <p>
        Your Hobbies:{" "}
        {contact.hobby.map((e) => {
          return e.name;
        })}
      </p>
    </div>
  );
}
