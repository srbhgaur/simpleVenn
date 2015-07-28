HTMLWidgets.widget({

  name: 'simpleVenn',

  type: 'output',

  initialize: function(el, width, height) {

    return {
      // TODO: add instance fields as required
    }

  },

  renderValue: function(el, x, instance) {
      var vis = d3.select("#venn").append("svg");
       var drawCircles = function(){
        var circles = vis.selectAll("circle")
            .data(circledata)
            .enter()
            .append("circle")
            .attr("opacity", 0.5)
            .attr("fill", function(d){return d.color;})
            .attr("cx", function(d){return d.cx;})
            .attr("cy", function(d){return d.cy;})
            .attr("r", function(d){return d.r;})
      }
      var assignLabels =function(){
        var labels = vis.append("svg").selectAll("text")
                        .data(labelData)
                        .enter()
                        .append("text")
                        .text(function(d) {return d.label})
                        .attr("x",function(d) {return d.x})
                        .attr("y",function(d) {return d.y});
      }
      //SimpleVenn Fixed numbers 2/3 Fixed Area
      if(x.count==2){
        //Make two circles and label them
        var circledata = [{"cx":50,"cy":50,"r":50,"color":"red"},
                          {"cx":120,"cy":50,"r":50,"color":"blue"}];
        var labelData  = [{"label": (x.labels[0]||"A") + " " + x.setdata[0].size,"x":30,"y":30},
                          {"label": (x.labels[1]||"B") + " " + x.setdata[1].size,"x":100,"y":30},
                          {"label": x.setdata[2].size,"x":80,"y":50}]
        drawCircles();
        assignLabels();

      } else if(x.count==3){
        //Make two circles and label them
         var circledata = [{"cx":50,"cy":50,"r":50,"color":"red"},
                          {"cx":120,"cy":50,"r":50,"color":"blue"},
                          {"cx":85,"cy":111,"r":50,"color":"green"}];
        var labelData  = [{"label": (x.labels[0]||"A") + " " + x.setdata[0].size,"x":30,"y":30},
                          {"label": (x.labels[1]||"B") + " " + x.setdata[1].size,"x":100,"y":30},
                          {"label": (x.labels[2]||"C") + " " + x.setdata[0].size,"x":80,"y":111},
                          {"label": "AB " + x.setdata[3].size,"x":80,"y":50},
                          {"label": "AC " + x.setdata[4].size,"x":50,"y":90},
                          {"label": "BC " + x.setdata[5].size,"x":110,"y":90},
                          {"label": "ABC " + x.setdata[6].size,"x":80,"y":70}]
        drawCircles();
        assignLabels();
      }


      //SimpleVenn Fixed numbers Area as per value

  },

  resize: function(el, width, height, instance) {

  }

});
