#' Create Simple Venn Diagrams
#'
#' Create Simple Venn Diagrams
#'
#' @import htmlwidgets
#'
#' @export
simpleVenn <- function(sets,labels, width = NULL, height = NULL) {

  count = length(sets)
  if(count==2){
    AB=length(intersect(sets[[1]],sets[[2]]))
    A=length(sets[[1]])-AB
    B=length(sets[[2]])-AB
    setdata = jsonlite::toJSON(data.frame(set=c("A","B","AB"),size=c(A,B,AB)))
  }
  if(count==3) {
    ABC=length(intersect(sets[[1]],intersect(sets[[2]],sets[3])))
    AB=length(intersect(sets[[1]],sets[[2]]))-ABC
    AC=length(intersect(sets[[1]],sets[[3]]))-ABC
    BC=length(intersect(sets[[2]],sets[[3]]))-ABC
    A=length(sets[[1]])-ABC-AC-AB
    B=length(sets[[2]])-ABC-AB-BC
    C=length(sets[[3]])-ABC-AC-BC
    setdata = jsonlite::toJSON(data.frame(set=c("A","B","C","AB","AC","BC","ABC"),size=c(A,B,C,AB,AC,BC,ABC)))
  }
  if(count!=2&count!=3){ print("Invalid Count") }

  #if labels not present,use names(list) or ABC

  # forward options using x
  x = list(
    setdata = setdata,
    count = count,
    labels = labels
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'simpleVenn',
    x,
    width = width,
    height = height,
    package = 'simpleVenn'
  )
}

#' Widget output function for use in Shiny
#'
#' @export
simpleVennOutput <- function(outputId, width = '100%', height = '400px'){
  shinyWidgetOutput(outputId, 'simpleVenn', width, height, package = 'simpleVenn')
}

#' Widget render function for use in Shiny
#'
#' @export
renderSimpleVenn <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  shinyRenderWidget(expr, simpleVennOutput, env, quoted = TRUE)
}

#' custom html function for sunburst
#' @import htmltools
simpleVenn_html <- function(id, style, class, ...){
  tagList(
    tags$div( id = id, class = class, style = style
              ,tags$div(class = "chart-main",id="venn")
    )
  )
}



