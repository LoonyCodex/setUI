open HTML

module S = {
  let tag = HTML.S

  let contentCategories = [
    HTML.Flow,
    HTML.Phrasing,
    // HTML.Palpable,
  ]

  let permittedContent = [
    HTML.Phrasing
  ]

  let implicitARIARole = [
    HTML.None
  ]

  let permittedARIARoles = [
    HTML.Any,
  ]
}