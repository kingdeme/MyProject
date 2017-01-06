;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-wrong" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M936.166471 199.460997l-312.539515 312.539515 312.539515 312.540538 0 0c14.284345 14.284345 23.123673 34.014732 23.123673 55.818339 0 43.596981-35.344008 78.931779-78.942012 78.931779-21.794397 0-41.524784-8.847514-55.809129-23.12265l0 0-312.539515-312.539515-312.540538 312.539515 0 0c-14.284345 14.275136-34.023942 23.12265-55.818339 23.12265-43.596981 0-78.931779-35.333775-78.931779-78.931779 0-21.803607 8.829095-41.533993 23.11344-55.818339l0 0 312.540538-312.540538-312.540538-312.539515 0 0c-14.284345-14.284345-23.11344-34.024965-23.11344-55.818339 0-43.587771 35.334798-78.931779 78.931779-78.931779 21.794397 0 41.533993 8.829095 55.818339 23.12265l0 0 312.540538 312.539515 312.539515-312.539515 0 0c14.284345-14.293555 34.014732-23.12265 55.809129-23.12265 43.596981 0 78.942012 35.344008 78.942012 78.931779C959.290145 165.436032 950.450817 185.176651 936.166471 199.460997L936.166471 199.460997z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)