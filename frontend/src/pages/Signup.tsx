import { Quote } from "../components/Quote"
import { Auth } from "../components/Auth"

export function Signup() {
    return <div>
        <div className="grid grid-cols-1  lg:grid-cols-2">
            <div className="">
                <Auth type="singup" />
            </div>
            <div className="hidden lg:block">
                <Quote />
            </div>

        </div>
    </div>
}

