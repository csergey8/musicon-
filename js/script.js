$(function(){
  if($(window).width() > 960){
    $('body').parallax({
      'elements': [
        {
          'selector': '.tria',
          'properties': {
            'x': {
              'right': {
                'initial': 10,
                'multiplier': 0.0000004,
                'unit': '%',
                'invert': false
              }
            },
            'y': {
              'top': {
                'initial': -19,
                'multiplier': 0.004,
                'unit': '%',
                'invert': true
              }
            }
          }
        },
        {
          'selector': '.lines-dot',
          'properties': {
            'x': {
              'left': {
                'initial': 0,
                'multiplier': 0.004,
                'unit': 'rem',
                'invert': false
              }
            },
            'y': {
              'bottom': {
                'initial': 0,
                'multiplier': 0.004,
                'unit': 'rem',
                'invert': true
              }
            }
          }
        },
        {
          'selector': '.plus-two',
          'properties': {
            'x': 
              {
                'left': {
                  'initial': -20,
                  'multiplier': 0.004,
                  'unit': '%',
                  'invert': true
                }
            },
            'y': {
              'top': {
                'initial': 37,
                'multiplier': 0.004,
                'unit': '%',
                'invert': false
              }
            }
          }
        },
        {
          'selector': '.line-wave',
          'properties': {
            'x': 
              {
                'right': {
                  'initial': -76,
                  'multiplier': 0.004,
                  'unit': '%',
                  'invert': true
                }
            },
            'y': {
              'top': {
                'initial': 14,
                'multiplier': 0.004,
                'unit': '%',
                'invert': false
              }
            }
          }
        },
        {
          'selector': '.ellipse',
          'properties': {
            'x': 
              {
                'right': {
                  'initial': -10,
                  'multiplier': 0.008,
                  'unit': 'px',
                  'invert': true
                }
            },
            'y': {
              'bottom': {
                'initial': 14,
                'multiplier': 0.008,
                'unit': 'px',
                'invert': false
              }
            }
          }
        },
        {
          'selector': '.rag-n-bone',
          'properties': {
            'x': 
              {
                'right': {
                  'initial': -10,
                  'multiplier': 0.004,
                  'unit': 'px',
                  'invert': true
                }
            }
          }
        }

      ]
    })
  } 
});