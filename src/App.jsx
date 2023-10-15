import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="text-white bg-gray-500 min-h-screen">
        <div className="w-full flex flex-col  items-center">
          <Navbar />
          <Form />
          {/* <h1 className="text-black">Tessdddwdwdwdwdwdw</h1> */}
        </div>
      </div>
    </>
  );
}

export default App;
