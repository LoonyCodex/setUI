// Generated by ReScript, PLEASE EDIT WITH CARE

import * as HyphensStyleCssJs from "./Hyphens/HyphensStyle.css.js";
import * as WordBreakStyleCssJs from "./WordBreak/WordBreakStyle.css.js";
import * as OverflowWrapStyleCssJs from "./OverflowWrap/OverflowWrapStyle.css.js";
import * as TextOverflowStyleCssJs from "./TextOverflow/TextOverflowStyle.css.js";

var hyphens = HyphensStyleCssJs.HyphensStyle;

var overflowWrap = OverflowWrapStyleCssJs.OverflowWrapStyle;

var textOverflow = TextOverflowStyleCssJs.TextOverflowStyle;

var wordBreak = WordBreakStyleCssJs.WordBreakStyle;

function resolve(i) {
  var match = i.hyphens;
  var match$1 = i.overflowWrap;
  var match$2 = i.textOverflow;
  var match$3 = i.wordBreak;
  return [
            match === "none" ? hyphens.style.none : (
                match === "initial" ? hyphens.style.initial : (
                    match === "revert" ? hyphens.style.revert : (
                        match === "unset" ? hyphens.style.unset : (
                            match === "inherit" ? hyphens.style.inherit : (
                                match === "manual" ? hyphens.style.manual : hyphens.style.auto
                              )
                          )
                      )
                  )
              ),
            match$1 === "revert" ? overflowWrap.style.revert : (
                match$1 === "unset" ? overflowWrap.style.unset : (
                    match$1 === "inherit" ? overflowWrap.style.inherit : (
                        match$1 === "normal" ? overflowWrap.style.normal : (
                            match$1 === "anywhere" ? overflowWrap.style.anywhere : (
                                match$1 === "breakWord" ? overflowWrap.style.breakWord : overflowWrap.style.initial
                              )
                          )
                      )
                  )
              ),
            match$2 === "initial" ? textOverflow.style.initial : (
                match$2 === "ellipsis" ? textOverflow.style.ellipsis : (
                    match$2 === "revert" ? textOverflow.style.revert : (
                        match$2 === "unset" ? textOverflow.style.unset : (
                            match$2 === "inherit" ? textOverflow.style.inherit : textOverflow.style.clip
                          )
                      )
                  )
              ),
            match$3 === "breakAll" ? wordBreak.style.breakAll : (
                match$3 === "revert" ? wordBreak.style.revert : (
                    match$3 === "unset" ? wordBreak.style.unset : (
                        match$3 === "inherit" ? wordBreak.style.inherit : (
                            match$3 === "normal" ? wordBreak.style.normal : (
                                match$3 === "keepAll" ? wordBreak.style.keepAll : (
                                    match$3 === "breakWord" ? wordBreak.style.breakWord : wordBreak.style.initial
                                  )
                              )
                          )
                      )
                  )
              )
          ].join(" ");
}

var TextOverflowLayer = {
  resolve: resolve
};

export {
  hyphens ,
  overflowWrap ,
  textOverflow ,
  wordBreak ,
  TextOverflowLayer ,
  
}
/* hyphens Not a pure module */
