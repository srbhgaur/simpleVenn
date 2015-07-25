#' <Add Title>
#'
#' <Add Description>
#'
#' @import htmlwidgets
#'
#' @export
simpleVenn <- function(message, width = NULL, height = NULL) {

  # forward options using x
  x = list(
    message = message
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