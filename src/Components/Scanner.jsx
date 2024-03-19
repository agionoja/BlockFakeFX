
const Scanner = () => {

    return(
    <div className="flex items-center flex-col justify-center mb-[4rem] pb-10 pt-10 rounded-[1rem] lg: w-[24rem]
     lg:mx-auto bg-[#f2f2f2]">
    <div className="w-[80%] justify-start items-center pb-3  flex gap-2">
    <img src="src/assets/mi_webcam.png" alt="" />
    <h4>Webcam</h4>
    </div>
    
    <div className="flex items-center justify-center w-[80%] h-[20rem] bg-[#ffff] rounded-[20px]
    border-[0.2rem] border-black "> 
    <div className=" flex justify-center items-center  bg-black h-[1px] w-[80%]">
        <div className="flex items-center justify-center">
    
    <div className="w-[25%] h-[20rem] bg-white relative left-[40%]" > 
    </div> {/** vertical cutting */}

    <div className="bg-white h-12 w-[24rem] relative left-[-2.4rem]">
        <div className="bg-white">
    <hr className="w-[80%] mx-auto my-[6%] bg-black" />
    </div>
    </div>

    </div>
    </div> 
    </div>
        <div className="top-[6rem] flex items-center py-3 ">
<div className="bg-[#F7EFA3] flex gap-2 items-center p-1 rounded-lg">
    <img src="src/assets/Exclaim.png" alt="" />
    <h4 className="text-[12px]">Make sure to allow camera access</h4>
</div>
</div>
    <button className="text-[14px] font-semibold flex items-center justify-center gap-3 bg-[#A4CCE6] p-2 rounded-2xl w-[80%]"><img src="src/assets/Camera Icon.png" alt="" /> Open Camera</button>

    </div>
    )
    }
    export default Scanner