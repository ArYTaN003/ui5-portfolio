import BaseController from "./BaseController";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @namespace aryan.portfolio.controller
 */
export default class Main extends BaseController {
	public onInit(): void {
		const portfolioData = {
			hero: {
				name: "Aryan Sanjay Tandon",
				title: "Full Stack Developer  |  SAP Labs STAR Scholar",
				bio: "Full Stack Developer with experience in SAP CAP, UI5, and cloud application development on SAP BTP. Strong problem-solving skills with a focus on building efficient backend systems.",
				email: "aryan.sanjay.tandon@sap.com",
				phone: "+91 9834046773",
				github: "GitHub",
				githubUrl: "https://github.com/AryTan003",
				linkedin: "LinkedIn",
				linkedinUrl: "https://www.linkedin.com/in/aryan-sanjay-tandon-61bb86251/",
				location: "Bengaluru, Karnataka, India"
			},
			experience: [
				{
					highlights: [
						{
							area: "Backend",
							icon: "sap-icon://database",
							text: "Worked on defects and bugs related to scheduling issues for data pull from source systems and CSRF token issues, integration issues with frontend. Performed major version upgrades (Node.js, CDS, App Router) ensuring compatibility across dependencies and stable production deployments."
						},
						{
							area: "Frontend",
							icon: "sap-icon://palette",
							text: "Worked on UI enhancements, added new columns to display useful data to the user and fixed alignment issues, implemented changes suggested by the UX team."
						},
						{
							area: "Security",
							icon: "sap-icon://shield",
							text: "Resolved Mend security vulnerabilities and handled multiple Dependabot and CodeQL alerts, improving code security and compliance."
						},
						{
							area: "BTP & Integration",
							icon: "sap-icon://cloud",
							text: "Got exposure to BTP and Integration Flow (IFlow), implemented a sample IFlow for learning. Learned about software composition analysis tools like BlackDuck and Mend, and worked on a tool migration from Mend to BlackDuck."
						}
					]
				}
			],
			skillGroups: [
				{
					title: "SAP Technology Stack",
					icon: "sap-icon://technical-object",
					skills: [
						{ name: "SAP CAP (Java)", state: "Success" },
						{ name: "CDS", state: "Success" },
						{ name: "OData", state: "Success" },
						{ name: "SAP UI5", state: "Success" },
						{ name: "SAP BTP", state: "Success" },
						{ name: "S/4 HANA", state: "Success" },
						{ name: "Integration Flow (IFlow)", state: "Success" }
					]
				},
				{
					title: "Programming Languages",
					icon: "sap-icon://source-code",
					skills: [
						{ name: "Java", state: "Information" },
						{ name: "Python", state: "Information" },
						{ name: "C++", state: "Information" },
						{ name: "JavaScript", state: "Information" },
						{ name: "SQL", state: "Information" }
					]
				},
				{
					title: "Frameworks & Libraries",
					icon: "sap-icon://puzzle",
					skills: [
						{ name: "Spring Boot", state: "Warning" },
						{ name: "Django", state: "Warning" },
						{ name: "React", state: "Warning" },
						{ name: "Tailwind CSS", state: "Warning" }
					]
				},
				{
					title: "Tools & Practices",
					icon: "sap-icon://wrench",
					skills: [
						{ name: "Git", state: "None" },
						{ name: "BlackDuck", state: "None" },
						{ name: "Mend", state: "None" },
						{ name: "CodeQL", state: "None" },
						{ name: "Dependabot", state: "None" },
						{ name: "Node.js", state: "None" }
					]
				}
			],
			projects: [
				{
					name: "CAP Initializer",
					linkText: "Live",
					linkUrl: "https://capinitializer.cfapps.us10-001.hana.ondemand.com/",
					description: "Tool to auto-generate SAP CAP projects with configurable features, reducing setup time significantly. Provides a web-based interface for configuring and scaffolding complete CAP projects.",
					skills: [
						{ name: "Spring Boot", state: "Warning" },
						{ name: "React", state: "Warning" },
						{ name: "SAP HANA", state: "Success" },
						{ name: "SAP CAP", state: "Success" },
						{ name: "JavaScript", state: "Information" }
					]
				},
				{
					name: "HireHelp – Smart Interview Scheduler",
					linkText: "GitHub",
					linkUrl: "https://github.com/ArYTaN003/HireHelp/tree/main",
					description: "NLP-based recruitment automation platform for candidate screening and automated interview scheduling. Uses natural language processing to parse resumes and match candidates to job requirements.",
					skills: [
						{ name: "Django", state: "Warning" },
						{ name: "Python", state: "Information" },
						{ name: "MySQL", state: "None" },
						{ name: "NLP", state: "Information" }
					]
				}
			],
			education: [
				{
					degree: "M.Tech in Software Engineering",
					institution: "Birla Institute of Technology and Science, Pilani",
					period: "2025 – Present",
					cgpa: "CGPA: 9.26 / 10"
				},
				{
					degree: "B.Tech in Computer Science & Engineering",
					institution: "G.L. Bajaj Institute of Technology and Management",
					period: "2021 – 2025",
					cgpa: "CGPA: 8.32 / 10"
				}
			],
			certifications: [
				{ name: "Introduction to SAP Cloud Application Programming Model", issuer: "SAP Learning" },
				{ name: "Exploring SAP Business Technology Platform", issuer: "SAP Learning" },
				{ name: "Developing UIs with SAPUI5", issuer: "SAP Learning" },
				{ name: "What Is Generative AI?", issuer: "LinkedIn Learning" }
			]
		};

		this.getView()?.setModel(new JSONModel(portfolioData), "portfolio");
	}
}
