exports.id = 212;
exports.ids = [212];
exports.modules = {

/***/ 800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Container)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(731);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(517);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/Footer.js




const ExternalLink = ({
  href,
  children
}) => /*#__PURE__*/jsx_runtime_.jsx("a", {
  className: "text-gray-500 hover:text-gray-600 transition",
  target: "_blank",
  rel: "noopener noreferrer",
  href: href,
  children: children
});

function Footer() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
    className: "flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8",
    children: [/*#__PURE__*/jsx_runtime_.jsx("hr", {
      className: "w-full border-1 border-gray-200 dark:border-gray-800 mb-8"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col space-y-4",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "text-gray-500 hover:text-gray-600 transition",
            children: "Home"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/projects",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "text-gray-500 hover:text-gray-600 transition",
            children: "Projects"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/about",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "text-gray-500 hover:text-gray-600 transition",
            children: "About"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/files/bbagdasarian_resume.pdf",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "text-gray-500 hover:text-gray-600 transition",
            children: "Resume"
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col space-y-4",
        children: [/*#__PURE__*/jsx_runtime_.jsx(ExternalLink, {
          href: "https://github.com/ahappypie",
          children: "GitHub"
        }), /*#__PURE__*/jsx_runtime_.jsx(ExternalLink, {
          href: "https://www.linkedin.com/in/brian-bagdasarian-a8a497102",
          children: "LinkedIn"
        })]
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./components/container.js
const _excluded = ["children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









function Container(props) {
  const {
    0: mounted,
    1: setMounted
  } = (0,external_react_.useState)(false);
  const {
    resolvedTheme,
    setTheme
  } = (0,external_next_themes_.useTheme)(); // After mounting, we have access to the theme

  (0,external_react_.useEffect)(() => setMounted(true), []);

  const {
    children
  } = props,
        customMeta = _objectWithoutProperties(props, _excluded);

  const router = (0,router_.useRouter)();

  const meta = _objectSpread({
    title: 'Brian Bagdasarian – Data Platform Engineer',
    description: `Solving foundational problems`,
    image: 'https://ahappypie.github.io/images/thumbnail.jpg',
    type: 'website'
  }, customMeta);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "bg-white dark:bg-black",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: meta.title
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "robots",
        content: "follow, index"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        content: meta.description,
        name: "description"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:url",
        content: `https://ahappypie.github.io${router.asPath}`
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "canonical",
        href: `https://ahappypie.github.io${router.asPath}`
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:type",
        content: meta.type
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:site_name",
        content: "Brian Bagdasarian"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:description",
        content: meta.description
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:title",
        content: meta.title
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:image",
        content: meta.image
      }), meta.date && /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "article:published_time",
        content: meta.date
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
      className: "flex items-center justify-between w-full max-w-4xl p-8 mx-auto my-0 text-gray-900 bg-white sticky-nav md:my-8 dark:bg-black bg-opacity-60 dark:text-gray-100",
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "#skip",
        className: "skip-nav",
        children: "Skip to content"
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        "aria-label": "Toggle Dark Mode",
        type: "button",
        className: "w-10 h-10 p-3 bg-gray-100 rounded dark:bg-gray-700",
        onClick: () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark'),
        children: mounted && /*#__PURE__*/jsx_runtime_.jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "currentColor",
          stroke: "currentColor",
          className: "w-4 h-4 text-gray-800 dark:text-gray-200",
          children: resolvedTheme === 'dark' ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z",
              fill: "currentColor"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M11 0H13V4.06189C12.6724 4.02104 12.3387 4 12 4C11.6613 4 11.3276 4.02104 11 4.06189V0ZM7.0943 5.68018L4.22173 2.80761L2.80752 4.22183L5.6801 7.09441C6.09071 6.56618 6.56608 6.0908 7.0943 5.68018ZM4.06189 11H0V13H4.06189C4.02104 12.6724 4 12.3387 4 12C4 11.6613 4.02104 11.3276 4.06189 11ZM5.6801 16.9056L2.80751 19.7782L4.22173 21.1924L7.0943 18.3198C6.56608 17.9092 6.09071 17.4338 5.6801 16.9056ZM11 19.9381V24H13V19.9381C12.6724 19.979 12.3387 20 12 20C11.6613 20 11.3276 19.979 11 19.9381ZM16.9056 18.3199L19.7781 21.1924L21.1923 19.7782L18.3198 16.9057C17.9092 17.4339 17.4338 17.9093 16.9056 18.3199ZM19.9381 13H24V11H19.9381C19.979 11.3276 20 11.6613 20 12C20 12.3387 19.979 12.6724 19.9381 13ZM18.3198 7.0943L21.1923 4.22183L19.7781 2.80762L16.9056 5.6801C17.4338 6.09071 17.9092 6.56608 18.3198 7.0943Z",
              fill: "currentColor"
            })]
          }) : /*#__PURE__*/jsx_runtime_.jsx("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M12.2256 2.00253C9.59172 1.94346 6.93894 2.9189 4.92893 4.92891C1.02369 8.83415 1.02369 15.1658 4.92893 19.071C8.83418 22.9763 15.1658 22.9763 19.0711 19.071C21.0811 17.061 22.0565 14.4082 21.9975 11.7743C21.9796 10.9772 21.8669 10.1818 21.6595 9.40643C21.0933 9.9488 20.5078 10.4276 19.9163 10.8425C18.5649 11.7906 17.1826 12.4053 15.9301 12.6837C14.0241 13.1072 12.7156 12.7156 12 12C11.2844 11.2844 10.8928 9.97588 11.3163 8.0699C11.5947 6.81738 12.2094 5.43511 13.1575 4.08368C13.5724 3.49221 14.0512 2.90664 14.5935 2.34046C13.8182 2.13305 13.0228 2.02041 12.2256 2.00253ZM17.6569 17.6568C18.9081 16.4056 19.6582 14.8431 19.9072 13.2186C16.3611 15.2643 12.638 15.4664 10.5858 13.4142C8.53361 11.362 8.73568 7.63895 10.7814 4.09281C9.1569 4.34184 7.59434 5.09193 6.34315 6.34313C3.21895 9.46732 3.21895 14.5326 6.34315 17.6568C9.46734 20.781 14.5327 20.781 17.6569 17.6568Z",
            fill: "currentColor"
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "p-1 text-gray-900 sm:p-4 dark:text-gray-100",
            children: "Home"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/projects",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "p-1 text-gray-900 sm:p-4 dark:text-gray-100",
            children: "Projects"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/about",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "p-1 text-gray-900 sm:p-4 dark:text-gray-100",
            children: "About"
          })
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      id: "skip",
      className: "flex flex-col justify-center px-8 bg-white dark:bg-black",
      children: [children, /*#__PURE__*/jsx_runtime_.jsx(Footer, {})]
    })]
  });
}

/***/ }),

/***/ 431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;