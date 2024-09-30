import Link from "next/link"

import  Header from "@/components/header";
import Footer from "@/components/footer";

export default function Contact() {
    return(
        <div> 
            <Header />
        <div className="contact">
            <h1>Contact</h1>
            <p>For any inquiries, please contact us at: <Link href={"tel:(123) 456-7890"}>[(123) 456-7890]</Link> <br /><br />~MUNIZA ZUBAIR~</p>

        </div>
        <Footer />
        </div>
    )
}