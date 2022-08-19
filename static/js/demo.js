var dataset = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

// var colors = ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd'];
// var colors = ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#e0e0e0', '#bababa', '#878787', '#4d4d4d', '#1a1a1a'];
var colors = ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#e4b32d', 'rgb(177, 165, 61)', '#47b639', '#2eb88c', '#3288bd', '#5e4fa2'];

var width = document.querySelector('.chart-wrapper').offsetWidth;
var height = document.querySelector('.chart-wrapper').offsetHeight;
var minOfWH = Math.min(width, height) / 2;
var initialAnimDelay = 500;
var arcAnimDelay = 200;
var arcAnimDur = 3000;
var radius;

//calculate minimum of width and height to set chart radius
if (minOfWH > 200) {
	radius = 200;
} else {
	radius = minOfWH / 1.2;
}

// append svg
var svg = d3.select('.chart-wrapper').append('svg')
		.attr({
				'width': width,
				'height': height,
				'class': 'pieChart'
		})
		.append('g');

svg.attr({
		'transform': 'translate(' + width / 2 + ',' + height / 2 + ')'
});

// for drawing slices
var arc = d3.svg.arc()
		.outerRadius(radius * 0.6)
		.innerRadius(radius * 0.45);

// for labels and polylines
var outerArc = d3.svg.arc()
		.innerRadius(radius * 0.99)
		.outerRadius(radius * 0.99);

// d3 color generator
var c10 = d3.scale.category10();

var pie = d3.layout.pie()
		.value(function(d) {
				return d;
		});

var draw = function() {

		svg.append("g")
				.attr("class", "lines");
		svg.append("g")
				.attr("class", "slices");
		svg.append("g")
				.attr("class", "labels");

		// define slice
		var slice = svg.select('.slices')
				.datum(dataset)
				.selectAll('path')
				.data(pie);
		slice
				.enter().append('path')
				.attr({
						'fill': function(d, i) {
								// slice color 								
								return colors[i];
						},
						'd': arc,
						'stroke-width': '25px'
				})
				.attr('transform', function(d, i) {
						return 'rotate(-180, 0, 0)';
				})
				.style('opacity', 0)
				.transition()
				.delay(function(d, i) {
						return (i * arcAnimDelay) + initialAnimDelay;
				})
				.duration(arcAnimDur)
				.ease('elastic')
				.style('opacity', 1)
				.attr({
						'transform': 'rotate(0,0,0)',
						'stroke-width': '5px'
				});

		function midAngle(d) {
				return d.startAngle + (d.endAngle - d.startAngle) / 2;
		}

		var text = svg.select(".labels").selectAll("text")
				.data(pie(dataset));

		text.enter()
				.append('text')
				.attr('dy', '1px')
				.style("opacity", 0)
				.style('fill', function(d, i) {
						return colors[i];
				})
				.text(function(d, i) {
						if (i==0)
							return "مهندسی کامپیوتر";
						else if (i==1)
							return "مهندسی شیمی";
						else if (i==2)
							return "مهندسی مکانیک";
						else if (i==3)
							return "مهندسی صنایع";
						else if (i==4)
							return "مهندسی برق";
						else if (i==5)
							return "مهندسی مواد";
						else if (i==6)
							return "مهندسی معدن";
						else if (i==7)
							return "مهندسی عمران";
						else if (i==8)
							return "مهندسی پلیمر";
						else if (i==9)
							return "مهندسی نفت";
						else if (i==10)
							return "علوم مهندسی  ";
				})


				.attr('transform', function(d) {
						// calculate outerArc centroid for 'this' slice
						var pos = outerArc.centroid(d);
						// define left and right alignment of text labels 							
						pos[0] = radius * (midAngle(d) < Math.PI ? 1 : -1);
						return "translate(" + pos + ")";
				})
				.style('text-anchor', function(d) {
						return midAngle(d) < Math.PI ? "start" : "end";
				})
				.transition()
				.delay(function(d, i) {
						return arcAnimDur + (i * 250);
				})
				.duration(1000)
				.style('opacity', 1);

		var polyline = svg.select(".lines").selectAll("polyline")
				.data(pie(dataset));

		polyline.enter()
				.append("polyline")
				.style("opacity", 0)
				.attr('points', function(d) {
						var pos = outerArc.centroid(d);
						pos[0] = radius * 0.95 * (midAngle(d) < Math.PI ? 1 : -1);
						return [arc.centroid(d), arc.centroid(d), arc.centroid(d)];
				})
				.transition()
				.delay(function(d, i) {
						return i * 250;
				})
				.duration(1000)
				.delay(function(d, i) {
						return arcAnimDur + (i * 250);
				})
				.attr('points', function(d) {
						var pos = outerArc.centroid(d);
						pos[0] = radius * 0.95 * (midAngle(d) < Math.PI ? 1 : -1);
						return [arc.centroid(d), outerArc.centroid(d), pos];
				})
				.style('opacity', 0.5);
};

