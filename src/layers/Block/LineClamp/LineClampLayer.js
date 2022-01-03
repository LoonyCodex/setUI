// Generated by ReScript, PLEASE EDIT WITH CARE

import * as LineClampStyleCssJs from "./LineClamp/LineClampStyle.css.js";

var lineClamp = LineClampStyleCssJs.LineClampStyle;

function resolve(i) {
  var match = i.lineClamp;
  return [match === 1 ? lineClamp.style[1] : (
                match === 2 ? lineClamp.style[2] : (
                    match === 3 ? lineClamp.style[3] : (
                        match === 4 ? lineClamp.style[4] : (
                            match === 5 ? lineClamp.style[5] : (
                                match === 6 ? lineClamp.style[6] : lineClamp.style.none
                              )
                          )
                      )
                  )
              )].join(" ");
}

var LineClampLayer = {
  resolve: resolve
};

export {
  lineClamp ,
  LineClampLayer ,
  
}
/* lineClamp Not a pure module */
