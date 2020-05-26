import React from "react"
import Faq from "react-faq-component";

// function FAQ() {
//     return (
//         <div className="container">
//             <article>
//                 <div className="content-item">
//                     <div className="text">
//                         <h1 id="title">Frequently Asked Questions</h1>
//                         <div className="underline"></div>
//                         <p>Q. How old does my child have to be?</p>
//                         <p>A. Children aged 11 - 17 are welcome and will need a parent or guardian to sign a permission slip. Ages 13 and younger must be accompanied by a parent or guardian during session.</p>
//                         <p>Q. This session is sold out! What now?</p>
//                         <p>A. Sign up for the waiting list. We have a lot of cancelations throughout the month, so you'll likely be able to attend. Watch your inbox for when we release your tickets.</p>
//                         <p>Q. How long are sessions?</p>
//                         <p>A. Sessions are 2 hours, from 10am to 12pm on one Saturday of each month.</p>
//                         <p>Q. What does attendance cost?</p>
//                         <p>A. Attending CoderDojo sessions is free, thanks to our volunteers and sponsors.</p>
//                         <p>Q. Where are sessions located?</p>
//                         <p> A. Sessions are currently located in the new College of Business Administration building in room 3121 (3rd floor). The address for the building is 1301 Lovers Lane, Manhattan KS 66502. </p>
//                         <p>Q. Where can I park?</p>
//                         <p>A. Parking is available, free of charge on weekends, on the south side of the College of Business Administration building.</p>
//                         <p>Q. Do I need to bring anything?</p>
//                         <p>A. Computers are provided but you may bring a computer if you wish. You could also bring headphones if you wish.</p>
//                         <p>Q. Do I have to stay with my child for the sessions?</p>
//                         <p>A. If your child is aged 13 or younger, your presence is required throughout the session. All parents and guardians are welcome to stay in a special area provided, so feel free to bring work or entertainment for the duration.</p>
//                         <p>Q. If I'm staying, do I need to register for my own ticket?</p>
//                         <p>A. No. Tickets are for children only. Please do not reserve a ticket for yourself.</p>
//                         <p>Q. Does my child need prior knowledge to attend?</p>
//                         <p>A. No, children can learn from the ground up.</p>
//                         <p>Q. My child is looking for more advanced development resources. Will they still benefit from attending?</p>
//                         <p>A. Yes. Many of the mentors are experienced developers with advanced skills and understanding of more difficult concepts.</p>
//                         <p>Additional questions can be directed to <b>coderdojomhk@gmail.com</b> or call/text us at <b>(913)&nbsp;526-2379</b></p>
//                     </div>
//                 </div>
//             </article>
//         </div>
//     )
// }


//inspiration from https://www.npmjs.com/package/react-faq-component
const data = {
    rows: [
        {
            title: "How old does my child have to be?",
            content: `Children aged 11 - 17 are welcome and will need a parent or guardian to sign a permission slip. Ages 13 and younger must be accompanied by a parent or guardian during session.`,
        },
        {
            title: "This session is sold out! What now?",
            content:
                "Sign up for the waiting list. We have a lot of cancelations throughout the month, so you'll likely be able to attend. Watch your inbox for when we release your tickets.",
        },
        {
            title: "How long are sessions?",
            content: `Sessions are 2 hours, from 10am to 12pm on one Saturday of each month of an academic semester`,
        },
        {
            title: "What does attendance cost?",
            content: "Attending CoderDojo sessions is free, thanks to our volunteers and sponsors.",
        },
        {
            title: "Where are sessions located?",
            content: "Sessions are currently located in the new College of Business Administration building in room 3121 (3rd floor). The address for the building is 1301 Lovers Lane, Manhattan KS 66502.",
        },
        {
            title: "Where can I park?",
            content: "Parking is available, free of charge on weekends, on the south side of the College of Business Administration building.",
        },
        {
            title: "Do I need to bring anything?",
            content: "Computers are provided but you may bring a computer if you wish. You could also bring headphones if you wish.",
        },
        {
            title: "Do I have to stay with my child for the sessions?",
            content: "If your child is aged 13 or younger, your presence is required throughout the session. All parents and guardians are welcome to stay in a special area provided, so feel free to bring work or entertainment for the duration.",
        },
        {
            title: "If I'm staying, do I need to register for my own ticket?",
            content: "No. Tickets are for children only. Please do not reserve a ticket for yourself.",
        },
        {
            title: "Does my child need prior knowledge to attend?",
            content: "No, children can learn from the ground up.",
        },
        {
            title: "My child is looking for more advanced development resources. Will they still benefit from attending?",
            content: "Yes. Many of the mentors are experienced developers with advanced skills and understanding of more difficult concepts.",
        },
        {
            title: "Additional Questions?",
            content: "Additional questions can be directed to <b>coderdojomhk@gmail.com</b> or call/text us at <b>(913)&nbsp;526-2379</b>",
        },
    ],
};

const styles = {
    bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
    rowContentColor: 'grey',
}


class FAQ2 extends React.Component {
    render() {
        return (
            <div>
                <br />
                <div className="container">
                    <article>
                        <div className="content-item">
                            <h1 id="title">Frequently Asked Questions</h1>
                            <div className="underline"></div>
                            <Faq data={data} styles={styles}/>
                        </div>
                    </article>
                </div>
            </div>
        );
    }
}

export default FAQ2