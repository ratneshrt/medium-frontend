import { Auth } from "../components/Auth"
import { Quote } from "../components/QouteUp"

export const Signup = () => {    
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                    <Auth type={"signup"}/>
                </div>
                <div className="invisible lg:visible">
                    <Quote />
                </div>
            </div>
        </>
    )
}