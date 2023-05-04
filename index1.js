//1. Design database for Zen class programme
// users
// codekata
// attendance
// topics
// tasks
// company_drives
// mentors

db.zen.insertMany([
    {
        "user": "Sangeetha",
        "codekata": 240,
        "attendance": "Present",
        "topics": "Java",
        "topic_date": new Date("<2022-04-10>"),
        "task_date": new Date("<2022-04-15>"),
        "tasks": "ecommerce_website",
        "company_drives": "TCS",
        "company_drives_date": new Date("<2022-05-01>"),
        "placement": "Appeared",
        "mentors": "Karthik"
    },
    {
        "user": "Aarav",
        "codekata": 233,
        "attendance": "Present",
        "topics": "Python",
        "topic_date": new Date("<2021-11-15>"),
        "task_date": new Date("<2021-11-20>"),
        "tasks": "data_analysis",
        "company_drives": "Infosys",
        "company_drives_date": new Date("<2021-12-01>"),
        "placement": "NOT_Appered",
        "mentors": "Rajesh"
    },    
    {
        "user" : "Aadhira",
        "codekata" : 175,
        "attendance" : "Present",
        "topics" : "Node_js",
        "topic_date" : new Date("<2020-10-20>"),
        "task_date" : new Date("<2020-10-21>"),
        "tasks" : "create_api",
        "company_drives" : "ZOHO",
        "company_drives_date" : new Date("<2020-10-28>"),
        "placement": "Appeared",
        "mentors" : "Raghav"
    },
    {
        "user" : "Aadhini",
        "codekata" : 150,
        "attendance" : "Present",
        "topics" : "HTML",
        "topic_date" : new Date("<2020-10-07>"),
        "task_date" : new Date("<2020-10-09>"),
        "tasks" : "responsive_web_design",
        "company_drives" : "WIPRO",
        "company_drives_date" : new Date("<2020-10-22>"),
        "placement": "Appeared",
        "mentors" : "Magesh"
    },    
    {
        "user": "Neha",
        "codekata": 225,
        "attendance": "Present",
        "topics": "JavaScript",
        "topic_date": new Date("<2021-09-15>"),
        "task_date": new Date("<2021-09-20>"),
        "tasks": "social_media_app",
        "company_drives": "Accenture",
        "company_drives_date": new Date("<2021-10-01>"),
        "placement": "Appeared",
        "mentors": "Meena"
    }, 
    {
        "user": "Karthik",
        "codekata": 243,
        "attendance": "Present",
        "topics": "React Native",
        "topic_date": new Date("<2022-05-15>"),
        "task_date": new Date("<2022-05-20>"),
        "tasks": "mobile_app",
        "company_drives": "Wipro",
        "company_drives_date": new Date("<2022-06-01>"),
        "placement": "Appeared",
        "mentors": "Krishnan"
    },    
    {
        "user" : "Dhanam",
        "codekata" : 180,
        "attendance" : "Present",
        "topics" : "React",
        "topic_date" : new Date("<2020-10-05>"),
        "task_date" : new Date("<2020-10-16>"),
        "tasks" : "movie_app",
        "company_drives" : "HCL",
        "company_drives_date" : new Date("<2020-10-20>"),
        "placement": "Appeared",
        "mentors" : "Raghav"
    },
    {
        "user" : "Krishnan",
        "codekata" : 125,
        "attendance" : "Present",
        "topics" : "CSS",
        "topic_date" : new Date("<2020-10-12>"),
        "task_date" : new Date("<2020-10-20>"),
        "tasks" : "responsive_web_design",
        "company_drives" : "TCS",
        "company_drives_date" : new Date("<2020-10-25>"),
        "placement": "Appeared",
        "mentors" : "Magesh"
    },    
    {
        "user" : "Aadhithyan",
        "codekata" : 155,
        "attendance" : "Present",
        "topics" : "Node_js",
        "topic_date" : new Date("<2020-10-20>"),
        "task_date" : new Date("<2020-10-21>"),
        "tasks" : "create_api",
        "company_drives" : "ZOHO",
        "company_drives_date" : new Date("<2020-10-28>"),
        "placement": "Appeared",
        "mentors" : "Raghav"
    },
    {
        "user" : "Aravind",
        "codekata" : 55,
        "attendance" : "Present",
        "topics" : "MongoDB",
        "topic_date" : new Date("<2020-10-15>"),
        "task_date" : new Date("<2020-10-19>"),
        "tasks" : "mongo_commands",
        "company_drives" : "HCL",
        "company_drives_date" : new Date("<2020-10-20>"),
        "placement": "Appeared",
        "mentors" : "Raghav"
    },    
    {
        "user" : "Suman",
        "codekata" : 68,
        "attendance" : "Present",
        "topics" : "React",
        "topic_date" : new Date("<2020-10-05>"),
        "task_date" : new Date("<2020-10-16>"),
        "tasks" : "movie_app",
        "company_drives" : "ZOHO",
        "company_drives_date" : new Date("<2020-10-28>"),
        "placement": "Not_appeared",
        "mentors" : "Raghav"
    }, 
    {
        "user" : "Avinash",
        "codekata" : 250,
        "attendance" : "Absent",
        "topics" : "JavaScript",
        "topic_date" : new Date("<2020-10-19>"),
        "task_date" : new Date("<2020-10-23>"),
        "tasks" : "functions",
        "company_drives" : "Cognizant",
        "company_drives_date" : new Date("<2020-10-31>"),
        "placement": "Appeared",
        "mentors" : "Rupan"
    },    {
        "user" : "Raj",
        "codekata" : 95,
        "attendance" : "Present",
        "topics" : "HTML",
        "topic_date" : new Date("<2020-10-07>"),
        "task_date" : new Date("<2020-10-09>"),
        "tasks" : "responsive_web_design",
        "company_drives" : "HCL",
        "company_drives_date" : new Date("<2020-10-20>"),
        "placement": "Not_appeared",
        "mentors" : "Magesh"
    },
    {
        "user": "Aditi",
        "codekata": 228,
        "attendance": "Present",
        "topics": "Angular",
        "topic_date": new Date("<2020-10-15>"),
        "task_date": new Date("<2020-10-20>"),
        "tasks": "blog_website",
        "company_drives": "Capgemini",
        "company_drives_date": new Date("<2020-11-01>"),
        "placement": "Appeared",
        "mentors": "Kavitha"
    },

    {
        "user": "madhu",
        "codekata": 250,
        "attendance": "Absent",
        "topics": "Python",
        "topic_date": new Date("<2021-02-15>"),
        "task_date": new Date("<2021-02-17>"),
        "tasks": "Data Structures",
        "company_drives": "TCS",
        "company_drives_date": new Date("<2021-03-01>"),
        "placement": "Not Appeared",
        "mentors": "Sarah"
    },

    {
        "user": "shreeram",
        "codekata": 300,
        "attendance": "Present",
        "topics": "JavaScript",
        "topic_date": new Date("<2021-06-10>"),
        "task_date": new Date("<2021-06-12>"),
        "tasks": "Web Development",
        "company_drives": "Infosys",
        "company_drives_date": new Date("<2021-06-30>"),
        "placement": "Appeared",
        "mentors": "sanjay"
    },

    {
        "user": "surya",
        "codekata": 200,
        "attendance": "Present",
        "topics": "Java",
        "topic_date": new Date("<2022-01-05>"),
        "task_date": new Date("<2022-01-07>"),
        "tasks": "Object-Oriented Programming",
        "company_drives": "Accenture",
        "company_drives_date": new Date("<2022-01-20>"),
        "placement": "Not Appeared",
        "mentors": "sangeetha"
    }

   
]);