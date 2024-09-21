import { Quote } from "../components/Quote"
import { Auth } from "../components/Auth"

export function Signup(){
    return <div className="">
        <div className="grid grid-cols-2">
            <div className="">
                <Auth type="singup"/>
            </div>
            <div className="invisible lg:visible">
                <Quote/>
            </div>
            
        </div>
    </div>
}

