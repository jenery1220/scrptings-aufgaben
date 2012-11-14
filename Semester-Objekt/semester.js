// =============================================================
// = Aufgabe: Deine Semesterbelegung als strukturiertes Objekt =
// =============================================================

var mein_semester = {
  student: {
	name:"Yan Feng",
	studiegang: "Interface Design",
	studiesemester: 2,
	welches: "WS",
    jahr: "2012/2013",
	},

  veranstaltung:[
   { 
	titel: "Scriptings",
    sws: 2,
    credits:3,
    workload:90
    },
   {
	title:"Read & Write",
	sws:2,
	credits:3,
    workload:90
    },
   {
	title:"vvvv",
	sws:2,
	credits:2,
    workload:90
	},
   {
	title:"Proberaum",
	sws:2,
	credits:2,
    workload:90
	},
   {
	title:"Aesthetik der Globalisierung",
	sws:2,
	credits:2,
    workload:90
	}
   ]
};

JSON.stringify(mein_semester);
//"{"student":{"name":"Yan Feng","studiegang":"Interface //Design","studiesemester":2,"welches":"WS","jahr":"2012/2013"},"veranstaltung":
//[{"titel":"Scriptings","sws":2,"credits":3,"workload":90},
//{"title":"Read & Write","sws":2,"credits":3,"workload":90},
//{"title":"vvvv","sws":2,"credits":2,"workload":90},
//{"title":"Proberaum","sws":2,"credits":2,"workload":90},
//{"title":"?sthetik der Globalisierung","sws":2,"credits":2,"workload":90}]}"