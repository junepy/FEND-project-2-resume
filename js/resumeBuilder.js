var bio = {
	"name": "Xiaomin Guan",
	"role": "Web Developer",
	"contacts": {
		"mobile": "408-769-0578",
		"email": "guanxiaomin0932@gmail.com",
		"github": "guanxiaomin",
		"twitter": "@xiaomin_guan",
		"location": "Mountain View"
	},
	"welcomeMessage": "Hello, world!",
	"skills": [
		"awesomeness", "delivering things", "cryogenic sleep", "saving the universe"
	],
	"bioPic": "images/fry.jpg"
}

var education = {
	"schools": [
		{
			"name": "Beijing University of Posts and Telecommunications",
			"location": "Beijing, China",
			"degree": "Master of Engineering",
			"majors": ["CS"],
			"dates": 2012,
			"url": "http://english.bupt.edu.cn/"
		},
		{
			"name": "Beijing University of Posts and Telecommunications",
			"location": "Beijing, China",
			"degree": "B.Eng",
			"majors": ["CS"],
			"dates": 2009,
			"url": "http://english.bupt.edu.cn/"
		}
	],
	"onlineCourses": [
		{
			"title": "Front End Web Developer Nanodegree",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{
			"title": "Introduction to Computer Science and Programming Using Python",
			"school": "edX",
			"dates": 2015,
			"url": "https://courses.edx.org/courses/course-v1:MITx+6.00.1x_6+2T2015/info"
		}
	]
}

var work = {
	"jobs": [
		{
			"employer": "Symantec",
			"title": "Software QA",
			"location": "Beijing, China",
			"dates": "Apr 2012 - Feb 2015",
      		"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
		},
		{
			"employer": "Symantec",
			"title": "Intern",
			"location": "Beijing, China",
			"dates": "Apr 2010 - Mar 2012",
      		"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "Sample project 1",
			"dates": 2012,
      		"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg.",
			"images": [
				"images/fry.jpg",
				"images/fry.jpg"
			]
		},
		{
			"title": "Sample project 2",
			"dates": 2013,
      		"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg.",
			"images": [
				"images/fry.jpg",
				"images/fry.jpg"
			]
		},
		{
			"title": "Sample project 3",
			"dates": 2014,
      		"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg.",
			"images": [
				"images/fry.jpg",
				"images/fry.jpg"
			]
		}
	]
}

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedTwi = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	
	var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	// $("#topContacts").prepend(formattedbioPic);
	// $("#topContacts").prepend(formattedMsg);
	$("#topContacts").prepend(formattedMobile + formattedEmail + formattedTwi + formattedGit + formattedLocation);


	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
}

bio.display();

work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedworkEmployer + formattedworkTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedWorkDates);
		
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedWorkDescription);

	}
}

work.display();

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				// $(".project-entry:last").append(formattedProjectImage);
			}
		}
	}
}

projects.display();

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedNameDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		if (education.schools[school].majors.length > 0) {
			for (course in education.schools[school].majors) {
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[course]);
				$(".education-entry:last").append(formattedMajor);
			}
		}
	}
	$("#education").append(HTMLonlineClasses);
	
	for (online in education.onlineCourses) {
		$("#education").append(HTMLonlineStart);
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
		var formattedTitleSchool = formattedTitle + formattedSchool;
		$(".online-entry:last").append(formattedTitleSchool);

		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
		$(".online-entry:last").append(formattedDates);

		var formattedURL = HTMLonlineURL.replace("#", education.onlineCourses[online].url).replace("%data%", "Link");
		$(".online-entry:last").append(formattedURL);
	}
}

education.display();

// $(document).click(function(loc) {
// 	var x = loc.pageX;
// 	var y = loc.pageY;
// 	logClicks(x, y);
// });

// $(document).click(function(loc) {
// 	console.log(loc.pageX, loc.pageY);
// });
$("#mapDiv").append(googleMap);


