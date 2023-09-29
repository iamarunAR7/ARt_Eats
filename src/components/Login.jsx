import reactImage from '../images/e.png';
import { FcGoogle } from "react-icons/fc";
import {auth , provider} from "../Config/Config"
import {signInWithPopup} from "firebase/auth"
import Cookies from 'universal-cookie';
const cookie=new Cookies();
 function Login(props){ 
     
        const{setisAuth}=props;
        const googleenter=async()=>{
            try{
           const result = await signInWithPopup(auth,provider);
           cookie.set("auth-token",result.user.refreshToken);
           setisAuth(true);
            }catch(err){

            }


        };

    return (
        <div className="relative">
            <img src={reactImage} alt=""  className=" object-cover absolute mix-blend-overlay h-screen  lg:h-screen w-screen md:h-screen  "/>
            <div className="  flex text-white  font-semibold italic justify-center py-7  bg-black/50  text-2xl md:text-2xl lg:text-4xl  shadow-gray-400 shadow-inner  ">
                AR7 Eats
                 
         </div>

          
            <div className="py-7 md:py-10    items-center ">
                    
            <div className='  flex flex-col justify-around items-center pt-10'>     
            <div className=" rounded-3xl backdrop-brightness-50 backdrop-blur-sm w-1/2 flex justify-center font-semibold  text-xl   flex-col items-center text-neutral-100 md:text-2xl,py-20  lg:text-3xl py-14">
                <div  className=' b '>
                    Login us below
                </div>
                <div className='py-5'>

                </div>
                <button onClick={googleenter}  className=" rounded-full  text-3xl  flex items-center bg-slate-200/95 backdrop-blur-sm  justify-around" >
                    <FcGoogle/>
            </button> 

            </div>

            </div> 

            </div>

             

            
        </div> 
    )
}
export default Login; 