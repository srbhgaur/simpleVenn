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

      //SimpleVenn Fixed numbers 2/3 Fixed Area
      if(x.count==2){
        //Make two circles and label them
        var circledata = [{"cx":75,"cy":75,"r":50,"color":"red"},
                          {"cx":150,"cy":75,"r":50,"color":"blue"}]
        var circles = vis.selectAll("circle")
            .data(circledata)
            .enter()
            .append("circle")
            .attr("opacity", 0.5)
            .attr("fill", function(d){return d.color;})
            .attr("cx", function(d){return d.cx;})
            .attr("cy", function(d){return d.cy;})
            .attr("r", function(d){return d.r;})

      } else if(x.count==3){
        //Make two circles and label them
         var circledata = [{"cx":50,"cy":75,"r":50,"color":"red"},
                          {"cx":126,"cy":75,"r":50,"color":"blue"},
                          {"cx":88,"cy":138,"r":50,"color":"green"}]
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


      //SimpleVenn Fixed numbers Area as per value

  },

  resize: function(el, width, height, instance) {

  }

});
