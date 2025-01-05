export default function HelloWorld(text) {
  return (
    <div>
      <HeaderHelloWorld {...text} />
      <ParagraphHelloWorld />
    </div>
  );
}

function HeaderHelloWorld({ text = "Hello World!" }) {
  return (
    <div>
      <h1 className="bold">{text.toLowerCase().split(" ")}</h1>
    </div>
  );
}
function ParagraphHelloWorld() {
  return (
    <div>
      <p>
        Selamat belajar{" "}
        <span
          style={{
            fontWeight: "bold",
            fontStyle: "italic",
          }}
        >
          ReactJS
        </span>
      </p>
    </div>
  );
}
