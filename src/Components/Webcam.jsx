const Webcam = ({ children }) => {
  return (
    <div className="justify-cente flex w-full items-center justify-center ">
      <div className="h-60 w-60 rounded-lg border border-black ">
        {children}
      </div>
      <hr />
    </div>
  );
};
export default Webcam;
