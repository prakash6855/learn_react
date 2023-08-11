import TextForm from "./TextForm";

export default function Home(props) {
  return (
    <>
      <div className="container my-5">
        <TextForm
          showAlert={props.showAlert}
          heading="Enter your text here..."
          mode={props.Mode}
        />
      </div>
    </>
  );
}
