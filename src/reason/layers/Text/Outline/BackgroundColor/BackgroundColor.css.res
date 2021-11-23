type value = string;

type options = {
  "primary": value,
  "secondary": value,
  "black": value,
  "white": value,
  "transparent": value,
  "initial": value,
};

type output = {
  "backgroundColor": value,
}

type cssResolve = (value) => output

type variant = {
  "primary": string,
  "secondary": string,
  "black": string,
  "white": string,
  "transparent": string,
  "initial": string,
};

@module("@vanilla-extract/css") external styleVariants: (options, cssResolve) => variant = "styleVariants"

module BackgroundColor = {
  type t = [
    | #primary
    | #secondary
    | #black
    | #white
    | #transparent
    | #initial
  ]

  @genType
  type i = { "backgroundColor": t }

  @genType
  let initial = #initial;

  let style = styleVariants({
    "primary": "#0078D4",
    "secondary": "#2B88D8",
    "black": "#000000",
    "white": "#FFFFFF",
    "transparent": "transparent",
    "initial": "initial",
  }, (value) => {
    { "backgroundColor": value };
  })

  @genType
  let resolve = (t) => {
    switch (t) {
    | #primary => style["primary"]
    | #secondary => style["secondary"]
    | #black => style["black"]
    | #white => style["white"]
    | #transparent => style["transparent"]
    | #initial => style["initial"]
    };
  }
}
