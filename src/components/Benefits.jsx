import { ArrowRight, ArrowUpRight } from "@carbon/icons-react";
import BenefitsImage from "../assets/images/benefits.png";

export default function Benefits(){
   
    return(
        <>
            <section id="benefits" className="xui-pt-2 xui-pb-5 xui-container iyd-light-blue-bg">
                <div className='xui-row'>
                    <div className='xui-lg-col-6 xui-col-12'>
                        <img className="xui-img-500" src={BenefitsImage} alt="" />
                    </div>
                    <div className='xui-lg-col-6 xui-col-12'>
                        <h3 className="xui-font-sz-180 xui-text-center bold-font benefits-underline xui-pos-relative xui-d-inline-block">Benefits</h3>
                        <div className="xui-pt-1-half">
                            <div className="xui-d-flex benefit">
                                <span className="xui-w-40 xui-h-40 iyd-blue-bg xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center">
                                    <ArrowUpRight color="#FFF"/>
                                </span>
                                <div className="xui-pl-1" style={{"width": "calc(100% - 40px)"}}>
                                    <h3 className="xui-font-sz-100 bold-font">Convenience</h3>
                                    <p className="xui-font-sz-80 iyd-text-blue xui-opacity-8 xui-line-height-1-half">ItsYourDay simplifies the event planning process, saving users time and effort by providing access to all necessary resources and services in one place.</p>
                                </div>
                            </div>
                            <div className="xui-d-flex benefit ">
                                <span className="xui-w-40 xui-h-40 iyd-blue-bg xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center">
                                    <ArrowUpRight color="#FFF"/>
                                </span>
                                <div className="xui-pl-1" style={{"width": "calc(100% - 40px)"}}>
                                    <h3 className="xui-font-sz-100 bold-font">Transparency</h3>
                                    <p className="xui-font-sz-80 iyd-text-blue xui-opacity-8 xui-line-height-1-half">By offering transparent pricing and cost estimates, ItsYourDay enables users to plan their events with confidence and avoid unexpected expenses.</p>
                                </div>
                            </div>
                            <div className="xui-d-flex benefit ">
                                <span className="xui-w-40 xui-h-40 iyd-blue-bg xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center">
                                    <ArrowUpRight color="#FFF"/>
                                </span>
                                <div className="xui-pl-1" style={{"width": "calc(100% - 40px)"}}>
                                    <h3 className="xui-font-sz-100 bold-font">Peace of Mind</h3>
                                    <p className="xui-font-sz-80 iyd-text-blue xui-opacity-8 xui-line-height-1-half">With a dedicated event coordinator overseeing the event, users can relax and enjoy their special day knowing that all details are being handled professionally and efficiently.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          
    
        </>
    )
}