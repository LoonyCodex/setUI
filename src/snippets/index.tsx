import React from 'react'
import render from 'react-element-to-jsx-string'
import {
  CoverSnippets as Cover,
  FrameSnippets as Frame,
  FullBleedSnippets as FullBleed,
} from 'layout'
import {
  BlockQuoteSnippets as BlockQuote,
  H1Snippets as H1,
  H2Snippets as H2,
  H3Snippets as H3,
  H4Snippets as H4,
  H5Snippets as H5,
  H6Snippets as H6,
  AbbreviationSnippets as Abbreviation,
  // AttentionSnippets as Attention,
  // CitationSnippets as Citation,
  // DefinedTermSnippets as DefinedTerm,
  // DisclaimerSnippets as Disclaimer,
  // HighlightSnippets as Highlight,
  // IdiomaticSnippets as Idiomatic,
  ImportantSnippets as Important,
  NormalSnippets as Normal,
  //OutdatedSnippets as Outdated,
  //ReferenceSnippets as Reference,
  //StressEmphasisSnippets as StressEmphasis,
  //SubscriptSnippets as Subscript,
  //SuperscriptSnippets as Superscript,
  //UnarticulatedAnnotationSnippets as UnarticulatedAnnotation,
  ParagraphSnippets as Paragraph,
} from 'typography'

export default [
  ...H1,
  ...H2,
  ...H3,
  ...H4,
  ...H5,
  ...H6,
  ...Abbreviation,
  // ...Attention,
  // ...Citation,
  // ...DefinedTerm,
  // ...Disclaimer,
  // ...Highlight,
  // ...Idiomatic,
  ...Important,
  ...Normal,
  // ...Outdated,
  // ...Reference,
  // ...StressEmphasis,
  // ...Subscript,
  // ...Superscript,
  // ...UnarticulatedAnnotation,
  ...Paragraph,
  ...BlockQuote,
  ...Cover,
  ...Frame,
  ...FullBleed,
]
