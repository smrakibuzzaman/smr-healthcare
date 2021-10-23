import React from 'react';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';

const Blog = () => {
    return (
        <div>
<Header/>
<div className="container">
    <h1 className="text-secondary fw-bold" >Blog</h1>
    <h3>Reduce medication errors with manufacturer-enabled RFID</h3>
<p>
Each year, millions of patients are affected by medication errors, resulting in tens of billions of dollars in unnecessary healthcare costs.1 To better manage common dispensing errors, many healthcare organizations now rely on radio frequency identification (RFID) technologies to help them monitor and track medications across the hospital. Yet Brianne Bakken, PharmD, MHA, Pharmacy Manager at Children’s Hospital of Wisconsin, said while many of those more traditional RFID automation technologies have helped pharmacists solve some problems, they’ve created others.
<br /> <br />
“When we first requested an automated RFID program, we said it should save the pharmacy department time as well as reduce errors, while also allowing us to track so we can know where all our kits and trays are and which may have expired meds,” Bakken explained. “Once we implemented the technology, it did achieve all of those needs. But there were also some unintended consequences. It introduced some new coding errors with our manual restocking process.”
<br /> <br />
Bakken said that technicians, at times, might mistype a lot number or expiration date as they manually added data about each medication into the system. In addition, she said, they also had some issues with the tags themselves.
</p>
<hr />

<h3>Navigating the intersections of population health and precision medicine</h3>
<p>
Population health and precision medicine have often been set against each other because of the inherent differences in their approaches to health management, but the COVID-19 pandemic has shone a bright light on both, highlighting some potential intersections that may not have been so apparent in the past. In this article I will look at some of these connections, and some solutions we already have in healthcare IT to take advantage of the opportunities in them.
<br /> <br />
Population health is about health of a population, aggregating data from thousands or even millions of people to provide a generic direction. Precision medicine is about you, the individual, how you react to certain medications, your genetic code and a host of other personal data points. On the surface, healthcare analytics sounds like an overarching solution in both domains, because you are collecting data on the populations and individuals to propose courses of action.
<br /> <br />
Population health management is vital to the health of hospitals, health systems and all providers in a value-based, consumer-centric care environment, and to their relationships with the communities they serve. Providers can improve both population health and precision medicine by leveraging the patient experience – understanding the "who, what, why and where" of the patient before they jump in with the "how" of the technological platform they use to enhance that experience.
</p>
<hr />
<h3>Provider team burnout: undoing the human and organizational damage</h3>
<p>
The common denominator that causes clinician burnout is too many tasks to do in a limited amount of time. The more we can do to automate and equip the clinician to be resilient, the better. In order to resolve the organizational and bottom-line effects of burnout in healthcare, emphasis needs to be placed on four areas:
<br /> <br />
Training. We often train clinicians once in a given technology, such as the EHR, and then we let them go forever. If you don't refresh their knowledge as functionalities change and new upgrades happen, they are going to become overwhelmed.
<br /> <br />
Governance. Understanding when to roll out new processes and procedures and the impact that rollout has on the rotation and the intake of patients, and on productivity, is what good governance is all about. Leaders need to comprehend the impact of their decisions so that they can efficiently and effectively manage the flow, and so the stakeholders are not being inundated.
<br /> <br />
Communication. Engage the stakeholders early, and communicate with them non-stop, ensuring they are always aware of what's going on by using different channels and methods to communicate.
<br /> <br />
System-building. The term system-building may sound technical, but it is not about technology as much as it is about processes. Your goal is to build agile, effective processes that don't require the clinician to do the same things multiple times. Anything we can do to decrease the number of clicks, the number of screens they open, or the number of places they have to go to for information will go a long way toward reducing their level of burnout.
<br /> <br />
Focusing on these areas can undo some of the human and financial damage done in healthcare organizations from years of inefficient operations, outdated technologies and lack of integration in care teams. 
<br /> <br />
This will give care team members more time to concentrate their attention on something they care deeply about and that benefits the entire organization – providing high-quality patient care.
</p>

</div>

            <Contact></Contact>
        </div>
    );
};

export default Blog;