// 
function locationizer(work) {
	var location = [];
	for (job in work.jobs) {
		location.push(work.jobs[job].location);
	}
	
	return location;
}

// Did locationizer() work? This line will tell you!
// console.log(locationizer(work));


function getRelationship(x, y) {
    // Your code goes here!
	var rel = '';
	var args = Array.prototype.slice.call(arguments);
	if (args.length === 1) {
		args.push("undefined");
	}
	for (arg in args) {
		if (args[arg] === undefined) {
			args[arg] = "undefined";
		}
		else if (typeof(args[arg]) === 'number' && isNaN(args[arg])) {
			args[arg] = "NaN";
		}
	}
	if (typeof args[0] === 'number' && typeof args[1] === 'number') {
		if (args[0] > args[1]) {
			rel = ">";
		}
		else if (args[0] < args[1]) {
			rel = "<";
		}
		else {
			rel = "=";
		}
	}
	else if (typeof args[0] !== 'number' && typeof args[1] === 'number') {
		rel = "Can't compare relationships because [this value] is not a number".replace("[this value]", args[0]);
	}
	else if (typeof args[0] === 'number' && typeof args[1] !== 'number') {
		rel = "Can't compare relationships because [that value] is not a number".replace("[that value]", args[1]);
	}
	else {
		rel = "Can't compare relationships because [this value] and [that value] are not numbers".replace("[this value]", args[0]).replace("[that value]", args[1]);
	}
	return rel;
}

// console.log(getRelationship(1, 4));
// console.log(getRelationship(1,1))
// console.log(getRelationship("that",2));
// console.log(getRelationship("this"," something else"));
// console.log(getRelationship(3));
// console.log(getRelationship("hi"));
// console.log(getRelationship(NaN));
// console.log(getRelationship(NaN, undefined));

var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {
	// Your code goes here!
	var newNames = [];
	for (name in names) {
		var nameArray = names[name].split(" ");
		var lastFirst = nameArray[1] + ", " + nameArray[0];
		newNames.push(lastFirst);
	}
	newNames.sort();
	return newNames;
}

// Try logging your results to test your code!
// console.log(alphabetizer(moonWalkers));

// Iterate through the localizedRuleNames in ruleResults and 
// return an array of their strings.
function ruleList(results) {
    // Your code goes here!
    var ruleLst = [];
    ruleListKeys = Object.keys(results.formattedResults.ruleResults);
    for (key in ruleListKeys) {
      ruleLst.push(results.formattedResults.ruleResults[ruleListKeys[key]].localizedRuleName);
    }
    return ruleLst;
}

// Iterate through pageStats in the psiResults object and 
// return the total number of bytes to load the website.
function totalBytes(results) {
    // Your code goes here!
    var total = 0;
    statsKey = Object.keys(results.pageStats);
    // statsArray = [];
    for (key in statsKey) {
      if (typeof (results.pageStats[statsKey[key]]) === "string") {
        var bytes = Number(results.pageStats[statsKey[key]]);
        total += bytes;
      }
    }
    return total;
}

// Below, you'll find a sample PS Insights JSON
// and two console.log statements to help you test your code!

psinsights = {
 "kind": "pagespeedonline#result",
 "id": "/speed/pagespeed",
 "responseCode": 200,
 "title": "PageSpeed Home",
 "score": 90,
 "pageStats": {
  "numberResources": 22,
  "numberHosts": 7,
  "totalRequestBytes": "2761",
  "numberStaticResources": 16,
  "htmlResponseBytes": "91981",
  "cssResponseBytes": "37728",
  "imageResponseBytes": "13909",
  "javascriptResponseBytes": "247214",
  "otherResponseBytes": "8804",
  "numberJsResources": 6,
  "numberCssResources": 2
 },
 "formattedResults": {
  "locale": "en_US",
  "ruleResults": {
    "AvoidBadRequests": {
      "localizedRuleName": "Avoid bad requests",
      "ruleImpact": 0.0
    },
    "MinifyJavaScript": {
      "localizedRuleName": "Minify JavaScript",
      "ruleImpact": 0.1417,
      "urlBlocks": [
      {
        "header": {
       "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "1.3KiB"
        },
        {
         "type": "INT_LITERAL",
         "value": "0"
        }
       ]
        },
        "urls": [
        {
          "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
          },
          {
           "type": "BYTES",
           "value": "717B"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
          },
          {
           "type": "BYTES",
           "value": "258B"
          },
          {
           "type": "INT_LITERAL",
           "value": "0"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "SpriteImages": {
    "localizedRuleName": "Combine images into CSS sprites",
    "ruleImpact": 0.0
   }
  }
 },
 "version": {
  "major": 1,
  "minor": 11
 }
};

// Try logging the outputs below to test your code!
// console.log(ruleList(psinsights));
// console.log(totalBytes(psinsights));