am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);

var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())
networkSeries.dataFields.linkWith = "linkWith";
networkSeries.dataFields.name = "name";
networkSeries.dataFields.id = "name";
networkSeries.dataFields.value = "value";
networkSeries.dataFields.children = "children";
networkSeries.dataFields.description = "description"
networkSeries.dataFields.collapsed = "collapsed";
networkSeries.dataFields.fixed = "fixed";

networkSeries.nodes.template.label.text = "{name}"
networkSeries.fontSize = 15;
networkSeries.linkWithStrength = 0;

var nodeTemplate = networkSeries.nodes.template;
nodeTemplate.tooltipText = "{description}";
nodeTemplate.fillOpacity = 1;
nodeTemplate.label.hideOversized = true;
nodeTemplate.label.truncate = true;

var linkTemplate = networkSeries.links.template;
linkTemplate.strokeWidth = 1;
var linkHoverState = linkTemplate.states.create("hover");
linkHoverState.properties.strokeOpacity = 1;
linkHoverState.properties.strokeWidth = 2;

nodeTemplate.events.on("over", function (event) {
    var dataItem = event.target.dataItem;
    dataItem.childLinks.each(function (link) {
        link.isHover = true;
    })
})

nodeTemplate.events.on("out", function (event) {

    var dataItem = event.target.dataItem;
    dataItem.childLinks.each(function (link) {
        link.isHover = false;
    })
})

networkSeries.data = [  
   {  
      "name":"1 \n علایقت رو بشناس",
      
      "description":"تست شخصیت رو به رایگان بده و ببین چه حرفه هایی برات مناسبه",
      "value":10,
      "collapsed": true,
      "linkWith":[  
         "2 \n یاد بگیر"
      ],
      "children":[
      	 {
      		"name":"تست هالند",
      		"value":5
         }
      ]
   },
   {  
      "name":"2 \n یاد بگیر",
      "fixed": true,
      "collapsed": true,
      "description":"اطلاعات مورد نیازتو با دوره ها و ویدیوهای دستچین شده مختص خودت یاد بگیر",
      "value":10,
      "linkWith":[  
         "1 \n علایقت رو بشناس",
         "3 \n درآمد کسب کن"
         
      ],
      "children":[  
         {  
            "name":"مجله فنجو",
            "value":7
         },
         {  
            "name":"ویدیوهای آموزشی",
            "value":7
         },
         {  
            "name":"بازی های پرسشی",
            "value":7
         }
      ]
   },
   {  
      "name":"3 \n درآمد کسب کن",
      "collapsed": true,
      "description":"اگه مهارتی بلدی با آموزشش به بقیه درآمد کسب کن",
      "value":10,
      "linkWith":[  
         "2 \n یاد بگیر"
      ],
      "children":[  
         {  
            "name":"امتیاز بگیر",
            "description":"هر ۵۰ امتاز کلی تخفیف رو دوره های بعدی",
            "value":6
         },
         {  
            "name":"کوییزا رو حل کن",
            "description":"هم بهتر یاد بگیر و هم امتیازتو ببر بالا که تخفیف بگیری!",
            "value":7
         } ,
         {  
            "name":"کوییز طراحی کن",
            "description":"از چیزایی که دیدی پرسش بساز و امتیازتو ببر بالا",
            "value":6
         } ,
         {  
            "name":"یاد دادن به بقیه",
            "description":"چیزایی که بلدی رو به بقیه آموزش بده و پول دربیار",
            "value":7
         } ,

              ]
   }
   // {  
   //    "name":"Chandler",
   //    "value":167,
   //    "linkWith":[  
   //       "Joey",
   //       "Phoebe"
   //    ],
   //    "children":[  
   //       {  
   //          "name":"Aurora",
   //          "value":2
   //       }
   //    ]
   // },
   // {  
   //    "name":"Rachel",
   //    "value":158,
   //    "linkWith":[  
   //       "Chandler",
   //       "Ross",
   //       "Joey",
   //       "Phoebe",
   //       "Mr Geller",
   //       "Mrs Geller"
   //    ],
   //    "children":[  
   //       {  
   //          "name":"Paolo",
   //          "value":5
   //       }
   //    ]
   // },
   // {  
   //    "name":"Joey",
   //    "value":88,
   //    "linkWith":[  
   //       "Phoebe",
   //       "Janice",
   //       "Mrs Green",
   //       "Kathy",
   //       "Emily",
   //       "Charlie"
   //    ],
   //    "children":[  
   //       {  
   //          "name":"Lorraine",
   //          "value":2
   //       }
      // ]
   // }
];


}); // end am4core.ready()
