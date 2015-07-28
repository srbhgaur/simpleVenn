HTMLWidgets.widget({

  name: 'simpleVenn',

  type: 'output',

  initialize: function(el, width, height) {

    return {
      // TODO: add instance fields as required
    }

  },

  renderValue: function(el, x, instance) {
      var w = x.width;  //width
      var d = 0.25*w;     //overlap d = 4/(1+1/0.25) = 0.8r
      var r = (w+d)/4;          //radius

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
                        .attr("y",function(d) {return d.y})
                        .style("text-anchor","middle")
                        .style("font-family","calibri");
      }
      //SimpleVenn Fixed numbers 2/3 Fixed Area
      if(x.count==2){
        //Make two circles and label them
        var h=2*r;    //height
        vis.attr("width",w).attr("height",h);
        var circledata = [{"cx":r,"cy":r,"r":r,"color":"red"},
                          {"cx":w-r,"cy":r,"r":r,"color":"blue"}];
        var labelData  = [{"label": x.labels[0] + " (" + x.setdata[0].size+")","x":0.6*r,"y":0.6*r},
                          {"label": x.labels[1] + " (" + x.setdata[1].size+")","x":2.6*r,"y":0.6*r},
                          {"label": "("+x.setdata[2].size+")","x":1.6*r,"y":r}]
        drawCircles();
        assignLabels();

      } else if(x.count==3){
        //Make two circles and label them
        h=2*r+(1.732/2)*(2*r-d);
         vis.attr("width",w+20).attr("height",h+20);
         var circledata = [{"cx":r,"cy":r,"r":r,"color":"red"},
                          {"cx":w-r,"cy":r,"r":r,"color":"blue"},
                          {"cx":2*r-0.5*d,"cy":r+(1.732/2)*(2*r-d),"r":r,"color":"green"}];
        var labelData  = [{"label": x.labels[0] + " (" + x.setdata[0].size+")","x":0.6*r,"y":0.6*r},
                          {"label": x.labels[1] + " (" + x.setdata[1].size+")","x":2.6*r,"y":0.6*r},
                          {"label": x.labels[2] + " (" + x.setdata[2].size+")","x":1.6*r,"y":2*r+0.1*h},
                          {"label": "("+ x.setdata[3].size+")","x":1.6*r,"y":0.8*r},
                          {"label": "("+ x.setdata[4].size+")","x":r,"y":1.7*r},
                          {"label": "("+ x.setdata[5].size+")","x":2.2*r,"y":1.7*r},
                          {"label": "("+ x.setdata[6].size+")","x":1.6*r,"y":1.4*r}]
        drawCircles();
        assignLabels();
      }


      //SimpleVenn Fixed numbers Area as per value

  },

  resize: function(el, width, height, instance) {

  }

});
