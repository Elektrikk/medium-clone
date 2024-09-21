
import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"

export function Signin(){
    return <div className="">
        <div className="grid grid-cols-2">
            <div className="">
                <Auth type="signin"/>
            </div>
            <div className="invisible lg:visible">
                <Quote/>
            </div>
            
        </div>
    </div>
}

