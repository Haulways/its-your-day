import { ArrowRight, ArrowUpRight, Send } from "@carbon/icons-react";
import { useForm } from "react-hook-form";
import { HashLink } from "react-router-hash-link";
import Socials from "../assets/images/socials.png";

export default function Footer(){
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const sendRequest = (data) => {
        console.log(data);
          
    }
    return(
        <>
            <section className="xui-pt-3 xui-pb-5 xui-container iyd-blue-bg xui-text-white footer">
                <div className='xui-d-grid xui-lg-grid-col-4 xui-grid-col-1 xui-lg-grid-gap-1 xui-grid-gap-2'>
                    <div>
                        <p className='xui-font-sz-90 bold-font'>Follow us</p>
                        <img className="xui-mt-1 xui-img-150" src={Socials} alt="" />
                    </div>
                    <div>
                        <p className='xui-font-sz-90 bold-font'>Quick Links</p>
                        <HashLink smooth to="#" className="xui-opacity-6 xui-font-sz-80">About us</HashLink>
                        <HashLink smooth to="#" className="xui-opacity-6 xui-font-sz-80 xui-mt-1-half">Contact us</HashLink>
                    </div>
                    <div>
                        <p className='xui-font-sz-90 bold-font'>Explore</p>
                        <HashLink smooth to="#" className="xui-opacity-6 xui-font-sz-80">Privacy Policy</HashLink>
                        <HashLink smooth to="#" className="xui-opacity-6 xui-font-sz-80 xui-mt-1-half">Contact us</HashLink>
                    </div>
                  
                    <div>
                        <form className="" noValidate onSubmit={handleSubmit(sendRequest)} autoComplete="off">
                            <p className='xui-font-sz-90'>Subscribe</p>
                            <div className="xui-d-flex xui-flex-ai-items-center xui-font-sz-80 xui-mt-1">
                                <div className='xui-pr-1' style={{"width": "calc(100% - 40px)"}}>
                                    <input {...register('emailAddress', {required: true, pattern: /^(?!.*@gigi\.codes$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/})} type="email" className="xui-bdr-rad-10 xui-bg-white xui-text-black contact-input xui-form-input xui-font-sz-80" placeholder="Enter your email address" />
                                </div>
                                <button className="xui-w-40 xui-h-40 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bg-white xui-bdr-rad-circle">
                                    <Send color='#000' />
                                </button>
                            </div>
                            {errors.emailAddress && errors.emailAddress.type == "required" ? <span className="xui-d-inline-block xui-mt-half xui-font-sz-90 xui-text-red">Please enter your email addres</span> : null}
                            {errors.emailAddress && errors.emailAddress.type == "pattern" ? <span className="xui-d-inline-block xui-mt-half xui-font-sz-90 xui-text-red">Incorrect email address</span> : null}
                            
                        </form>
                    </div>
                </div>
            </section>
          
    
        </>
    )
}