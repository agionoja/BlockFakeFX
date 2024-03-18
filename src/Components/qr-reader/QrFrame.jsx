import QrReader from "./QrReader.jsx"

export default function QrFrame({ className }) {
  return (
    <div className={"p-8 w-80 md:w-96 mx-auto bg-whiteSmoke flex flex-col justify-center items-center rounded-2xl " + className}>
      <div className={"relative  w-64 md:w-72 md:h-80 h-72"}>
        <div className={"flex w-full h-full border-2 border-black rounded-2xl overflow-hidde"}>
          <QrReader />
          <div className={"w-20 h-0.5  absolute left-0 top-0 right-0 mx-auto   bg-whiteSmoke"}></div>
          <div className={"w-20 h-0.5  absolute left-0 bottom-0 right-0 mx-auto   bg-whiteSmoke"}></div>
          <div className={"w-0.5 h-20  absolute left-0 top-0 bottom-0 my-auto   bg-whiteSmoke"}></div>
          <div className={"w-0.5 h-20  absolute right-0 top-0 bottom-0 my-auto   bg-whiteSmoke"}></div>
          <div className={"w-[90%] rounded-2xl animate-pulse h-[1px] absolute right-0 left-0 top-0 bottom-0 my-auto mx-auto  bg-gray-400"}></div>
        </div>
      </div>
      <div className={"text-xs flex flex-row-reverse items-center mt-4 bg-vanilla py-1 px-2 gap-1 rounded-2xl "}>
        <p>Make sure you allow camera access</p>
        <span className={"rounded-full h-4 w-4 border-[1px] font-bold border-black  flex justify-center items-center"}>!</span>
      </div>
    </div>
  )
}