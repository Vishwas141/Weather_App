import src1 from "../Images/rain.jpeg"
import src2 from "../Images/suuny.jpeg"
import src3 from "../Images/temp.png"

function Wea(props) {
    const data = props.tempData;
    const city=props.city;
    console.log(data);


    return (

    

        
        <div className="class flex flex-col gap-5 justify-center items-center">
            
            <h2 className="text-4xl text-white font-bold ">Lets Get <span className="text-4xl text-white ">{`Info about Weather of ${city}` }</span></h2>


            <div className="flex flex-row gap-5  bg-richblack-900 text-white">
                <div className="w-[200px] h-[200px]  bg-richblack-900 text-white ">

                    <img src={src1} className="h-[70%]"/>
                    <h2> {data.cloud} % to rain</h2>

                </div>
                <div className="w-[200px] h-[200px]  bg-richblack-900 text-white">

                    <img src={src3}  className="h-[70%]"/>
                    <h2>{data.temp} C</h2>

                </div>
                <div className="w-[200px] h-[200px]  bg-richblack-900 text-white">

                    <img src={src2}  className="h-[70%]"/>
                    <h2>{data.text}</h2>

                </div>

            </div>
}
        </div>
        
    )
}
export default Wea;
