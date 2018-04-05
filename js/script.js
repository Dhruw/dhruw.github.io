$(document).ready(function () {

	var projects = [{
			name: 'Rafael Rijin Ranjan (2018)',
			url: 'http://rafael.byethost6.com/',
			description: 'Christening Website of a newborn',
		},
		{
			name: 'Wandering Lloyd (2018)',
			url: 'http://wanderinglloyd.com/',
			description: 'Personal blog of my Traveller Friend',
		},
		{
			name: 'Aydogdu Merdan (2017)',
			url: 'http://aydogdumerdan.com',
			description: 'Personal blog of my Friend from Turkey :)',
		},
		{
			name: 'Nihat Demir (2017)',
			url: 'http://demirnihat.com',
			description: 'Personal blog of my Friend from Turkey :)',
		},
		{
			name: 'LogicBoxes (2016)',
			url: 'https://www.logicboxes.com',
			description: 'The official website of LogicBoxes, one of the biggest name in Domain Industry',
		},
		{
			name: 'LogicBoxes Blog (2015)',
			url: 'https://blog.logicboxes.com/',
			description: 'Present The official blog for the LogicBoxes',
		},
		{
			name: 'LogicBoxes Naming Services',
			url: 'http://logicboxesnamingservices.com/',
			description: 'Present A dedicated website for providing the Domain Name Registration service',
		},
		{
			name: 'Ignited Minds (2016)',
			url: 'http://ignitedmindscs.com/',
			description: 'Website for an Educational Institute',
		},
		{
			name: 'Radix Event Website (2016)',
			url: 'http://mktg.space/login',
			description: 'Event Management website made for Radix',
		},
		{
			name: 'Shrishti Institute (2012)',
			url: 'https://bit.ly/2uU5WTM',
			description: '2012 Educational Institute Website',
		},
		{
			name: 'Laqshya 2012',
			url: 'https://bit.ly/2Em2IYP',
			description: '2012 College Techfest',
		},
		{
			name: 'AICON 2012',
			url: 'https://bit.ly/2q9hHjB',
			description: '2012 College Paper presentation event',
		},
		{
			name: 'Laqshya 2010',
			url: '-',
			description: 'Worked as a graphics designer',
		}

	];

	$.each(projects, function (i, v) {

		var elem = '<tr>		\
						<td>	\
				' + '<a href="' + v.url + '" target="_blank">' + v.name + '</a>			\
						</td>	\
						<td>	\
				' + v.url + '			\
						</td>	\
						<td>	\
				' + v.description + '	\
						</td>	\
					</tr>		\
					';

		$('#projects > tbody').append(elem);

	});

});