import { HashLink } from "react-router-hash-link";
import HeaderImage from "../assets/images/header-image.png";
import Navbar from "../components/Navbar";
import { ArrowRight } from "@carbon/icons-react";

export default function Header(){
    return(
        <>
            <section className="iyd-main-holder xui-pos-relative">
                <section className="iyd-main xui-pb-3">
                    <section className="iyd-header xui-pt-6">
                        {/* <Navbar /> */}
                        <div className="xui-d-flex xui-flex-ai-center xui-lg-flex-dir-row xui-flex-dir-column-reverse xui-container">
                            <div className="xui-lg-col-7 xui-col-12">
                                <h1 className="xui-lg-font-sz-220 xui-font-sz-180 xui-lg-w-fluid-80 xui-w-fluid-100 bold-font xui-font-w-100">The Future of Event Management System just got better with <span className="xui-font-w-700 xui-pos-relative header-underline iyd-text-blue">ItsYourDay</span></h1>
                                <div className="xui-d-flex xui-flex-ai-center xui-grid-gap-1 xui-mt-1-half">
                                    <HashLink className="iyd-blue-bg xui-text-white xui-bdr-rad-10 xui-text-dc-none xui-d-inline-flex xui-flex-ai-center xui-py-half xui-pl-1 xui-pr-half">
                                        <p className="xui-lg-font-sz-90 xui-font-sz-70">Learn more</p>
                                        <span className="xui-w-35 xui-h-35 xui-ml-1 xui-bg-white xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center">
                                            <ArrowRight color="#020031" />
                                        </span>
                                    </HashLink>
                                    <HashLink style={{"border": "1px solid #020031"}} className="iyd-text-blue xui-bdr-rad-10 xui-text-dc-none xui-d-inline-flex xui-flex-ai-center xui-py-half xui-pl-1 xui-pr-half">
                                        <p className="xui-lg-font-sz-90 xui-font-sz-70">Get started</p>
                                        <span className="xui-w-35 xui-h-35 xui-ml-1 iyd-blue-bg xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center">
                                            <ArrowRight color="#FFF" />
                                        </span>
                                    </HashLink>
                                </div>
                            </div>
                            <div className="xui-lg-col-5 xui-col-12">
                                <img className="xui-img-500" src={HeaderImage} alt="" />
                            </div>
                        </div>
                    </section>
                    <div className="circle1"></div>
                </section>
            </section>
          
    
        </>
    )
}