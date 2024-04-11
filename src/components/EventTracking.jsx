import { ArrowRight, ArrowUpRight } from "@carbon/icons-react";
import { HashLink } from "react-router-hash-link";
import Event from "../assets/images/event.png";

export default function EventTracking(){
   
    return(
        <>
            <section className="xui-pt-2 xui-pb-5 xui-container">
                <div className='xui-row xui-flex-ai-center'>
                    <div className='xui-lg-col-6 xui-col-12'>
                        <h3 className="xui-font-sz-180 xui-text-center bold-font features-underline xui-pos-relative xui-d-inline-block">Lifecycle Event Tracking</h3>
                        <p className="xui-font-sz-80 iyd-text-blue xui-opacity-8 xui-line-height-1-half">At ItsYourDay, we understand that life is filled with special moments worth celebrating. That's why we've introduced a unique feature that allows users to track and plan every milestone event in their lives, from the birth of a child to their graduation and beyond.</p>
                        <HashLink style={{"border": "1px solid #020031"}} className="iyd-text-blue xui-mt-1 xui-bdr-rad-10 xui-text-dc-none xui-d-inline-flex xui-flex-ai-center xui-py-half xui-pl-1 xui-pr-half">
                            <p className="xui-font-sz-80">Get started</p>
                            <span className="xui-w-40 xui-h-40 xui-ml-1 iyd-blue-bg xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center">
                                <ArrowUpRight color="#FFF" />
                            </span>
                        </HashLink>
                    </div>
                    <div className='xui-lg-col-6 xui-col-12 xui-lg-pl-1 xui-pl-none xui-lg-mt-none xui-mt-1'>
                        <img className="xui-img-500 xui-mx-auto" src={Event} alt="" />
                    </div>
                </div>
            </section>
          
    
        </>
    )
}