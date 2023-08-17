import TextForm from "./TextForm";

export default function Home(props) {
  return (
    <>
      <div className="container my-5">
        <TextForm
          showAlert={props.showAlert}
          heading="Try TextUtils - Word counter, Character counter, Clear text etc"
          mode={props.Mode}
        />
      </div>
    </>
  );
}
