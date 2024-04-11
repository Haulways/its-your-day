
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { HashLink } from 'react-router-hash-link';
import { ArrowRight } from '@carbon/icons-react';

export default function Features(){
    const breakpoints = {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    };
    return(
        <>
            <section className="xui-pt-2 xui-pb-5 xui-container">
                <div className="xui-d-flex xui-flex-jc-center xui-flex-ai-center">
                    <h3 className="xui-font-sz-180 xui-text-center bold-font features-underline xui-pos-relative xui-d-inline-block">Features</h3>
                </div>
                <Swiper
                        modules={[Autoplay]}
                        direction="horizontal"
                        speed={500}
                        spaceBetween={20}
                        slidesPerView={3}
                        autoplay={true}
                        onSwiper={(swiper) => console.log(swiper)}
                        breakpoints={breakpoints}
                        className="features-swiper xui-mt-1-half"
                    >
                        <SwiperSlide>
                            <div className="xui-p-1 iyd-blue-text feature xui-box-shadow-3 xui-bdr-rad-1">
                                <span className="xui-w-40 xui-h-40 iyd-blue-bg xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center">
                                    <svg width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.2324 11.461L15.2345 15.187C16.1783 18.697 16.6492 20.453 18.0366 21.251C19.424 22.051 21.1851 21.579 24.7072 20.639L28.4433 19.639C31.9654 18.699 33.7264 18.229 34.5281 16.847C35.3299 15.463 34.859 13.707 33.9132 10.197L32.913 6.47297C31.9693 2.96097 31.4964 1.20497 30.1109 0.406972C28.7216 -0.393028 26.9605 0.0789723 23.4384 1.02097L19.7023 2.01697C16.1802 2.95697 14.4192 3.42897 13.6194 4.81297C12.8177 6.19497 13.2886 7.95097 14.2324 11.461Z" fill="#FFF"/>
                                    <path d="M0.0529051 4.49499C0.104173 4.30503 0.191366 4.12733 0.309499 3.97204C0.427632 3.81675 0.574388 3.68691 0.741375 3.58995C0.908363 3.49299 1.09231 3.43081 1.28269 3.40696C1.47308 3.38312 1.66617 3.39808 1.85092 3.45098L5.1648 4.39498C6.04306 4.64014 6.84455 5.11498 7.49113 5.77323C8.13772 6.43149 8.60734 7.25068 8.85424 8.15098L13.0399 23.723L13.3473 24.817C14.5883 25.2871 15.6341 26.1819 16.309 27.351L16.9122 27.159L34.1724 22.549C34.3579 22.4993 34.5512 22.4877 34.741 22.5149C34.9309 22.542 35.1137 22.6073 35.2791 22.707C35.4444 22.8067 35.589 22.9389 35.7046 23.0961C35.8203 23.2533 35.9046 23.4323 35.9529 23.623C36.0012 23.8137 36.0125 24.0123 35.9861 24.2074C35.9597 24.4026 35.8962 24.5905 35.7992 24.7604C35.7022 24.9303 35.5735 25.079 35.4206 25.1978C35.2677 25.3166 35.0935 25.4033 34.908 25.453L17.712 30.045L17.0698 30.249C17.0582 32.789 15.3516 35.113 12.7694 35.801C9.67541 36.629 6.49385 34.797 5.6649 31.713C4.83594 28.627 6.67288 25.455 9.76686 24.629C9.91932 24.5886 10.0731 24.5539 10.228 24.525L6.04046 8.94899C5.92773 8.54881 5.71616 8.18543 5.42632 7.8942C5.13648 7.60296 4.77823 7.39377 4.38644 7.28699L1.07061 6.34098C0.885837 6.28849 0.712934 6.1991 0.56178 6.07791C0.410625 5.95672 0.284183 5.80611 0.189674 5.63468C0.0951658 5.46325 0.0344432 5.27437 0.0109761 5.07882C-0.0124911 4.88326 0.00175657 4.68488 0.0529051 4.49499Z" fill="#FFF"/>
                                    </svg>

                                </span>
                                <h3 className='xui-font-sz-120 xui-mt-1'>Streamlined Vendor Offerings</h3>
                                <p className='xui-opacity-8 xui-font-sz-80 xui-line-height-1-half xui-mt-1'>ItsYourDay provides users with access to a curated selection of event vendors offering standardized services. From event venues and catering to dressmakers and decorators, users can explore a wide range of options tailored to their specific preferences and budget.</p>
                                <HashLink style={{"border": "1px solid #020031"}} className="iyd-text-blue xui-mt-1 xui-bdr-rad-10 xui-text-dc-none xui-d-inline-flex xui-flex-ai-center xui-py-half xui-pl-1 xui-pr-half">
                                    <p className="xui-font-sz-80">Learn more</p>
                                    <span className="xui-w-40 xui-h-40 xui-ml-1 iyd-blue-bg xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center">
                                        <ArrowRight color="#FFF" />
                                    </span>
                                </HashLink>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="xui-p-1 iyd-blue-text feature xui-box-shadow-3 xui-bdr-rad-1">
                                <span className="xui-w-40 xui-h-40 iyd-blue-bg xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center">
                                <svg width="20" height="20" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M36.8175 10.5799C36.7115 10.5714 36.5939 10.5714 36.4705 10.5714H31.6033C27.617 10.5714 24.207 14.0135 24.207 18.5C24.207 22.9865 27.6189 26.4286 31.6033 26.4286H36.4705C36.5939 26.4286 36.7115 26.4286 36.8214 26.4201C37.6406 26.3659 38.414 25.9869 38.9974 25.3536C39.5808 24.7204 39.9344 23.8761 39.9923 22.9781C40 22.8512 40 22.7138 40 22.5869V14.4131C40 14.2862 40 14.1488 39.9923 14.022C39.9344 13.1239 39.5808 12.2796 38.9974 11.6464C38.414 11.0131 37.6406 10.6341 36.8214 10.5799M31.1773 20.6143C32.2028 20.6143 33.0336 19.6671 33.0336 18.5C33.0336 17.3329 32.2028 16.3857 31.1773 16.3857C30.1499 16.3857 29.3191 17.3329 29.3191 18.5C29.3191 19.6671 30.1499 20.6143 31.1773 20.6143Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M36.4667 29.6C36.5333 29.5971 36.5996 29.6114 36.6603 29.6419C36.7209 29.6723 36.7742 29.7181 36.8157 29.7753C36.8572 29.8326 36.8858 29.8998 36.8992 29.9714C36.9125 30.0431 36.9103 30.1172 36.8927 30.1878C36.5072 31.6931 35.8922 32.9786 34.9072 34.0569C33.4634 35.6426 31.6341 36.3425 29.375 36.6765C27.1775 37 24.3728 37 20.8298 37H16.7587C13.2157 37 10.4091 37 8.21358 36.6765C5.95441 36.3425 4.1251 35.6405 2.68132 34.059C1.23946 32.4754 0.599489 30.469 0.294926 27.991C2.2979e-07 25.5807 0 22.5045 0 18.6184V18.3816C0 14.4955 2.2979e-07 11.4171 0.294926 9.00686C0.599489 6.52891 1.23946 4.52246 2.68132 2.93886C4.1251 1.35737 5.95441 0.655428 8.21358 0.321371C10.4111 -9.45159e-08 13.2157 0 16.7587 0H20.8298C24.3728 0 27.1794 2.52042e-07 29.375 0.323486C31.6341 0.657543 33.4634 1.35949 34.9072 2.94097C35.8922 4.02349 36.5072 5.30686 36.8927 6.81223C36.9103 6.88278 36.9125 6.9569 36.8992 7.02856C36.8858 7.10023 36.8572 7.16742 36.8157 7.22469C36.7742 7.28195 36.7209 7.32767 36.6603 7.35813C36.5996 7.38859 36.5333 7.40294 36.4667 7.4H31.6014C26.1327 7.4 21.3137 12.136 21.3137 18.5C21.3137 24.864 26.1327 29.6 31.6014 29.6H36.4667ZM7.22857 8.45714C6.84514 8.45714 6.47742 8.62421 6.20629 8.92159C5.93517 9.21897 5.78285 9.6223 5.78285 10.0429C5.78285 10.4634 5.93517 10.8667 6.20629 11.1641C6.47742 11.4615 6.84514 11.6286 7.22857 11.6286H14.939C15.3225 11.6286 15.6902 11.4615 15.9613 11.1641C16.2324 10.8667 16.3848 10.4634 16.3848 10.0429C16.3848 9.6223 16.2324 9.21897 15.9613 8.92159C15.6902 8.62421 15.3225 8.45714 14.939 8.45714H7.22857Z" fill="white"/>
                                </svg>

                                </span>
                                <h3 className='xui-font-sz-120 xui-mt-1'>Budget Management</h3>
                                <p className='xui-opacity-8 xui-font-sz-80 xui-line-height-1-half xui-mt-1'>With ItsYourDay, users can easily calculate their event budget by selecting vendors and services directly within the platform. By providing transparent pricing and cost estimates, ItsYourDay empowers users to make informed decisions and avoid budgetary surprises.</p>
                                <HashLink style={{"border": "1px solid #020031"}} className="iyd-text-blue xui-mt-1 xui-bdr-rad-10 xui-text-dc-none xui-d-inline-flex xui-flex-ai-center xui-py-half xui-pl-1 xui-pr-half">
                                    <p className="xui-font-sz-80">Learn more</p>
                                    <span className="xui-w-40 xui-h-40 xui-ml-1 iyd-blue-bg xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center">
                                        <ArrowRight color="#FFF" />
                                    </span>
                                </HashLink>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="xui-p-1 iyd-blue-text feature xui-box-shadow-3 xui-bdr-rad-1">
                                <span className="xui-w-40 xui-h-40 iyd-blue-bg xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center">
                                <svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5002 1.48148C11.5002 1.08857 11.3422 0.711748 11.0609 0.433916C10.7796 0.156084 10.398 0 10.0002 0C9.60238 0 9.22085 0.156084 8.93954 0.433916C8.65824 0.711748 8.5002 1.08857 8.5002 1.48148V4.60247C5.6202 4.82963 3.7322 5.38667 2.3442 6.75951C0.954203 8.13037 0.390203 9.99704 0.158203 12.8395H39.8422C39.6102 9.99506 39.0462 8.13037 37.6562 6.75951C36.2682 5.38667 34.3782 4.82963 31.5002 4.60049V1.48148C31.5002 1.08857 31.3422 0.711748 31.0609 0.433916C30.7796 0.156084 30.398 0 30.0002 0C29.6024 0 29.2208 0.156084 28.9395 0.433916C28.6582 0.711748 28.5002 1.08857 28.5002 1.48148V4.47012C27.1702 4.44444 25.6782 4.44444 24.0002 4.44444H16.0002C14.3222 4.44444 12.8302 4.44444 11.5002 4.47012V1.48148Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 20.2469C0 18.5897 2.23517e-08 17.1161 0.026 15.8025H39.974C40 17.1161 40 18.5897 40 20.2469V24.1976C40 31.6464 40 35.3719 37.656 37.685C35.314 40 31.542 40 24 40H16C8.458 40 4.686 40 2.344 37.685C-2.38419e-07 35.3719 0 31.6464 0 24.1976V20.2469ZM30 24.1976C30.5304 24.1976 31.0391 23.9894 31.4142 23.619C31.7893 23.2486 32 22.7461 32 22.2222C32 21.6984 31.7893 21.1959 31.4142 20.8255C31.0391 20.455 30.5304 20.2469 30 20.2469C29.4696 20.2469 28.9609 20.455 28.5858 20.8255C28.2107 21.1959 28 21.6984 28 22.2222C28 22.7461 28.2107 23.2486 28.5858 23.619C28.9609 23.9894 29.4696 24.1976 30 24.1976ZM30 32.0988C30.5304 32.0988 31.0391 31.8907 31.4142 31.5202C31.7893 31.1498 32 30.6474 32 30.1235C32 29.5996 31.7893 29.0972 31.4142 28.7267C31.0391 28.3563 30.5304 28.1482 30 28.1482C29.4696 28.1482 28.9609 28.3563 28.5858 28.7267C28.2107 29.0972 28 29.5996 28 30.1235C28 30.6474 28.2107 31.1498 28.5858 31.5202C28.9609 31.8907 29.4696 32.0988 30 32.0988ZM22 22.2222C22 22.7461 21.7893 23.2486 21.4142 23.619C21.0391 23.9894 20.5304 24.1976 20 24.1976C19.4696 24.1976 18.9609 23.9894 18.5858 23.619C18.2107 23.2486 18 22.7461 18 22.2222C18 21.6984 18.2107 21.1959 18.5858 20.8255C18.9609 20.455 19.4696 20.2469 20 20.2469C20.5304 20.2469 21.0391 20.455 21.4142 20.8255C21.7893 21.1959 22 21.6984 22 22.2222ZM22 30.1235C22 30.6474 21.7893 31.1498 21.4142 31.5202C21.0391 31.8907 20.5304 32.0988 20 32.0988C19.4696 32.0988 18.9609 31.8907 18.5858 31.5202C18.2107 31.1498 18 30.6474 18 30.1235C18 29.5996 18.2107 29.0972 18.5858 28.7267C18.9609 28.3563 19.4696 28.1482 20 28.1482C20.5304 28.1482 21.0391 28.3563 21.4142 28.7267C21.7893 29.0972 22 29.5996 22 30.1235ZM10 24.1976C10.5304 24.1976 11.0391 23.9894 11.4142 23.619C11.7893 23.2486 12 22.7461 12 22.2222C12 21.6984 11.7893 21.1959 11.4142 20.8255C11.0391 20.455 10.5304 20.2469 10 20.2469C9.46957 20.2469 8.96086 20.455 8.58579 20.8255C8.21071 21.1959 8 21.6984 8 22.2222C8 22.7461 8.21071 23.2486 8.58579 23.619C8.96086 23.9894 9.46957 24.1976 10 24.1976ZM10 32.0988C10.5304 32.0988 11.0391 31.8907 11.4142 31.5202C11.7893 31.1498 12 30.6474 12 30.1235C12 29.5996 11.7893 29.0972 11.4142 28.7267C11.0391 28.3563 10.5304 28.1482 10 28.1482C9.46957 28.1482 8.96086 28.3563 8.58579 28.7267C8.21071 29.0972 8 29.5996 8 30.1235C8 30.6474 8.21071 31.1498 8.58579 31.5202C8.96086 31.8907 9.46957 32.0988 10 32.0988Z" fill="white"/>
                                </svg>


                                </span>
                                <h3 className='xui-font-sz-120 xui-mt-1'>Event Management System</h3>
                                <p className='xui-opacity-8 xui-font-sz-80 xui-line-height-1-half xui-mt-1'>ItsYourDay features a user-friendly event management system that allows users to oversee all aspects of their event from a single platform. From creating guest lists and sending invitations to managing schedules and tracking RSVPs, users can efficiently coordinate every detail of their event with ease.</p>
                                <HashLink style={{"border": "1px solid #020031"}} className="iyd-text-blue xui-mt-1 xui-bdr-rad-10 xui-text-dc-none xui-d-inline-flex xui-flex-ai-center xui-py-half xui-pl-1 xui-pr-half">
                                    <p className="xui-font-sz-80">Learn more</p>
                                    <span className="xui-w-40 xui-h-40 xui-ml-1 iyd-blue-bg xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center">
                                        <ArrowRight color="#FFF" />
                                    </span>
                                </HashLink>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="xui-p-1 iyd-blue-text feature xui-box-shadow-3 xui-bdr-rad-1">
                                <span className="xui-w-40 xui-h-40 iyd-blue-bg xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center">
                                <svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1111 8.88889C11.1111 6.53141 12.0476 4.27048 13.7146 2.60349C15.3816 0.936505 17.6425 0 20 0C22.3575 0 24.6184 0.936505 26.2854 2.60349C27.9524 4.27048 28.8889 6.53141 28.8889 8.88889C28.8889 11.2464 27.9524 13.5073 26.2854 15.1743C24.6184 16.8413 22.3575 17.7778 20 17.7778C17.6425 17.7778 15.3816 16.8413 13.7146 15.1743C12.0476 13.5073 11.1111 11.2464 11.1111 8.88889ZM11.1111 22.2222C8.16426 22.2222 5.33811 23.3929 3.25437 25.4766C1.17063 27.5603 0 30.3865 0 33.3333C0 35.1014 0.702379 36.7971 1.95262 38.0474C3.20286 39.2976 4.89856 40 6.66667 40H33.3333C35.1014 40 36.7971 39.2976 38.0474 38.0474C39.2976 36.7971 40 35.1014 40 33.3333C40 30.3865 38.8294 27.5603 36.7456 25.4766C34.6619 23.3929 31.8357 22.2222 28.8889 22.2222H11.1111Z" fill="white"/>
                                </svg>
                                </span>
                                <h3 className='xui-font-sz-120 xui-mt-1'>Dedicated Event Coordinator</h3>
                                <p className='xui-opacity-8 xui-font-sz-80 xui-line-height-1-half xui-mt-1'>To ensure a seamless event experience, ItsYourDay assigns a dedicated event coordinator to each user. This experienced professional serves as a point of contact throughout the planning process and oversees the event on the day, ensuring everything runs smoothly and according to plan.</p>
                                <HashLink style={{"border": "1px solid #020031"}} className="iyd-text-blue xui-mt-1 xui-bdr-rad-10 xui-text-dc-none xui-d-inline-flex xui-flex-ai-center xui-py-half xui-pl-1 xui-pr-half">
                                    <p className="xui-font-sz-80">Learn more</p>
                                    <span className="xui-w-40 xui-h-40 xui-ml-1 iyd-blue-bg xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center">
                                        <ArrowRight color="#FFF" />
                                    </span>
                                </HashLink>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="xui-p-1 iyd-blue-text feature xui-box-shadow-3 xui-bdr-rad-1">
                                <span className="xui-w-40 xui-h-40 iyd-blue-bg xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center">
                                    <svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M32.9434 4.86012e-07C31.8627 -0.000378762 30.7962 0.2212 29.8263 0.64766C28.8564 1.07412 28.0089 1.69408 27.3491 2.45975C26.6893 3.22543 26.2349 4.11638 26.0208 5.06395C25.8067 6.01152 25.8387 6.99041 26.1143 7.92518C25.9439 7.95741 25.7797 8.01203 25.6272 8.08726L19.1392 11.251L10.8887 15.4715C10.8061 15.5135 10.7274 15.5613 10.6534 15.6146C9.5056 15.0074 8.18901 14.7035 6.85607 14.7379C5.52312 14.7723 4.22833 15.1437 3.12159 15.8091C2.01485 16.4745 1.14142 17.4066 0.602413 18.4976C0.06341 19.5887 -0.119122 20.7939 0.0759486 21.9739C0.271019 23.1539 0.835714 24.2603 1.70466 25.1651C2.5736 26.0699 3.71126 26.736 4.98593 27.0864C6.2606 27.4368 7.62015 27.4571 8.90718 27.145C10.1942 26.8328 11.3561 26.201 12.2583 25.3227L19.1439 28.7474L26.0955 32.1385C25.6746 33.6288 25.8759 35.2051 26.6614 36.5721C27.447 37.9391 28.763 39.0029 30.3628 39.5641C31.9625 40.1253 33.7361 40.1453 35.3511 39.6204C36.9662 39.0955 38.3117 38.0617 39.1356 36.7128C39.9595 35.364 40.2051 33.7927 39.8264 32.2934C39.4477 30.7942 38.4707 29.4699 37.0786 28.569C35.6864 27.668 33.9747 27.2521 32.2642 27.3993C30.5538 27.5464 28.9621 28.2466 27.7875 29.3684L20.8524 25.9836L13.9197 22.5399C14.3416 20.9767 14.0824 19.3285 13.1949 17.9301L20.8618 14.0106L27.3168 10.8595C27.4704 10.7851 27.6107 10.6908 27.7333 10.5795C28.5262 11.354 29.5224 11.9394 30.6318 12.2827C31.7413 12.626 32.929 12.7165 34.0873 12.5458C35.2457 12.3752 36.3382 11.9488 37.2659 11.3053C38.1937 10.6619 38.9274 9.82159 39.4007 8.86059C39.8739 7.89959 40.0718 6.8482 39.9764 5.80156C39.881 4.75493 39.4952 3.7461 38.8541 2.8664C38.2131 1.98669 37.3368 1.26388 36.3048 0.763386C35.2727 0.26289 34.1174 0.000512385 32.9434 4.86012e-07Z" fill="white"/>
                                    </svg>
                                </span>
                                <h3 className='xui-font-sz-120 xui-mt-1'>Social Sharing</h3>
                                <p className='xui-opacity-8 xui-font-sz-80 xui-line-height-1-half xui-mt-1'>ItsYourDay includes a social sharing feature that enables users to share highlights of their event with friends and family on social media. Whether it's capturing memorable moments or showcasing stunning decor, users can easily share their event experiences and create lasting memories.</p>
                                <HashLink style={{"border": "1px solid #020031"}} className="iyd-text-blue xui-mt-1 xui-bdr-rad-10 xui-text-dc-none xui-d-inline-flex xui-flex-ai-center xui-py-half xui-pl-1 xui-pr-half">
                                    <p className="xui-font-sz-80">Learn more</p>
                                    <span className="xui-w-40 xui-h-40 xui-ml-1 iyd-blue-bg xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center">
                                        <ArrowRight color="#FFF" />
                                    </span>
                                </HashLink>
                            </div>
                        </SwiperSlide>
                        
                        
                </Swiper>
            </section>
          
    
        </>
    )
}