draw();

button = document.querySelector('button');

var replay = function() {

		d3.selectAll('.slices').transition().ease('back').duration(500).delay(0).style('opacity', 0).attr('transform', 'translate(0, 250)').remove();
		d3.selectAll('.lines').transition().ease('back').duration(500).delay(100).style('opacity', 0).attr('transform', 'translate(0, 250)').remove();
		d3.selectAll('.labels').transition().ease('back').duration(500).delay(200).style('opacity', 0).attr('transform', 'translate(0, 250)').remove();

		setTimeout(draw, 800);

}


var x = document.getElementsByTagName("path");

var a = document.getElementById("collapse3");
a.style.display = 'block';
var b = document.getElementById("collapse4");
b.style.display = 'none';
var c = document.getElementById("collapse5");
c.style.display = 'none';
var d = document.getElementById("collapse6");
d.style.display = 'none';
var e = document.getElementById("collapse7");
e.style.display = 'none';
var f = document.getElementById("collapse8");
f.style.display = 'none';
var g = document.getElementById("collapse9");
g.style.display = 'none';
var h = document.getElementById("collapse10");
h.style.display = 'none';
var i = document.getElementById("collapse11");
i.style.display = 'none';
var j = document.getElementById("collapse12");
j.style.display = 'none';


$(x[0]).click(function(){
b.style.display = 'none';
c.style.display = 'none';
d.style.display = 'none';
e.style.display = 'none';
f.style.display = 'none';
g.style.display = 'none';
h.style.display = 'none';
i.style.display = 'none';
j.style.display = 'none';
});

$(x[1]).click(function(){
b.style.display = 'block';
a.style.display = 'none';
c.style.display = 'none';
d.style.display = 'none';
e.style.display = 'none';
f.style.display = 'none';
g.style.display = 'none';
h.style.display = 'none';
i.style.display = 'none';
j.style.display = 'none';
});

$(x[2]).click(function(){
c.style.display = 'block';
b.style.display = 'none';
a.style.display = 'none';
d.style.display = 'none';
e.style.display = 'none';
f.style.display = 'none';
g.style.display = 'none';
h.style.display = 'none';
i.style.display = 'none';
j.style.display = 'none';
});

$(x[3]).click(function(){
	d.style.display = 'block';
b.style.display = 'none';
c.style.display = 'none';
a.style.display = 'none';
e.style.display = 'none';
f.style.display = 'none';
g.style.display = 'none';
h.style.display = 'none';
i.style.display = 'none';
j.style.display = 'none';
});

$(x[4]).click(function(){
	e.style.display = 'block';
b.style.display = 'none';
c.style.display = 'none';
d.style.display = 'none';
a.style.display = 'none';
f.style.display = 'none';
g.style.display = 'none';
h.style.display = 'none';
i.style.display = 'none';
j.style.display = 'none';
});

$(x[5]).click(function(){
	f.style.display = 'block';
b.style.display = 'none';
c.style.display = 'none';
d.style.display = 'none';
e.style.display = 'none';
a.style.display = 'none';
g.style.display = 'none';
h.style.display = 'none';
i.style.display = 'none';
j.style.display = 'none';
});

$(x[6]).click(function(){
	g.style.display = 'block';
b.style.display = 'none';
c.style.display = 'none';
d.style.display = 'none';
e.style.display = 'none';
f.style.display = 'none';
a.style.display = 'none';
h.style.display = 'none';
i.style.display = 'none';
j.style.display = 'none';
});

$(x[7]).click(function(){
	h.style.display = 'block';
b.style.display = 'none';
c.style.display = 'none';
d.style.display = 'none';
e.style.display = 'none';
f.style.display = 'none';
g.style.display = 'none';
a.style.display = 'none';
i.style.display = 'none';
j.style.display = 'none';
});

$(x[8]).click(function(){
	i.style.display = 'block';
b.style.display = 'none';
c.style.display = 'none';
d.style.display = 'none';
e.style.display = 'none';
f.style.display = 'none';
g.style.display = 'none';
h.style.display = 'none';
a.style.display = 'none';
j.style.display = 'none';
});

$(x[9]).click(function(){
	j.style.display = 'block';

b.style.display = 'none';
c.style.display = 'none';
d.style.display = 'none';
e.style.display = 'none';
f.style.display = 'none';
g.style.display = 'none';
h.style.display = 'none';
i.style.display = 'none';
a.style.display = 'none';
});

