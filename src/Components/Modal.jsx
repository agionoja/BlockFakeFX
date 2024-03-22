export default function Modal({ children, className }) {
  return (
    <div
      className={
        "z-[100000] my-auto flex h-screen w-full justify-center" +
        " " +
        className
      }
    >
      <div
        className={
          "absolute left-0 right-0 top-0 z-[1000]  mx-auto mt-[8.5rem] md:mt-[9rem]"
        }
      >
        {children}
      </div>

      <div
        className={
          "fixed  left-0 right-0 top-0 z-[500] h-full w-full bg-overlay backdrop-blur-sm"
        }
      ></div>
    </div>
  )
}
