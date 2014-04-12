App.Adapters.building = (function () {

    var findById = function (id) {
        var def = $.Deferred(),
        	promise = def.promise(),
            building = null;
        	len = buildings.length;

        for (var i = 0; i < len; i++) {
            if (buildings[i].id === id) {
                building = buildings[i];
                break;
            }
        }
        def.resolve(building);
        return promise;
    },

        findByName = function (searchKey) {
            var def = $.Deferred();
            var promise = def.promise();
            var results = buildings.filter(function (el) {
                var buildingName = el.buildingName;
                return buildingName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;

            });

            def.resolve(results);
            return promise;
        },


        buildings = [{
                "id": 1,
                "buildingName": "Anglesea Building",
                "department": "School of Engineering",
                "telePhone": "+44 (0) 23 9284 2929",
                "email": "hos.eng@port.ac.uk",
                "info": " & Learning at Work are located in this building. Accredited courses and cutting edge research in the fields of engineering, product design, communications and computer networking is avialable in School of Engineering. Where as work-based learning opportunities for undergraduate and postgraduate Partnership programmes are available in Learning at Work Department.",
                "address": "Anglesea Road, Portsmouth, PO1 3DJ",
                "lng": "-1.09625697135926",
                "lat": "50.797790686980335"
            }, {
                "id": 2,
                "buildingName": "Buckingham Building",
                "department": "School of Computing",
                "telePhone": "+44 (0)23 9284 2504",
                "email": "geography@port.ac.uk & hos.comp@port.ac.uk",
                "info": " & Department of Geographyare located in this building. Fully equipped physical geopgraphy, GIS and photogrammetry labs is avialable in Depart of Geopgraphy. Where as many state-of-the-art facilities and Maths Cafe is avilable on School of Computing department.",
                "address": "Lion Terrace, Portsmouth, PO1 3HE",
                "lng": "-1.0986278057098",
                "lat": "50.79846588840019"
            }, {
                "id": 3,
                "buildingName": "Burnaby Building",
                "department": "School of Earth & Environmental Sciences",
                "telePhone": "+44 (0)23 9284 2257",
                "email": "sees.enquiries@port.ac.uk",
                "info": " is located at this building. A friendly and dynamic department with a focus on preparing students for employment along with fieldwork in first and second year is avialable on School of Earth & Environmental Science department.",
                "address": "Burnaby Road, Portsmouth , PO1 3QL",
                "lng": "-1.0979682207107",
                "lat": "50.79808060397417"
            }, {
                "id": 4,
                "buildingName": "Dennis Sciama Building",
                "department": "Institute of Cosmology & Gravitation",
                "telePhone": "+44 (0)23 9284 2257",
                "email": "sees.enquiries@port.ac.uk",
                "info": " is located in this building. The ICG is a research institute at the University of Portsmouth devoted to topics in cosmology, galaxy evolution and gravitation.",
                "address": "Burnaby Road, Portsmouth, PO1 3FX",
                "lng": "-1.0982452630996",
                "lat": "50.79769531954814"
            }, {
                "id": 5,
                "buildingName": "Eldon Building",
                "department": "Portsmouth School of Architecture",
                "telePhone": "+44 (0) 23 9284 2929",
                "email": "architecture@port.ac.uk",
                "info": ", Faculty of Creative and Cultural Industries, School of Art and Design, Schoool of Creative Arts, Film and Media & Scohool of Creative Technologies are located in this building.",
                "address": "Winston Churchill Avenue, Portsmouth, PO1 2DJ",
                "lng": "-1.09058928489685",
                "lat": "50.795173804641216"
            }, {
                "id": 6,
                "buildingName": "Hampshire Terrace",
                "department": "Institute of Industrial Research",
                "telePhone": "+44 (0) 23 9284 4448",
                "email": "iir@port.ac.uk",
                "info": ", Dental Academy &  Innovation Space are located in this building.",
                "address": "1-2 Hampshire Terrace, Portsmouth, PO1 2QF",
                "lng": "-1.0955837965011",
                "lat": "50.79370133148829"
            }, {
                "id": 7,
                "buildingName": "James Watson West",
                "department": "School of Health Sciences & Social Work",
                "telePhone": "+44 (0)23 9284 4440",
                "email": "shssw@port.ac.uk",
                "info": " is located in this building. Centre for simulation in Healthcare, professional doctorate and postgraduate opportunities are available on School of Health Sciences and Socail Work department.",
                "address": "2 King Richard 1st Road, Portsmouth, PO1 2FR",
                "lng": "-1.0974762439727",
                "lat": "-1.0974762439727"
            }, {
                "id": 8,
                "buildingName": "King Henry Building",
                "department": "Department of Psychology",
                "telePhone": "+44 (0)23 9284 6312",
                "email": "psychology@port.ac.uk",
                "info": " & School of Biological Sciences are located in this building.",
                "address": "King Henry I Street, Portsmouth, PO1 2DY",
                "lng": "-1.0953873395919",
                "lat": "50.79726044405739"
            }, {
                "id": 9,
                "buildingName": "Lion Gate Building",
                "department": "Department of Mathematics",
                "telePhone": "+44 (0) 23 9284 6367",
                "email": "maths@port.ac.uk",
                "info": " & Maths Cafe are located in this building.",
                "address": "Lion Terrace, Portsmouth, PO1 3HF",
                "lng": "-1.0986186265945",
                "lat": "50.79893891086382"
            }, {
                "id": 10,
                "buildingName": "Milldam Building",
                "department": "School of Social, Historical and Literary Studies",
                "telePhone": "+44 (0)23 9284 6036",
                "email": "sshls@port.ac.uk",
                "info": "is located in this building.",
                "address": "Burnaby Road, Portsmouth, PO1 3AS",
                "lng": "-1.099536657333",
                "lat": "50.7969514535771"
            }, {
                "id": 11,
                "buildingName": "Park Building",
                "department": "Faculty of Humanities and Social Sciences",
                "telePhone": "+44 (0)23 9284 6014",
                "email": "iir@port.ac.uk",
                "info": " & School of Languages and Area Studies are located in this building.",
                "address": "King Henry I Street, Portsmouth, PO1 2DZ",
                "lng": "-1.0938911437988",
                "lat": "50.79759232272139"

            }, {
                "id": 12,
                "buildingName": "Portland Building",
                "department": "Faculty of Technology",
                "telePhone": "+44 (0) 23 9284 2011",
                "email": "technology@port.ac.uk",
                "info": " & School of Civil Engineering and Surveying are located in this building.",
                "address": "Portland Street, Portsmouth, PO1 3AH",
                "lng": "-1.099434256553",
                "lat": "50.7985879587134"
            }, {
                "id": 13,
                "buildingName": "Purple Door",
                "department": "Purple Door Careers and Recruitment",
                "telePhone": "+44 (0)23 9284 2684",
                "email": "careersandrecruitment@port.ac.uk",
                "info": " is located at this building. All the things related to careering planning, job vacancies and work experience are done  here.",
                "address": "28 Guildhall Walk, Portsmouth, PO1 2DD",
                "lng": "-1.0930715799331",
                "lat": "50.79667679537242"
            }, {
                "id": 14,
                "buildingName": "Ravelin House",
                "department": "Institute of Criminal Justice Studies",
                "telePhone": "+44 (0)23 9284 3933",
                "email": "icjsonlinehelp@port.ac.uk",
                "info": " is located in this building.",
                "address": "Museum Road Portsmouth, PO1 2QQ",
                "lng": "-1.0964506864547",
                "lat": "50.79215256438964"
            }, {
                "id": 15,
                "buildingName": "Richmond Building",
                "department": "Portsmouth Business School",
                "telePhone": "+44 (0)23 9284 4600",
                "email": "pbs.enquiries@port.ac.uk",
                "info": " & School of Law are located in this building.",
                "address": "APortland Street, Portsmouth, PO1 3DE",
                "lng": "-1.0997394323349",
                "lat": "50.79821030368195"
            }, {
                "id": 16,
                "buildingName": "Spinnaker Building",
                "department": "Department of Sport and Exercise Science",
                "telePhone": "+44 (0)23 9284 5163",
                "email": "sports.science@port.ac.uk",
                "info": " is located in this building.",
                "address": "Cambridge Road, Portsmouth, PO1 2ER",
                "lng": "-1.0969487428665",
                "lat": "50.79502503144702"
            }, {
                "id": 17,
                "buildingName": "St. Andrew's Court",
                "department": "Graduate School",
                "telePhone": "+44 (0))23 9284 2984",
                "email": "graduateschool@port.ac.uk",
                "info": " along with other departments like Alumini and Development, Department for Curriculum and Quality Enhancement, Education Liasion and Outreach & Many more department are located in this building.",
                "address": "St. Michael's Road, Portsmouth, PO1 2PR",
                "lng": "-1.0948898792267",
                "lat": "50.79583756196922"
            }, {
                "id": 18,
                "buildingName": "St. George's Building",
                "department": "School of Education and Continuing Studies",
                "telePhone": "+44 (0)23 9284 5204",
                "email": "ssecs.enquiries@port.ac.uk",
                "info": " is located in this building.",
                "address": "141 High Street, Portsmouth, PO1 2HY",
                "lng": "-1.10013008117",
                "lat": "50.792648475037"
            }, {
                "id": 19,
                "buildingName": "St. Michael's Building",
                "department": "Faculty of Science",
                "telePhone": "+44 (0)23 9284 2994",
                "email": "sci.admissions@port.ac.uk",
                "info": ", School of Pharmacy and Biomedical Sciences & Environment are located in this building.",
                "address": "White Swan Road, Portsmouth, PO1 2DT",
                "lng": "-1.0949082374572",
                "lat": "50.79635636080029"
            }, {
                "id": 20,
                "buildingName": "University Library",
                "department": "University Library",
                "telePhone": "+44 (0)23 9284 3228",
                "email": "elibrary@port.ac.uk",
                "info": " is located in this building. You can search for different reading materials, journals and books at this department.",
                "address": "Cambridge Road, Portsmouth, P01 2ST",
                "lng": "-2.86999988555906",
                "lat": "55.743269982050535"
            }, {
                "id": 21,
                "buildingName": "William Beatty Building",
                "department": "Dental Academy",
                "telePhone": "+44 (0) 23 9284 8484 ",
                "email": "info.centre@port.ac.uk",
                "info": " is located in this building.",
                "address": "Hampshire Terrace, Portsmouth, PO1 2QG",
                "lng": "-1.0967792272567",
                "lat": "50.79351441132123"
            }, {
                "id": 22,
                "buildingName": "Wiltshire Building",
                "department": "University of Portsmouth",
                "telePhone": "+44 (0)23 9284 6312",
                "email": "psychology@port.ac.uk",
                "info": " is located in this building.",
                "address": "Hampshire Terrace, Portsmouth, PO1 2EG",
                "lng": "-1.095647335052",
                "lat": "50.7948152230962"
            }, {
                "id": 23,
                "buildingName": "Lion Gate Building",
                "department": "Department of Mathematics",
                "telePhone": "+44 (0) 23 9284 6367",
                "email": "maths@port.ac.uk",
                "info": " is located in this building. Undergraduate ambassador scheme, very supportive environment to study mathematics and a year industry is avialable on this department.",
                "address": "Lion Terrace, Portsmouth, PO1 3HF",
                "lng": "-1.0986186265945",
                "lat": "50.79893891086382"
            }

        ];

    return {
        findById: findById,
        findByName: findByName
    };
}());