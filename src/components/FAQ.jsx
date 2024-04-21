/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/exhaustive-deps */

import Accordionitem from "./Accordionitem";
const FAQ = () => {
    const faqData = [
        {
          question: 'What is Itsyourday app?',
          answer: 'Lorem ipsum dolor sit amet consectetur. Amet elementum orci vitae varius amet placerat volutpat. A viverra risus lectus pharetra fermentum cursus. Neque id ipsum vitae tincidunt felis pretium est aliquam leo. Tellus dictum tortor diam urna purus id amet amet vel. Interdum egestas faucibus eget enim augue nunc ultrices etiam. Quisque ullamcorper rutrum morbi ornare in. Neque semper hendrerit placerat mauris.'
        },
        {
          question: 'How do I get started with Itsyourday?',
          answer: 'Lorem ipsum dolor sit amet consectetur. Amet elementum orci vitae varius amet placerat volutpat. A viverra risus lectus pharetra fermentum cursus. Neque id ipsum vitae tincidunt felis pretium est aliquam leo. Tellus dictum tortor diam urna purus id amet amet vel. Interdum egestas faucibus eget enim augue nunc ultrices etiam. Quisque ullamcorper rutrum morbi ornare in. Neque semper hendrerit placerat mauris.'
        },
        {
          question: 'Can I invite guests and manage RSVPs through Itsyourday?',
          answer: 'Yes, Itsyourday allows you to easily create and manage guest lists, send invitations, track RSVPs, and communicate with guests directly through the app.'
        },
        {
          question: 'Is Itsyourday available for both iOS and Android devices?',
          answer: 'Lorem ipsum dolor sit amet consectetur. Amet elementum orci vitae varius amet placerat volutpat. A viverra risus lectus pharetra fermentum cursus. Neque id ipsum vitae tincidunt felis pretium est aliquam leo. Tellus dictum tortor diam urna purus id amet amet vel. Interdum egestas faucibus eget enim augue nunc ultrices etiam. Quisque ullamcorper rutrum morbi ornare in. Neque semper hendrerit placerat mauris.'
        },
        {
          question: 'Is Itsyourday suitable for all types of events?',
          answer: 'Lorem ipsum dolor sit amet consectetur. Amet elementum orci vitae varius amet placerat volutpat. A viverra risus lectus pharetra fermentum cursus. Neque id ipsum vitae tincidunt felis pretium est aliquam leo. Tellus dictum tortor diam urna purus id amet amet vel. Interdum egestas faucibus eget enim augue nunc ultrices etiam. Quisque ullamcorper rutrum morbi ornare in. Neque semper hendrerit placerat mauris.'
        }
    ];

    return (
        <>
        <section className="xui-py-3 xui-container xui-overflow-y-hidden xui-bg-white xui-max-w-950 xui-w-fluid-100 xui-mx-auto">
            <p className="xui-font-sz-90 amd-text-green-light xui-text-center">FAQs</p>
            <h3 className="xui-font-9 xui-font-sz-250 xui-mt-1 xui-text-center">Frequently Asked Questions</h3>
            <Accordionitem data={faqData}/>
        </section>
        </>
    )
};

export default FAQ;