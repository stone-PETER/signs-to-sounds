import React, { useState } from "react";
import "./FAQSection.css";

const faqs = [
  {
    q: "What is the objective of the Signs to Sounds initiative?",
    a: "The Signs to Sound initiative aims to bridge the communication gap between the deaf and hard-of-hearing community and the hearing population by encouraging students to build real-time sign language to speech translation systems. It focuses on applying signal processing and artificial intelligence to create inclusive, affordable, and practical assistive technologies, while promoting ethical and data-centric development practices.",
  },
  {
    q: "Who is eligible to participate in the competition?",
    a: "The competition is open to undergraduate and postgraduate students from engineering, computer science, biomedical engineering, and related fields. Teams should consist of two to four members, and at least one member should have experience in signal processing, machine learning, or embedded systems. Participation is open to students from any geographic region.",
  },
  {
    q: "Is there any participation fee or is the competition free of cost?",
    a: "There is no participation fee. The competition is completely free for all participants, thanks to sponsorship from the IEEE Signal Processing Society.",
  },
  {
    q: "Are there specific themes, tracks, or problem statements that participants should address?",
    a: "Yes. Participants should focus on creating systems for sign language to speech translation. This may involve vision-based gesture recognition using cameras and AI, sensor-based recognition using wearable devices, or hybrid approaches that combine both. The emphasis is on Indian Sign Language, ethical data practices, and accessibility.",
  },
  {
    q: "What type of submissions are required (prototype, demo video, technical documentation, source code)?",
    a: "Participants must submit a collected and annotated gesture dataset, a working prototype or real-time demo system, a demo video showing how the system works, a technical report explaining the methods and results, and the source code or Colab notebooks to ensure reproducibility during evaluation.",
  },
  {
    q: "Will participants receive mentorship, datasets, or technical resources during the competition?",
    a: "Yes. All participants will receive starter kits that include sample Indian Sign Language gesture libraries, ethical data collection templates, preprocessing notebooks, dataset folder structures, and annotation tools. Mentorship sessions will be provided by experts in machine learning, signal processing, accessibility technologies, and Indian Sign Language. Shortlisted teams will also get access to Google Colab Pro and virtual platforms for webinars, Q&A sessions, and judging.",
  },
  {
    q: "What are the prizes, recognitions, or opportunities provided to winners and finalists?",
    a: "The first prize winner will receive $2,000 and gadgets, the second prize is $1,200 and gadgets, and the third prize is $800 and gadgets. Teams placing fourth to tenth will each receive $100 vouchers. Winners will also receive IEEE certificates, be featured on IEEE SPS platforms, and may get opportunities for incubation, publication, or further development support.",
  },
  {
    q: "What is the evaluation and judging criteria for the submissions?",
    a: "Submissions will be evaluated on technical innovation, data strategy and usage, functionality, impact and inclusivity, and clarity of presentation. Technical innovation and data strategy have the highest weight. Judging will be conducted by experts from IEEE SPS and accessibility domains to ensure fairness and quality.",
  },
  {
    q: "How will intellectual property (IP) rights be managed for the solutions developed?",
    a: "All intellectual property rights will remain with the participants and their teams. However, teams are encouraged to use open-source licenses for their datasets and code to promote collaboration. Any shared outputs or publications must properly credit both the team and IEEE SPS.",
  },
  {
    q: "How will the competition outcomes be sustained or scaled after the event?",
    a: "After the competition, selected teams will be supported in publishing their work through IEEE SPS platforms. Their datasets and tools may be added to open repositories for future research. Finalists' work will also be showcased in IEEE SPS webinars and newsletters, and promising projects may receive incubation or development support.",
  },
  {
    q: "What impact does this competition aim to create for the deaf and hard-of-hearing community?",
    a: "The competition aims to inspire inclusive technology that improves communication for the deaf and hard-of-hearing community. It encourages the development of affordable assistive solutions, builds responsibly collected Indian Sign Language datasets, and promotes community engagement in accessibility innovation.",
  },
  {
    q: "What frameworks, datasets, or platforms are participants encouraged or required to use?",
    a: "Participants are encouraged to use open-source tools such as MediaPipe, OpenCV, NumPy, and Pandas for processing; CVAT or VIA for annotation; and Google Colab, TensorFlow, or PyTorch for training models. Storage and sharing can be done through Google Drive or GitHub. While open ISL datasets may be used as references, teams are expected to collect and annotate their own datasets to ensure originality.",
  },
  {
    q: "Will participants receive mentorship, datasets, or technical resources during the competition?",
    a: "Yes. Participants will receive starter kits, mentorship from technical and accessibility experts, access to Google Colab Pro for development, and detailed guidelines to help them build high-quality solutions. Regular virtual sessions will provide ongoing support throughout the event.",
  },
];

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <section className="faq alt-bg">
      <div className="section-inner">
        <h2>FAQs</h2>
        <div className="faq-list">
          {faqs.map((faq, idx) => {
            const open = openIdx === idx;
            const answerId = `faq-answer-${idx}`;
            return (
              <div className="faq-card card" key={idx}>
                <button
                  className="faq-question"
                  aria-expanded={open}
                  aria-controls={answerId}
                  onClick={() => setOpenIdx(open ? null : idx)}
                >
                  {faq.q}
                </button>
                {open && (
                  <p
                    id={answerId}
                    className="faq-answer"
                    role="region"
                    aria-live="polite"
                  >
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
