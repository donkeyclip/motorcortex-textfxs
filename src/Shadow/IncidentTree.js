export default (CSSEffect, colorsRGB, duration) => [
  new CSSEffect(
    {
      animatedAttrs: {
        textShadow: ` 5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 0), 
          15px 15px 0px rgba(${colorsRGB[2]}, 0), 
          20px 20px 0px rgba(${colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
      },
      initialValues: {
        textShadow: `5px 5px 0px rgba(${colorsRGB[0]},0), 
          10px 10px 0px rgba(${colorsRGB[1]}, 0), 
          15px 15px 0px rgba(${colorsRGB[2]}, 0), 
          20px 20px 0px rgba(${colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
      }
    },
    {
      duration,
      selector: `.text`
    }
  ),

  new CSSEffect(
    {
      animatedAttrs: {
        textShadow: ` 5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${colorsRGB[2]}, 0), 
          20px 20px 0px rgba(${colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
      },
      initialValues: {
        textShadow: `5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 0), 
          15px 15px 0px rgba(${colorsRGB[2]}, 0), 
          20px 20px 0px rgba(${colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
      }
    },
    {
      duration,
      selector: `.text`
    }
  ),
  new CSSEffect(
    {
      animatedAttrs: {
        textShadow: ` 5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
      },
      initialValues: {
        textShadow: `5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${colorsRGB[2]}, 0), 
          20px 20px 0px rgba(${colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
      }
    },
    {
      duration,
      selector: `.text`
    }
  ),

  new CSSEffect(
    {
      animatedAttrs: {
        textShadow: ` 5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${colorsRGB[3]}, 1), 
          25px 25px 0px rgba(${colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
      },
      initialValues: {
        textShadow: `5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
      }
    },
    {
      duration,
      selector: `.text`
    }
  ),

  new CSSEffect(
    {
      animatedAttrs: {
        textShadow: ` 5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${colorsRGB[3]}, 1), 
          25px 25px 0px rgba(${colorsRGB[4]}, 1), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
      },
      initialValues: {
        textShadow: `5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${colorsRGB[3]}, 1), 
          25px 25px 0px rgba(${colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
      }
    },
    {
      duration,
      selector: `.text`
    }
  ),

  new CSSEffect(
    {
      animatedAttrs: {
        textShadow: ` 5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${colorsRGB[3]}, 1), 
          25px 25px 0px rgba(${colorsRGB[4]}, 1), 
          30px 30px 0px rgba(${colorsRGB[5]}, 1), 
          35px 35px 0px rgba(${colorsRGB[5]}, 1), 
          40px 40px 0px rgba(${colorsRGB[5]}, 1), 
          45px 45px 0px rgba(${colorsRGB[5]}, 1)`
      },
      initialValues: {
        textShadow: `5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${colorsRGB[3]}, 1), 
          25px 25px 0px rgba(${colorsRGB[4]}, 1), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
      }
    },
    {
      duration,
      selector: `.text`
    }
  ),

  ///REVERSE

  new CSSEffect(
    {
      animatedAttrs: {
        textShadow: `5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${colorsRGB[3]}, 1), 
          25px 25px 0px rgba(${colorsRGB[4]}, 1), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
      },
      initialValues: {
        textShadow: ` 5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${colorsRGB[3]}, 1), 
          25px 25px 0px rgba(${colorsRGB[4]}, 1), 
          30px 30px 0px rgba(${colorsRGB[5]}, 1), 
          35px 35px 0px rgba(${colorsRGB[5]}, 1), 
          40px 40px 0px rgba(${colorsRGB[5]}, 1), 
          45px 45px 0px rgba(${colorsRGB[5]}, 1)`
      }
    },
    {
      duration,
      selector: `.text`
    }
  ),
  new CSSEffect(
    {
      animatedAttrs: {
        textShadow: `5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${colorsRGB[3]}, 1), 
          25px 25px 0px rgba(${colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
      },
      initialValues: {
        textShadow: ` 5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${colorsRGB[3]}, 1), 
          25px 25px 0px rgba(${colorsRGB[4]}, 1), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
      }
    },
    {
      duration,
      selector: `.text`
    }
  ),
  new CSSEffect(
    {
      animatedAttrs: {
        textShadow: `5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
      },
      initialValues: {
        textShadow: ` 5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${colorsRGB[3]}, 1), 
          25px 25px 0px rgba(${colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
      }
    },
    {
      duration,
      selector: `.text`
    }
  ),
  new CSSEffect(
    {
      animatedAttrs: {
        textShadow: `5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${colorsRGB[2]}, 0), 
          20px 20px 0px rgba(${colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
      },
      initialValues: {
        textShadow: ` 5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
      }
    },
    {
      duration,
      selector: `.text`
    }
  ),
  new CSSEffect(
    {
      animatedAttrs: {
        textShadow: `5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 0), 
          15px 15px 0px rgba(${colorsRGB[2]}, 0), 
          20px 20px 0px rgba(${colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
      },
      initialValues: {
        textShadow: ` 5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${colorsRGB[2]}, 0), 
          20px 20px 0px rgba(${colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
      }
    },
    {
      duration,
      selector: `.text`
    }
  ),
  new CSSEffect(
    {
      animatedAttrs: {
        textShadow: `5px 5px 0px rgba(${colorsRGB[0]},0), 
          10px 10px 0px rgba(${colorsRGB[1]}, 0), 
          15px 15px 0px rgba(${colorsRGB[2]}, 0), 
          20px 20px 0px rgba(${colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
      },
      initialValues: {
        textShadow: ` 5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 0), 
          15px 15px 0px rgba(${colorsRGB[2]}, 0), 
          20px 20px 0px rgba(${colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
      }
    },
    {
      duration,
      selector: `.text`
    }
  )
];
