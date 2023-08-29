type TimelineItemProps = {
    title: String,
    subtitle?: String,
    location: String,
    date: String,
    content: String,
}

export default function About() {



    const education: TimelineItemProps[] = [
        {
            title: "Systems Programming",
            subtitle: "Associates of Arts, De Anza College",
            location: "Cupertino, California",
            date: "August 2023",
            content: "While unemployed following my graduation from university, I decided to learn programming to kill time while I looked for a job. My primary coursework involved learning the fundamentals of Computer Science, Computer Architecture, C++, and Object Oriented Programming. In addition, I acquired a certificate of completion in Python Programming."
        },
        {
            title: "Molecular Biology",
            subtitle: "Bachelors of Science, CalPoly Humbolt",
            location: "Arcata, California",
            date: "December 2018",
            content: "My original plan in life was to go into science and research, however that didn't work out as I intended. In the end, it ended up being a valuable experience regardless, since the process of developing and refining research experiments is eerily similar to the troubleshooting process we use in IT/Software Development."
        },
    ]

    const history: TimelineItemProps[] = [
        {
            title: "Datacenter Technician",
            subtitle: "IBM Cloud",
            location: "Santa Clara, California",
            date: "August 2020 - Current",
            content: "I am currently employed as a Datacenter Technician while finishing up my Systems Programming degree and searching for a full time role. I spend much of my downtime at work working on projects and learning new skills."
        },
        {
            title: "Desktop Support",
            subtitle: "Pharmacyclics",
            location: "Sunnyvale, California",
            date: "April 2019 - April 2020",
            content: "I got my first real job through De Anza College as an internship. While working at Pharmacyclics, I performed the exact same tasks the rest of the department did, including helping customers with IT issues, company projects, and new hire onboarding."
        },
        {
            title: "Brand Ambassador",
            subtitle: "Old Navy",
            location: "San Jose, California",
            date: "May 2017 - August 2018",
            content: "That guy at the Old Navy checkout line, that was me. I'm sorry."
        },
    ]



    return (
        <ul>
            <li className="mb-14">
                <h3 className="font-raleway font-semibold text-3xl mb-3">Education</h3>
                <ul className="pl-6 -py-6 ml-4 border-l">

                    {education.map((item) => (
                        <TimelineItem
                            title={item.title}
                            subtitle={item.subtitle}
                            location={item.location}
                            date={item.date}
                            content={item.content}
                        />
                    ))}
                </ul>
            </li>
            <li className="mb-14">

                <div className="mb-6">
                    <h3 className="font-raleway font-semibold text-3xl mb-3">Work Experience</h3>
                    <ul className="pl-6 -py-6 ml-4 border-l">

                        {history.map((item) => (
                            <TimelineItem
                                title={item.title}
                                subtitle={item.subtitle}
                                location={item.location}
                                date={item.date}
                                content={item.content}
                            />
                        ))}
                    </ul>
                </div>
            </li>


        </ul>
    )
}

const TimelineItem = ({ title, subtitle, location, date, content }: TimelineItemProps) => (
    <li className="mb-10">
        <div className="font-medium text-xl mb-3 sm:mb-1">{title}</div>
        <div className="font-raleway font-semibold text-md flex flex-col md:flex-row justify-between mb-2">
            <div className="mb-1 sm:mb-0">{subtitle}</div>
            <div className="mb-1 sm:mb-0">{location}</div>
        </div>
        <time className="text-black text-xs uppercase px-4 py-1 bg-gray-100 rounded-lg">{date}</time>

        <div className="text-zinc-500 mt-6">{content}</div>

    </li>
);
/*
const TimelineItem = ({ title, subtitle, location, date, content }: TimelineItemProps) => (
    <div className="relative bg-pink-400 pl-8 sm:pl-32 py-6 group">
        <div className="font-medium text-xl mb-2 sm:mb-1">{title}</div>
        <div className="font-raleway font-semibold text-md flex flex-col md:flex-row justify-between mb-2 sm:mb-1">
            <div className="mb-1 sm:mb-0">{subtitle}</div>
            <div className="mb-1 sm:mb-0">{location}</div>
        </div>
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-gray-600 after:border-4 after:box-content after:border-gray-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="text-black sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase sm:w-20 px-4 py-1 mb-3 sm:mb-0 bg-gray-100 rounded-lg">{date}</time>
        </div>
        <div className="text-zinc-500">{content}</div>
    </div>
);
*/


