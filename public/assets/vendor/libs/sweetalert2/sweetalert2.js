!(function (t, e) {
    if ("object" == typeof exports && "object" == typeof module)
        module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var n = e();
        for (var o in n) ("object" == typeof exports ? exports : t)[o] = n[o];
    }
})(self, function () {
    return (function () {
        var t = {
                78764: function (t) {
                    (t.exports = (function () {
                        "use strict";
                        function t(t, e) {
                            return o(t, n(t, e, "get"));
                        }
                        function e(t, e, o) {
                            return i(t, n(t, e, "set"), o), o;
                        }
                        function n(t, e, n) {
                            if (!e.has(t))
                                throw new TypeError(
                                    "attempted to " +
                                        n +
                                        " private field on non-instance"
                                );
                            return e.get(t);
                        }
                        function o(t, e) {
                            return e.get ? e.get.call(t) : e.value;
                        }
                        function i(t, e, n) {
                            if (e.set) e.set.call(t, n);
                            else {
                                if (!e.writable)
                                    throw new TypeError(
                                        "attempted to set read only private field"
                                    );
                                e.value = n;
                            }
                        }
                        function s(t, e) {
                            if (e.has(t))
                                throw new TypeError(
                                    "Cannot initialize the same private elements twice on an object"
                                );
                        }
                        function r(t, e, n) {
                            s(t, e), e.set(t, n);
                        }
                        const a = 100,
                            c = {},
                            l = () => {
                                c.previousActiveElement instanceof HTMLElement
                                    ? (c.previousActiveElement.focus(),
                                      (c.previousActiveElement = null))
                                    : document.body && document.body.focus();
                            },
                            u = (t) =>
                                new Promise((e) => {
                                    if (!t) return e();
                                    const n = window.scrollX,
                                        o = window.scrollY;
                                    (c.restoreFocusTimeout = setTimeout(() => {
                                        l(), e();
                                    }, a)),
                                        window.scrollTo(n, o);
                                }),
                            d = "swal2-",
                            p = [
                                "container",
                                "shown",
                                "height-auto",
                                "iosfix",
                                "popup",
                                "modal",
                                "no-backdrop",
                                "no-transition",
                                "toast",
                                "toast-shown",
                                "show",
                                "hide",
                                "close",
                                "title",
                                "html-container",
                                "actions",
                                "confirm",
                                "deny",
                                "cancel",
                                "default-outline",
                                "footer",
                                "icon",
                                "icon-content",
                                "image",
                                "input",
                                "file",
                                "range",
                                "select",
                                "radio",
                                "checkbox",
                                "label",
                                "textarea",
                                "inputerror",
                                "input-label",
                                "validation-message",
                                "progress-steps",
                                "active-progress-step",
                                "progress-step",
                                "progress-step-line",
                                "loader",
                                "loading",
                                "styled",
                                "top",
                                "top-start",
                                "top-end",
                                "top-left",
                                "top-right",
                                "center",
                                "center-start",
                                "center-end",
                                "center-left",
                                "center-right",
                                "bottom",
                                "bottom-start",
                                "bottom-end",
                                "bottom-left",
                                "bottom-right",
                                "grow-row",
                                "grow-column",
                                "grow-fullscreen",
                                "rtl",
                                "timer-progress-bar",
                                "timer-progress-bar-container",
                                "scrollbar-measure",
                                "icon-success",
                                "icon-warning",
                                "icon-info",
                                "icon-question",
                                "icon-error",
                            ].reduce((t, e) => ((t[e] = d + e), t), {}),
                            m = [
                                "success",
                                "warning",
                                "info",
                                "question",
                                "error",
                            ].reduce((t, e) => ((t[e] = d + e), t), {}),
                            g = "SweetAlert2:",
                            f = (t) => t.charAt(0).toUpperCase() + t.slice(1),
                            h = (t) => {
                                console.warn(
                                    ""
                                        .concat(g, " ")
                                        .concat(
                                            "object" == typeof t
                                                ? t.join(" ")
                                                : t
                                        )
                                );
                            },
                            b = (t) => {
                                console.error("".concat(g, " ").concat(t));
                            },
                            y = [],
                            w = (t) => {
                                y.includes(t) || (y.push(t), h(t));
                            },
                            v = (t, e) => {
                                w(
                                    '"'
                                        .concat(
                                            t,
                                            '" is deprecated and will be removed in the next major release. Please use "'
                                        )
                                        .concat(e, '" instead.')
                                );
                            },
                            C = (t) => ("function" == typeof t ? t() : t),
                            A = (t) => t && "function" == typeof t.toPromise,
                            k = (t) =>
                                A(t) ? t.toPromise() : Promise.resolve(t),
                            B = (t) => t && Promise.resolve(t) === t,
                            x = () =>
                                document.body.querySelector(
                                    ".".concat(p.container)
                                ),
                            E = (t) => {
                                const e = x();
                                return e ? e.querySelector(t) : null;
                            },
                            P = (t) => E(".".concat(t)),
                            T = () => P(p.popup),
                            L = () => P(p.icon),
                            S = () => P(p["icon-content"]),
                            O = () => P(p.title),
                            j = () => P(p["html-container"]),
                            M = () => P(p.image),
                            H = () => P(p["progress-steps"]),
                            I = () => P(p["validation-message"]),
                            D = () =>
                                E(
                                    "."
                                        .concat(p.actions, " .")
                                        .concat(p.confirm)
                                ),
                            q = () =>
                                E(".".concat(p.actions, " .").concat(p.cancel)),
                            V = () =>
                                E(".".concat(p.actions, " .").concat(p.deny)),
                            _ = () => P(p["input-label"]),
                            N = () => E(".".concat(p.loader)),
                            F = () => P(p.actions),
                            R = () => P(p.footer),
                            U = () => P(p["timer-progress-bar"]),
                            z = () => P(p.close),
                            W =
                                '\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n',
                            K = () => {
                                const t = T();
                                if (!t) return [];
                                const e = t.querySelectorAll(
                                        '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'
                                    ),
                                    n = Array.from(e).sort((t, e) => {
                                        const n = parseInt(
                                                t.getAttribute("tabindex") ||
                                                    "0"
                                            ),
                                            o = parseInt(
                                                e.getAttribute("tabindex") ||
                                                    "0"
                                            );
                                        return n > o ? 1 : n < o ? -1 : 0;
                                    }),
                                    o = t.querySelectorAll(W),
                                    i = Array.from(o).filter(
                                        (t) =>
                                            "-1" !== t.getAttribute("tabindex")
                                    );
                                return [...new Set(n.concat(i))].filter((t) =>
                                    dt(t)
                                );
                            },
                            Y = () =>
                                X(document.body, p.shown) &&
                                !X(document.body, p["toast-shown"]) &&
                                !X(document.body, p["no-backdrop"]),
                            Z = () => {
                                const t = T();
                                return !!t && X(t, p.toast);
                            },
                            $ = () => {
                                const t = T();
                                return !!t && t.hasAttribute("data-loading");
                            },
                            J = (t, e) => {
                                if (((t.textContent = ""), e)) {
                                    const n = new DOMParser().parseFromString(
                                            e,
                                            "text/html"
                                        ),
                                        o = n.querySelector("head");
                                    o &&
                                        Array.from(o.childNodes).forEach(
                                            (e) => {
                                                t.appendChild(e);
                                            }
                                        );
                                    const i = n.querySelector("body");
                                    i &&
                                        Array.from(i.childNodes).forEach(
                                            (e) => {
                                                e instanceof HTMLVideoElement ||
                                                e instanceof HTMLAudioElement
                                                    ? t.appendChild(
                                                          e.cloneNode(!0)
                                                      )
                                                    : t.appendChild(e);
                                            }
                                        );
                                }
                            },
                            X = (t, e) => {
                                if (!e) return !1;
                                const n = e.split(/\s+/);
                                for (let e = 0; e < n.length; e++)
                                    if (!t.classList.contains(n[e])) return !1;
                                return !0;
                            },
                            G = (t, e) => {
                                Array.from(t.classList).forEach((n) => {
                                    Object.values(p).includes(n) ||
                                        Object.values(m).includes(n) ||
                                        Object.values(
                                            e.showClass || {}
                                        ).includes(n) ||
                                        t.classList.remove(n);
                                });
                            },
                            Q = (t, e, n) => {
                                if (
                                    (G(t, e), e.customClass && e.customClass[n])
                                ) {
                                    if (
                                        "string" != typeof e.customClass[n] &&
                                        !e.customClass[n].forEach
                                    )
                                        return void h(
                                            "Invalid type of customClass."
                                                .concat(
                                                    n,
                                                    '! Expected string or iterable object, got "'
                                                )
                                                .concat(
                                                    typeof e.customClass[n],
                                                    '"'
                                                )
                                        );
                                    ot(t, e.customClass[n]);
                                }
                            },
                            tt = (t, e) => {
                                if (!e) return null;
                                switch (e) {
                                    case "select":
                                    case "textarea":
                                    case "file":
                                        return t.querySelector(
                                            "."
                                                .concat(p.popup, " > .")
                                                .concat(p[e])
                                        );
                                    case "checkbox":
                                        return t.querySelector(
                                            "."
                                                .concat(p.popup, " > .")
                                                .concat(p.checkbox, " input")
                                        );
                                    case "radio":
                                        return (
                                            t.querySelector(
                                                "."
                                                    .concat(p.popup, " > .")
                                                    .concat(
                                                        p.radio,
                                                        " input:checked"
                                                    )
                                            ) ||
                                            t.querySelector(
                                                "."
                                                    .concat(p.popup, " > .")
                                                    .concat(
                                                        p.radio,
                                                        " input:first-child"
                                                    )
                                            )
                                        );
                                    case "range":
                                        return t.querySelector(
                                            "."
                                                .concat(p.popup, " > .")
                                                .concat(p.range, " input")
                                        );
                                    default:
                                        return t.querySelector(
                                            "."
                                                .concat(p.popup, " > .")
                                                .concat(p.input)
                                        );
                                }
                            },
                            et = (t) => {
                                if ((t.focus(), "file" !== t.type)) {
                                    const e = t.value;
                                    (t.value = ""), (t.value = e);
                                }
                            },
                            nt = (t, e, n) => {
                                t &&
                                    e &&
                                    ("string" == typeof e &&
                                        (e = e.split(/\s+/).filter(Boolean)),
                                    e.forEach((e) => {
                                        Array.isArray(t)
                                            ? t.forEach((t) => {
                                                  n
                                                      ? t.classList.add(e)
                                                      : t.classList.remove(e);
                                              })
                                            : n
                                            ? t.classList.add(e)
                                            : t.classList.remove(e);
                                    }));
                            },
                            ot = (t, e) => {
                                nt(t, e, !0);
                            },
                            it = (t, e) => {
                                nt(t, e, !1);
                            },
                            st = (t, e) => {
                                const n = Array.from(t.children);
                                for (let t = 0; t < n.length; t++) {
                                    const o = n[t];
                                    if (o instanceof HTMLElement && X(o, e))
                                        return o;
                                }
                            },
                            rt = (t, e, n) => {
                                n === "".concat(parseInt(n)) &&
                                    (n = parseInt(n)),
                                    n || 0 === parseInt(n)
                                        ? (t.style[e] =
                                              "number" == typeof n
                                                  ? "".concat(n, "px")
                                                  : n)
                                        : t.style.removeProperty(e);
                            },
                            at = function (t) {
                                let e =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : "flex";
                                t && (t.style.display = e);
                            },
                            ct = (t) => {
                                t && (t.style.display = "none");
                            },
                            lt = (t, e, n, o) => {
                                const i = t.querySelector(e);
                                i && (i.style[n] = o);
                            },
                            ut = function (t, e) {
                                e
                                    ? at(
                                          t,
                                          arguments.length > 2 &&
                                              void 0 !== arguments[2]
                                              ? arguments[2]
                                              : "flex"
                                      )
                                    : ct(t);
                            },
                            dt = (t) =>
                                !(
                                    !t ||
                                    !(
                                        t.offsetWidth ||
                                        t.offsetHeight ||
                                        t.getClientRects().length
                                    )
                                ),
                            pt = () => !dt(D()) && !dt(V()) && !dt(q()),
                            mt = (t) => !!(t.scrollHeight > t.clientHeight),
                            gt = (t) => {
                                const e = window.getComputedStyle(t),
                                    n = parseFloat(
                                        e.getPropertyValue(
                                            "animation-duration"
                                        ) || "0"
                                    ),
                                    o = parseFloat(
                                        e.getPropertyValue(
                                            "transition-duration"
                                        ) || "0"
                                    );
                                return n > 0 || o > 0;
                            },
                            ft = function (t) {
                                let e =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1] &&
                                    arguments[1];
                                const n = U();
                                n &&
                                    dt(n) &&
                                    (e &&
                                        ((n.style.transition = "none"),
                                        (n.style.width = "100%")),
                                    setTimeout(() => {
                                        (n.style.transition = "width ".concat(
                                            t / 1e3,
                                            "s linear"
                                        )),
                                            (n.style.width = "0%");
                                    }, 10));
                            },
                            ht = () => {
                                const t = U();
                                if (!t) return;
                                const e = parseInt(
                                    window.getComputedStyle(t).width
                                );
                                t.style.removeProperty("transition"),
                                    (t.style.width = "100%");
                                const n =
                                    (e /
                                        parseInt(
                                            window.getComputedStyle(t).width
                                        )) *
                                    100;
                                t.style.width = "".concat(n, "%");
                            },
                            bt = () =>
                                "undefined" == typeof window ||
                                "undefined" == typeof document,
                            yt = '\n <div aria-labelledby="'
                                .concat(p.title, '" aria-describedby="')
                                .concat(p["html-container"], '" class="')
                                .concat(
                                    p.popup,
                                    '" tabindex="-1">\n   <button type="button" class="'
                                )
                                .concat(p.close, '"></button>\n   <ul class="')
                                .concat(
                                    p["progress-steps"],
                                    '"></ul>\n   <div class="'
                                )
                                .concat(p.icon, '"></div>\n   <img class="')
                                .concat(p.image, '" />\n   <h2 class="')
                                .concat(p.title, '" id="')
                                .concat(p.title, '"></h2>\n   <div class="')
                                .concat(p["html-container"], '" id="')
                                .concat(
                                    p["html-container"],
                                    '"></div>\n   <input class="'
                                )
                                .concat(p.input, '" id="')
                                .concat(
                                    p.input,
                                    '" />\n   <input type="file" class="'
                                )
                                .concat(p.file, '" />\n   <div class="')
                                .concat(
                                    p.range,
                                    '">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="'
                                )
                                .concat(p.select, '" id="')
                                .concat(
                                    p.select,
                                    '"></select>\n   <div class="'
                                )
                                .concat(p.radio, '"></div>\n   <label class="')
                                .concat(
                                    p.checkbox,
                                    '">\n     <input type="checkbox" id="'
                                )
                                .concat(p.checkbox, '" />\n     <span class="')
                                .concat(
                                    p.label,
                                    '"></span>\n   </label>\n   <textarea class="'
                                )
                                .concat(p.textarea, '" id="')
                                .concat(
                                    p.textarea,
                                    '"></textarea>\n   <div class="'
                                )
                                .concat(p["validation-message"], '" id="')
                                .concat(
                                    p["validation-message"],
                                    '"></div>\n   <div class="'
                                )
                                .concat(p.actions, '">\n     <div class="')
                                .concat(
                                    p.loader,
                                    '"></div>\n     <button type="button" class="'
                                )
                                .concat(
                                    p.confirm,
                                    '"></button>\n     <button type="button" class="'
                                )
                                .concat(
                                    p.deny,
                                    '"></button>\n     <button type="button" class="'
                                )
                                .concat(
                                    p.cancel,
                                    '"></button>\n   </div>\n   <div class="'
                                )
                                .concat(p.footer, '"></div>\n   <div class="')
                                .concat(
                                    p["timer-progress-bar-container"],
                                    '">\n     <div class="'
                                )
                                .concat(
                                    p["timer-progress-bar"],
                                    '"></div>\n   </div>\n </div>\n'
                                )
                                .replace(/(^|\n)\s*/g, ""),
                            wt = () => {
                                const t = x();
                                return (
                                    !!t &&
                                    (t.remove(),
                                    it(
                                        [
                                            document.documentElement,
                                            document.body,
                                        ],
                                        [
                                            p["no-backdrop"],
                                            p["toast-shown"],
                                            p["has-column"],
                                        ]
                                    ),
                                    !0)
                                );
                            },
                            vt = () => {
                                c.currentInstance.resetValidationMessage();
                            },
                            Ct = () => {
                                const t = T(),
                                    e = st(t, p.input),
                                    n = st(t, p.file),
                                    o = t.querySelector(
                                        ".".concat(p.range, " input")
                                    ),
                                    i = t.querySelector(
                                        ".".concat(p.range, " output")
                                    ),
                                    s = st(t, p.select),
                                    r = t.querySelector(
                                        ".".concat(p.checkbox, " input")
                                    ),
                                    a = st(t, p.textarea);
                                (e.oninput = vt),
                                    (n.onchange = vt),
                                    (s.onchange = vt),
                                    (r.onchange = vt),
                                    (a.oninput = vt),
                                    (o.oninput = () => {
                                        vt(), (i.value = o.value);
                                    }),
                                    (o.onchange = () => {
                                        vt(), (i.value = o.value);
                                    });
                            },
                            At = (t) =>
                                "string" == typeof t
                                    ? document.querySelector(t)
                                    : t,
                            kt = (t) => {
                                const e = T();
                                e.setAttribute(
                                    "role",
                                    t.toast ? "alert" : "dialog"
                                ),
                                    e.setAttribute(
                                        "aria-live",
                                        t.toast ? "polite" : "assertive"
                                    ),
                                    t.toast ||
                                        e.setAttribute("aria-modal", "true");
                            },
                            Bt = (t) => {
                                "rtl" ===
                                    window.getComputedStyle(t).direction &&
                                    ot(x(), p.rtl);
                            },
                            xt = (t) => {
                                const e = wt();
                                if (bt())
                                    return void b(
                                        "SweetAlert2 requires document to initialize"
                                    );
                                const n = document.createElement("div");
                                (n.className = p.container),
                                    e && ot(n, p["no-transition"]),
                                    J(n, yt);
                                const o = At(t.target);
                                o.appendChild(n), kt(t), Bt(o), Ct();
                            },
                            Et = (t, e) => {
                                t instanceof HTMLElement
                                    ? e.appendChild(t)
                                    : "object" == typeof t
                                    ? Pt(t, e)
                                    : t && J(e, t);
                            },
                            Pt = (t, e) => {
                                t.jquery ? Tt(e, t) : J(e, t.toString());
                            },
                            Tt = (t, e) => {
                                if (((t.textContent = ""), 0 in e))
                                    for (let n = 0; n in e; n++)
                                        t.appendChild(e[n].cloneNode(!0));
                                else t.appendChild(e.cloneNode(!0));
                            },
                            Lt = (() => {
                                if (bt()) return !1;
                                const t = document.createElement("div");
                                return void 0 !== t.style.webkitAnimation
                                    ? "webkitAnimationEnd"
                                    : void 0 !== t.style.animation &&
                                          "animationend";
                            })(),
                            St = (t, e) => {
                                const n = F(),
                                    o = N();
                                n &&
                                    o &&
                                    (e.showConfirmButton ||
                                    e.showDenyButton ||
                                    e.showCancelButton
                                        ? at(n)
                                        : ct(n),
                                    Q(n, e, "actions"),
                                    Ot(n, o, e),
                                    J(o, e.loaderHtml || ""),
                                    Q(o, e, "loader"));
                            };
                        function Ot(t, e, n) {
                            const o = D(),
                                i = V(),
                                s = q();
                            o &&
                                i &&
                                s &&
                                (Mt(o, "confirm", n),
                                Mt(i, "deny", n),
                                Mt(s, "cancel", n),
                                jt(o, i, s, n),
                                n.reverseButtons &&
                                    (n.toast
                                        ? (t.insertBefore(s, o),
                                          t.insertBefore(i, o))
                                        : (t.insertBefore(s, e),
                                          t.insertBefore(i, e),
                                          t.insertBefore(o, e))));
                        }
                        function jt(t, e, n, o) {
                            o.buttonsStyling
                                ? (ot([t, e, n], p.styled),
                                  o.confirmButtonColor &&
                                      ((t.style.backgroundColor =
                                          o.confirmButtonColor),
                                      ot(t, p["default-outline"])),
                                  o.denyButtonColor &&
                                      ((e.style.backgroundColor =
                                          o.denyButtonColor),
                                      ot(e, p["default-outline"])),
                                  o.cancelButtonColor &&
                                      ((n.style.backgroundColor =
                                          o.cancelButtonColor),
                                      ot(n, p["default-outline"])))
                                : it([t, e, n], p.styled);
                        }
                        function Mt(t, e, n) {
                            const o = f(e);
                            ut(
                                t,
                                n["show".concat(o, "Button")],
                                "inline-block"
                            ),
                                J(t, n["".concat(e, "ButtonText")] || ""),
                                t.setAttribute(
                                    "aria-label",
                                    n["".concat(e, "ButtonAriaLabel")] || ""
                                ),
                                (t.className = p[e]),
                                Q(t, n, "".concat(e, "Button"));
                        }
                        const Ht = (t, e) => {
                                const n = z();
                                n &&
                                    (J(n, e.closeButtonHtml || ""),
                                    Q(n, e, "closeButton"),
                                    ut(n, e.showCloseButton),
                                    n.setAttribute(
                                        "aria-label",
                                        e.closeButtonAriaLabel || ""
                                    ));
                            },
                            It = (t, e) => {
                                const n = x();
                                n &&
                                    (Dt(n, e.backdrop),
                                    qt(n, e.position),
                                    Vt(n, e.grow),
                                    Q(n, e, "container"));
                            };
                        function Dt(t, e) {
                            "string" == typeof e
                                ? (t.style.background = e)
                                : e ||
                                  ot(
                                      [document.documentElement, document.body],
                                      p["no-backdrop"]
                                  );
                        }
                        function qt(t, e) {
                            e &&
                                (e in p
                                    ? ot(t, p[e])
                                    : (h(
                                          'The "position" parameter is not valid, defaulting to "center"'
                                      ),
                                      ot(t, p.center)));
                        }
                        function Vt(t, e) {
                            e && ot(t, p["grow-".concat(e)]);
                        }
                        var _t = {
                            innerParams: new WeakMap(),
                            domCache: new WeakMap(),
                        };
                        const Nt = [
                                "input",
                                "file",
                                "range",
                                "select",
                                "radio",
                                "checkbox",
                                "textarea",
                            ],
                            Ft = (t, e) => {
                                const n = T();
                                if (!n) return;
                                const o = _t.innerParams.get(t),
                                    i = !o || e.input !== o.input;
                                Nt.forEach((t) => {
                                    const o = st(n, p[t]);
                                    o &&
                                        (zt(t, e.inputAttributes),
                                        (o.className = p[t]),
                                        i && ct(o));
                                }),
                                    e.input && (i && Rt(e), Wt(e));
                            },
                            Rt = (t) => {
                                if (!t.input) return;
                                if (!Jt[t.input])
                                    return void b(
                                        'Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(
                                            t.input,
                                            '"'
                                        )
                                    );
                                const e = Zt(t.input),
                                    n = Jt[t.input](e, t);
                                at(e),
                                    t.inputAutoFocus &&
                                        setTimeout(() => {
                                            et(n);
                                        });
                            },
                            Ut = (t) => {
                                for (let e = 0; e < t.attributes.length; e++) {
                                    const n = t.attributes[e].name;
                                    ["id", "type", "value", "style"].includes(
                                        n
                                    ) || t.removeAttribute(n);
                                }
                            },
                            zt = (t, e) => {
                                const n = tt(T(), t);
                                if (n) {
                                    Ut(n);
                                    for (const t in e) n.setAttribute(t, e[t]);
                                }
                            },
                            Wt = (t) => {
                                const e = Zt(t.input);
                                "object" == typeof t.customClass &&
                                    ot(e, t.customClass.input);
                            },
                            Kt = (t, e) => {
                                (t.placeholder && !e.inputPlaceholder) ||
                                    (t.placeholder = e.inputPlaceholder);
                            },
                            Yt = (t, e, n) => {
                                if (n.inputLabel) {
                                    const o = document.createElement("label"),
                                        i = p["input-label"];
                                    o.setAttribute("for", t.id),
                                        (o.className = i),
                                        "object" == typeof n.customClass &&
                                            ot(o, n.customClass.inputLabel),
                                        (o.innerText = n.inputLabel),
                                        e.insertAdjacentElement(
                                            "beforebegin",
                                            o
                                        );
                                }
                            },
                            Zt = (t) => st(T(), p[t] || p.input),
                            $t = (t, e) => {
                                ["string", "number"].includes(typeof e)
                                    ? (t.value = "".concat(e))
                                    : B(e) ||
                                      h(
                                          'Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(
                                              typeof e,
                                              '"'
                                          )
                                      );
                            },
                            Jt = {};
                        (Jt.text =
                            Jt.email =
                            Jt.password =
                            Jt.number =
                            Jt.tel =
                            Jt.url =
                                (t, e) => (
                                    $t(t, e.inputValue),
                                    Yt(t, t, e),
                                    Kt(t, e),
                                    (t.type = e.input),
                                    t
                                )),
                            (Jt.file = (t, e) => (Yt(t, t, e), Kt(t, e), t)),
                            (Jt.range = (t, e) => {
                                const n = t.querySelector("input"),
                                    o = t.querySelector("output");
                                return (
                                    $t(n, e.inputValue),
                                    (n.type = e.input),
                                    $t(o, e.inputValue),
                                    Yt(n, t, e),
                                    t
                                );
                            }),
                            (Jt.select = (t, e) => {
                                if (
                                    ((t.textContent = ""), e.inputPlaceholder)
                                ) {
                                    const n = document.createElement("option");
                                    J(n, e.inputPlaceholder),
                                        (n.value = ""),
                                        (n.disabled = !0),
                                        (n.selected = !0),
                                        t.appendChild(n);
                                }
                                return Yt(t, t, e), t;
                            }),
                            (Jt.radio = (t) => ((t.textContent = ""), t)),
                            (Jt.checkbox = (t, e) => {
                                const n = tt(T(), "checkbox");
                                (n.value = "1"),
                                    (n.checked = Boolean(e.inputValue));
                                const o = t.querySelector("span");
                                return J(o, e.inputPlaceholder), n;
                            }),
                            (Jt.textarea = (t, e) => {
                                $t(t, e.inputValue), Kt(t, e), Yt(t, t, e);
                                const n = (t) =>
                                    parseInt(
                                        window.getComputedStyle(t).marginLeft
                                    ) +
                                    parseInt(
                                        window.getComputedStyle(t).marginRight
                                    );
                                return (
                                    setTimeout(() => {
                                        if ("MutationObserver" in window) {
                                            const o = parseInt(
                                                window.getComputedStyle(T())
                                                    .width
                                            );
                                            new MutationObserver(() => {
                                                if (!document.body.contains(t))
                                                    return;
                                                const i = t.offsetWidth + n(t);
                                                i > o
                                                    ? (T().style.width =
                                                          "".concat(i, "px"))
                                                    : rt(T(), "width", e.width);
                                            }).observe(t, {
                                                attributes: !0,
                                                attributeFilter: ["style"],
                                            });
                                        }
                                    }),
                                    t
                                );
                            });
                        const Xt = (t, e) => {
                                const n = j();
                                n &&
                                    (Q(n, e, "htmlContainer"),
                                    e.html
                                        ? (Et(e.html, n), at(n, "block"))
                                        : e.text
                                        ? ((n.textContent = e.text),
                                          at(n, "block"))
                                        : ct(n),
                                    Ft(t, e));
                            },
                            Gt = (t, e) => {
                                const n = R();
                                n &&
                                    (ut(n, e.footer, "block"),
                                    e.footer && Et(e.footer, n),
                                    Q(n, e, "footer"));
                            },
                            Qt = (t, e) => {
                                const n = _t.innerParams.get(t),
                                    o = L();
                                if (o) {
                                    if (n && e.icon === n.icon)
                                        return ie(o, e), void te(o, e);
                                    if (e.icon || e.iconHtml) {
                                        if (
                                            e.icon &&
                                            -1 ===
                                                Object.keys(m).indexOf(e.icon)
                                        )
                                            return (
                                                b(
                                                    'Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(
                                                        e.icon,
                                                        '"'
                                                    )
                                                ),
                                                void ct(o)
                                            );
                                        at(o),
                                            ie(o, e),
                                            te(o, e),
                                            ot(
                                                o,
                                                e.showClass && e.showClass.icon
                                            );
                                    } else ct(o);
                                }
                            },
                            te = (t, e) => {
                                for (const [n, o] of Object.entries(m))
                                    e.icon !== n && it(t, o);
                                ot(t, e.icon && m[e.icon]),
                                    se(t, e),
                                    ee(),
                                    Q(t, e, "icon");
                            },
                            ee = () => {
                                const t = T();
                                if (!t) return;
                                const e = window
                                        .getComputedStyle(t)
                                        .getPropertyValue("background-color"),
                                    n = t.querySelectorAll(
                                        "[class^=swal2-success-circular-line], .swal2-success-fix"
                                    );
                                for (let t = 0; t < n.length; t++)
                                    n[t].style.backgroundColor = e;
                            },
                            ne =
                                '\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n',
                            oe =
                                '\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n',
                            ie = (t, e) => {
                                if (!e.icon && !e.iconHtml) return;
                                let n = t.innerHTML,
                                    o = "";
                                e.iconHtml
                                    ? (o = re(e.iconHtml))
                                    : "success" === e.icon
                                    ? ((o = ne),
                                      (n = n.replace(/ style=".*?"/g, "")))
                                    : "error" === e.icon
                                    ? (o = oe)
                                    : e.icon &&
                                      (o = re(
                                          {
                                              question: "?",
                                              warning: "!",
                                              info: "i",
                                          }[e.icon]
                                      )),
                                    n.trim() !== o.trim() && J(t, o);
                            },
                            se = (t, e) => {
                                if (e.iconColor) {
                                    (t.style.color = e.iconColor),
                                        (t.style.borderColor = e.iconColor);
                                    for (const n of [
                                        ".swal2-success-line-tip",
                                        ".swal2-success-line-long",
                                        ".swal2-x-mark-line-left",
                                        ".swal2-x-mark-line-right",
                                    ])
                                        lt(
                                            t,
                                            n,
                                            "backgroundColor",
                                            e.iconColor
                                        );
                                    lt(
                                        t,
                                        ".swal2-success-ring",
                                        "borderColor",
                                        e.iconColor
                                    );
                                }
                            },
                            re = (t) =>
                                '<div class="'
                                    .concat(p["icon-content"], '">')
                                    .concat(t, "</div>"),
                            ae = (t, e) => {
                                const n = M();
                                n &&
                                    (e.imageUrl
                                        ? (at(n, ""),
                                          n.setAttribute("src", e.imageUrl),
                                          n.setAttribute(
                                              "alt",
                                              e.imageAlt || ""
                                          ),
                                          rt(n, "width", e.imageWidth),
                                          rt(n, "height", e.imageHeight),
                                          (n.className = p.image),
                                          Q(n, e, "image"))
                                        : ct(n));
                            },
                            ce = (t, e) => {
                                const n = x(),
                                    o = T();
                                if (n && o) {
                                    if (e.toast) {
                                        rt(n, "width", e.width),
                                            (o.style.width = "100%");
                                        const t = N();
                                        t && o.insertBefore(t, L());
                                    } else rt(o, "width", e.width);
                                    rt(o, "padding", e.padding),
                                        e.color && (o.style.color = e.color),
                                        e.background &&
                                            (o.style.background = e.background),
                                        ct(I()),
                                        le(o, e);
                                }
                            },
                            le = (t, e) => {
                                const n = e.showClass || {};
                                (t.className = ""
                                    .concat(p.popup, " ")
                                    .concat(dt(t) ? n.popup : "")),
                                    e.toast
                                        ? (ot(
                                              [
                                                  document.documentElement,
                                                  document.body,
                                              ],
                                              p["toast-shown"]
                                          ),
                                          ot(t, p.toast))
                                        : ot(t, p.modal),
                                    Q(t, e, "popup"),
                                    "string" == typeof e.customClass &&
                                        ot(t, e.customClass),
                                    e.icon && ot(t, p["icon-".concat(e.icon)]);
                            },
                            ue = (t, e) => {
                                const n = H();
                                if (!n) return;
                                const {
                                    progressSteps: o,
                                    currentProgressStep: i,
                                } = e;
                                o && 0 !== o.length && void 0 !== i
                                    ? (at(n),
                                      (n.textContent = ""),
                                      i >= o.length &&
                                          h(
                                              "Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"
                                          ),
                                      o.forEach((t, s) => {
                                          const r = de(t);
                                          if (
                                              (n.appendChild(r),
                                              s === i &&
                                                  ot(
                                                      r,
                                                      p["active-progress-step"]
                                                  ),
                                              s !== o.length - 1)
                                          ) {
                                              const t = pe(e);
                                              n.appendChild(t);
                                          }
                                      }))
                                    : ct(n);
                            },
                            de = (t) => {
                                const e = document.createElement("li");
                                return ot(e, p["progress-step"]), J(e, t), e;
                            },
                            pe = (t) => {
                                const e = document.createElement("li");
                                return (
                                    ot(e, p["progress-step-line"]),
                                    t.progressStepsDistance &&
                                        rt(e, "width", t.progressStepsDistance),
                                    e
                                );
                            },
                            me = (t, e) => {
                                const n = O();
                                n &&
                                    (ut(n, e.title || e.titleText, "block"),
                                    e.title && Et(e.title, n),
                                    e.titleText && (n.innerText = e.titleText),
                                    Q(n, e, "title"));
                            },
                            ge = (t, e) => {
                                ce(t, e),
                                    It(t, e),
                                    ue(t, e),
                                    Qt(t, e),
                                    ae(t, e),
                                    me(t, e),
                                    Ht(t, e),
                                    Xt(t, e),
                                    St(t, e),
                                    Gt(t, e);
                                const n = T();
                                "function" == typeof e.didRender &&
                                    n &&
                                    e.didRender(n);
                            },
                            fe = () => dt(T()),
                            he = () => {
                                var t;
                                return null === (t = D()) || void 0 === t
                                    ? void 0
                                    : t.click();
                            },
                            be = () => {
                                var t;
                                return null === (t = V()) || void 0 === t
                                    ? void 0
                                    : t.click();
                            },
                            ye = () => {
                                var t;
                                return null === (t = q()) || void 0 === t
                                    ? void 0
                                    : t.click();
                            },
                            we = Object.freeze({
                                cancel: "cancel",
                                backdrop: "backdrop",
                                close: "close",
                                esc: "esc",
                                timer: "timer",
                            }),
                            ve = (t) => {
                                t.keydownTarget &&
                                    t.keydownHandlerAdded &&
                                    (t.keydownTarget.removeEventListener(
                                        "keydown",
                                        t.keydownHandler,
                                        { capture: t.keydownListenerCapture }
                                    ),
                                    (t.keydownHandlerAdded = !1));
                            },
                            Ce = (t, e, n) => {
                                ve(t),
                                    e.toast ||
                                        ((t.keydownHandler = (t) =>
                                            xe(e, t, n)),
                                        (t.keydownTarget =
                                            e.keydownListenerCapture
                                                ? window
                                                : T()),
                                        (t.keydownListenerCapture =
                                            e.keydownListenerCapture),
                                        t.keydownTarget.addEventListener(
                                            "keydown",
                                            t.keydownHandler,
                                            {
                                                capture:
                                                    t.keydownListenerCapture,
                                            }
                                        ),
                                        (t.keydownHandlerAdded = !0));
                            },
                            Ae = (t, e) => {
                                var n;
                                const o = K();
                                if (o.length)
                                    return (
                                        (t += e) === o.length
                                            ? (t = 0)
                                            : -1 === t && (t = o.length - 1),
                                        void o[t].focus()
                                    );
                                null === (n = T()) || void 0 === n || n.focus();
                            },
                            ke = ["ArrowRight", "ArrowDown"],
                            Be = ["ArrowLeft", "ArrowUp"],
                            xe = (t, e, n) => {
                                t &&
                                    (e.isComposing ||
                                        229 === e.keyCode ||
                                        (t.stopKeydownPropagation &&
                                            e.stopPropagation(),
                                        "Enter" === e.key
                                            ? Ee(e, t)
                                            : "Tab" === e.key
                                            ? Pe(e)
                                            : [...ke, ...Be].includes(e.key)
                                            ? Te(e.key)
                                            : "Escape" === e.key &&
                                              Le(e, t, n)));
                            },
                            Ee = (t, e) => {
                                if (!C(e.allowEnterKey)) return;
                                const n = tt(T(), e.input);
                                if (
                                    t.target &&
                                    n &&
                                    t.target instanceof HTMLElement &&
                                    t.target.outerHTML === n.outerHTML
                                ) {
                                    if (["textarea", "file"].includes(e.input))
                                        return;
                                    he(), t.preventDefault();
                                }
                            },
                            Pe = (t) => {
                                const e = t.target,
                                    n = K();
                                let o = -1;
                                for (let t = 0; t < n.length; t++)
                                    if (e === n[t]) {
                                        o = t;
                                        break;
                                    }
                                t.shiftKey ? Ae(o, -1) : Ae(o, 1),
                                    t.stopPropagation(),
                                    t.preventDefault();
                            },
                            Te = (t) => {
                                const e = F(),
                                    n = D(),
                                    o = V(),
                                    i = q();
                                if (!(e && n && o && i)) return;
                                const s = [n, o, i];
                                if (
                                    document.activeElement instanceof
                                        HTMLElement &&
                                    !s.includes(document.activeElement)
                                )
                                    return;
                                const r = ke.includes(t)
                                    ? "nextElementSibling"
                                    : "previousElementSibling";
                                let a = document.activeElement;
                                if (a) {
                                    for (
                                        let t = 0;
                                        t < e.children.length;
                                        t++
                                    ) {
                                        if (((a = a[r]), !a)) return;
                                        if (
                                            a instanceof HTMLButtonElement &&
                                            dt(a)
                                        )
                                            break;
                                    }
                                    a instanceof HTMLButtonElement && a.focus();
                                }
                            },
                            Le = (t, e, n) => {
                                C(e.allowEscapeKey) &&
                                    (t.preventDefault(), n(we.esc));
                            };
                        var Se = {
                            swalPromiseResolve: new WeakMap(),
                            swalPromiseReject: new WeakMap(),
                        };
                        const Oe = () => {
                                Array.from(document.body.children).forEach(
                                    (t) => {
                                        t === x() ||
                                            t.contains(x()) ||
                                            (t.hasAttribute("aria-hidden") &&
                                                t.setAttribute(
                                                    "data-previous-aria-hidden",
                                                    t.getAttribute(
                                                        "aria-hidden"
                                                    ) || ""
                                                ),
                                            t.setAttribute(
                                                "aria-hidden",
                                                "true"
                                            ));
                                    }
                                );
                            },
                            je = () => {
                                Array.from(document.body.children).forEach(
                                    (t) => {
                                        t.hasAttribute(
                                            "data-previous-aria-hidden"
                                        )
                                            ? (t.setAttribute(
                                                  "aria-hidden",
                                                  t.getAttribute(
                                                      "data-previous-aria-hidden"
                                                  ) || ""
                                              ),
                                              t.removeAttribute(
                                                  "data-previous-aria-hidden"
                                              ))
                                            : t.removeAttribute("aria-hidden");
                                    }
                                );
                            },
                            Me =
                                "undefined" != typeof window &&
                                !!window.GestureEvent,
                            He = () => {
                                if (Me && !X(document.body, p.iosfix)) {
                                    const t = document.body.scrollTop;
                                    (document.body.style.top = "".concat(
                                        -1 * t,
                                        "px"
                                    )),
                                        ot(document.body, p.iosfix),
                                        Ie();
                                }
                            },
                            Ie = () => {
                                const t = x();
                                if (!t) return;
                                let e;
                                (t.ontouchstart = (t) => {
                                    e = De(t);
                                }),
                                    (t.ontouchmove = (t) => {
                                        e &&
                                            (t.preventDefault(),
                                            t.stopPropagation());
                                    });
                            },
                            De = (t) => {
                                const e = t.target,
                                    n = x(),
                                    o = j();
                                return !(
                                    !n ||
                                    !o ||
                                    qe(t) ||
                                    Ve(t) ||
                                    (e !== n &&
                                        (mt(n) ||
                                            !(e instanceof HTMLElement) ||
                                            "INPUT" === e.tagName ||
                                            "TEXTAREA" === e.tagName ||
                                            (mt(o) && o.contains(e))))
                                );
                            },
                            qe = (t) =>
                                t.touches &&
                                t.touches.length &&
                                "stylus" === t.touches[0].touchType,
                            Ve = (t) => t.touches && t.touches.length > 1,
                            _e = () => {
                                if (X(document.body, p.iosfix)) {
                                    const t = parseInt(
                                        document.body.style.top,
                                        10
                                    );
                                    it(document.body, p.iosfix),
                                        (document.body.style.top = ""),
                                        (document.body.scrollTop = -1 * t);
                                }
                            },
                            Ne = () => {
                                const t = document.createElement("div");
                                (t.className = p["scrollbar-measure"]),
                                    document.body.appendChild(t);
                                const e =
                                    t.getBoundingClientRect().width -
                                    t.clientWidth;
                                return document.body.removeChild(t), e;
                            };
                        let Fe = null;
                        const Re = (t) => {
                                null === Fe &&
                                    (document.body.scrollHeight >
                                        window.innerHeight ||
                                        "scroll" === t) &&
                                    ((Fe = parseInt(
                                        window
                                            .getComputedStyle(document.body)
                                            .getPropertyValue("padding-right")
                                    )),
                                    (document.body.style.paddingRight =
                                        "".concat(Fe + Ne(), "px")));
                            },
                            Ue = () => {
                                null !== Fe &&
                                    ((document.body.style.paddingRight =
                                        "".concat(Fe, "px")),
                                    (Fe = null));
                            };
                        function ze(t, e, n, o) {
                            Z() ? Qe(t, o) : (u(n).then(() => Qe(t, o)), ve(c)),
                                Me
                                    ? (e.setAttribute(
                                          "style",
                                          "display:none !important"
                                      ),
                                      e.removeAttribute("class"),
                                      (e.innerHTML = ""))
                                    : e.remove(),
                                Y() && (Ue(), _e(), je()),
                                We();
                        }
                        function We() {
                            it(
                                [document.documentElement, document.body],
                                [
                                    p.shown,
                                    p["height-auto"],
                                    p["no-backdrop"],
                                    p["toast-shown"],
                                ]
                            );
                        }
                        function Ke(t) {
                            t = Je(t);
                            const e = Se.swalPromiseResolve.get(this),
                                n = Ye(this);
                            this.isAwaitingPromise
                                ? t.isDismissed || ($e(this), e(t))
                                : n && e(t);
                        }
                        const Ye = (t) => {
                            const e = T();
                            if (!e) return !1;
                            const n = _t.innerParams.get(t);
                            if (!n || X(e, n.hideClass.popup)) return !1;
                            it(e, n.showClass.popup), ot(e, n.hideClass.popup);
                            const o = x();
                            return (
                                it(o, n.showClass.backdrop),
                                ot(o, n.hideClass.backdrop),
                                Xe(t, e, n),
                                !0
                            );
                        };
                        function Ze(t) {
                            const e = Se.swalPromiseReject.get(this);
                            $e(this), e && e(t);
                        }
                        const $e = (t) => {
                                t.isAwaitingPromise &&
                                    (delete t.isAwaitingPromise,
                                    _t.innerParams.get(t) || t._destroy());
                            },
                            Je = (t) =>
                                void 0 === t
                                    ? {
                                          isConfirmed: !1,
                                          isDenied: !1,
                                          isDismissed: !0,
                                      }
                                    : Object.assign(
                                          {
                                              isConfirmed: !1,
                                              isDenied: !1,
                                              isDismissed: !1,
                                          },
                                          t
                                      ),
                            Xe = (t, e, n) => {
                                const o = x(),
                                    i = Lt && gt(e);
                                "function" == typeof n.willClose &&
                                    n.willClose(e),
                                    i
                                        ? Ge(t, e, o, n.returnFocus, n.didClose)
                                        : ze(t, o, n.returnFocus, n.didClose);
                            },
                            Ge = (t, e, n, o, i) => {
                                Lt &&
                                    ((c.swalCloseEventFinishedCallback =
                                        ze.bind(null, t, n, o, i)),
                                    e.addEventListener(Lt, function (t) {
                                        t.target === e &&
                                            (c.swalCloseEventFinishedCallback(),
                                            delete c.swalCloseEventFinishedCallback);
                                    }));
                            },
                            Qe = (t, e) => {
                                setTimeout(() => {
                                    "function" == typeof e &&
                                        e.bind(t.params)(),
                                        t._destroy && t._destroy();
                                });
                            },
                            tn = (t) => {
                                let e = T();
                                if ((e || new ti(), (e = T()), !e)) return;
                                const n = N();
                                Z() ? ct(L()) : en(e, t),
                                    at(n),
                                    e.setAttribute("data-loading", "true"),
                                    e.setAttribute("aria-busy", "true"),
                                    e.focus();
                            },
                            en = (t, e) => {
                                const n = F(),
                                    o = N();
                                n &&
                                    o &&
                                    (!e && dt(D()) && (e = D()),
                                    at(n),
                                    e &&
                                        (ct(e),
                                        o.setAttribute(
                                            "data-button-to-replace",
                                            e.className
                                        ),
                                        n.insertBefore(o, e)),
                                    ot([t, n], p.loading));
                            },
                            nn = (t, e) => {
                                "select" === e.input || "radio" === e.input
                                    ? cn(t, e)
                                    : [
                                          "text",
                                          "email",
                                          "number",
                                          "tel",
                                          "textarea",
                                      ].some((t) => t === e.input) &&
                                      (A(e.inputValue) || B(e.inputValue)) &&
                                      (tn(D()), ln(t, e));
                            },
                            on = (t, e) => {
                                const n = t.getInput();
                                if (!n) return null;
                                switch (e.input) {
                                    case "checkbox":
                                        return sn(n);
                                    case "radio":
                                        return rn(n);
                                    case "file":
                                        return an(n);
                                    default:
                                        return e.inputAutoTrim
                                            ? n.value.trim()
                                            : n.value;
                                }
                            },
                            sn = (t) => (t.checked ? 1 : 0),
                            rn = (t) => (t.checked ? t.value : null),
                            an = (t) =>
                                t.files && t.files.length
                                    ? null !== t.getAttribute("multiple")
                                        ? t.files
                                        : t.files[0]
                                    : null,
                            cn = (t, e) => {
                                const n = T();
                                if (!n) return;
                                const o = (t) => {
                                    "select" === e.input
                                        ? un(n, pn(t), e)
                                        : "radio" === e.input &&
                                          dn(n, pn(t), e);
                                };
                                A(e.inputOptions) || B(e.inputOptions)
                                    ? (tn(D()),
                                      k(e.inputOptions).then((e) => {
                                          t.hideLoading(), o(e);
                                      }))
                                    : "object" == typeof e.inputOptions
                                    ? o(e.inputOptions)
                                    : b(
                                          "Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(
                                              typeof e.inputOptions
                                          )
                                      );
                            },
                            ln = (t, e) => {
                                const n = t.getInput();
                                n &&
                                    (ct(n),
                                    k(e.inputValue)
                                        .then((o) => {
                                            (n.value =
                                                "number" === e.input
                                                    ? "".concat(
                                                          parseFloat(o) || 0
                                                      )
                                                    : "".concat(o)),
                                                at(n),
                                                n.focus(),
                                                t.hideLoading();
                                        })
                                        .catch((e) => {
                                            b(
                                                "Error in inputValue promise: ".concat(
                                                    e
                                                )
                                            ),
                                                (n.value = ""),
                                                at(n),
                                                n.focus(),
                                                t.hideLoading();
                                        }));
                            };
                        function un(t, e, n) {
                            const o = st(t, p.select);
                            if (!o) return;
                            const i = (t, e, o) => {
                                const i = document.createElement("option");
                                (i.value = o),
                                    J(i, e),
                                    (i.selected = mn(o, n.inputValue)),
                                    t.appendChild(i);
                            };
                            e.forEach((t) => {
                                const e = t[0],
                                    n = t[1];
                                if (Array.isArray(n)) {
                                    const t =
                                        document.createElement("optgroup");
                                    (t.label = e),
                                        (t.disabled = !1),
                                        o.appendChild(t),
                                        n.forEach((e) => i(t, e[1], e[0]));
                                } else i(o, n, e);
                            }),
                                o.focus();
                        }
                        function dn(t, e, n) {
                            const o = st(t, p.radio);
                            if (!o) return;
                            e.forEach((t) => {
                                const e = t[0],
                                    i = t[1],
                                    s = document.createElement("input"),
                                    r = document.createElement("label");
                                (s.type = "radio"),
                                    (s.name = p.radio),
                                    (s.value = e),
                                    mn(e, n.inputValue) && (s.checked = !0);
                                const a = document.createElement("span");
                                J(a, i),
                                    (a.className = p.label),
                                    r.appendChild(s),
                                    r.appendChild(a),
                                    o.appendChild(r);
                            });
                            const i = o.querySelectorAll("input");
                            i.length && i[0].focus();
                        }
                        const pn = (t) => {
                                const e = [];
                                return (
                                    t instanceof Map
                                        ? t.forEach((t, n) => {
                                              let o = t;
                                              "object" == typeof o &&
                                                  (o = pn(o)),
                                                  e.push([n, o]);
                                          })
                                        : Object.keys(t).forEach((n) => {
                                              let o = t[n];
                                              "object" == typeof o &&
                                                  (o = pn(o)),
                                                  e.push([n, o]);
                                          }),
                                    e
                                );
                            },
                            mn = (t, e) => !!e && e.toString() === t.toString(),
                            gn = (t) => {
                                const e = _t.innerParams.get(t);
                                t.disableButtons(),
                                    e.input ? bn(t, "confirm") : An(t, !0);
                            },
                            fn = (t) => {
                                const e = _t.innerParams.get(t);
                                t.disableButtons(),
                                    e.returnInputValueOnDeny
                                        ? bn(t, "deny")
                                        : wn(t, !1);
                            },
                            hn = (t, e) => {
                                t.disableButtons(), e(we.cancel);
                            },
                            bn = (t, e) => {
                                const n = _t.innerParams.get(t);
                                if (!n.input)
                                    return void b(
                                        'The "input" parameter is needed to be set when using returnInputValueOn'.concat(
                                            f(e)
                                        )
                                    );
                                const o = t.getInput(),
                                    i = on(t, n);
                                n.inputValidator
                                    ? yn(t, i, e)
                                    : o && !o.checkValidity()
                                    ? (t.enableButtons(),
                                      t.showValidationMessage(
                                          n.validationMessage
                                      ))
                                    : "deny" === e
                                    ? wn(t, i)
                                    : An(t, i);
                            },
                            yn = (t, e, n) => {
                                const o = _t.innerParams.get(t);
                                t.disableInput(),
                                    Promise.resolve()
                                        .then(() =>
                                            k(
                                                o.inputValidator(
                                                    e,
                                                    o.validationMessage
                                                )
                                            )
                                        )
                                        .then((o) => {
                                            t.enableButtons(),
                                                t.enableInput(),
                                                o
                                                    ? t.showValidationMessage(o)
                                                    : "deny" === n
                                                    ? wn(t, e)
                                                    : An(t, e);
                                        });
                            },
                            wn = (t, e) => {
                                const n = _t.innerParams.get(t || void 0);
                                n.showLoaderOnDeny && tn(V()),
                                    n.preDeny
                                        ? ((t.isAwaitingPromise = !0),
                                          Promise.resolve()
                                              .then(() =>
                                                  k(
                                                      n.preDeny(
                                                          e,
                                                          n.validationMessage
                                                      )
                                                  )
                                              )
                                              .then((n) => {
                                                  !1 === n
                                                      ? (t.hideLoading(), $e(t))
                                                      : t.close({
                                                            isDenied: !0,
                                                            value:
                                                                void 0 === n
                                                                    ? e
                                                                    : n,
                                                        });
                                              })
                                              .catch((e) => Cn(t || void 0, e)))
                                        : t.close({ isDenied: !0, value: e });
                            },
                            vn = (t, e) => {
                                t.close({ isConfirmed: !0, value: e });
                            },
                            Cn = (t, e) => {
                                t.rejectPromise(e);
                            },
                            An = (t, e) => {
                                const n = _t.innerParams.get(t || void 0);
                                n.showLoaderOnConfirm && tn(),
                                    n.preConfirm
                                        ? (t.resetValidationMessage(),
                                          (t.isAwaitingPromise = !0),
                                          Promise.resolve()
                                              .then(() =>
                                                  k(
                                                      n.preConfirm(
                                                          e,
                                                          n.validationMessage
                                                      )
                                                  )
                                              )
                                              .then((n) => {
                                                  dt(I()) || !1 === n
                                                      ? (t.hideLoading(), $e(t))
                                                      : vn(
                                                            t,
                                                            void 0 === n ? e : n
                                                        );
                                              })
                                              .catch((e) => Cn(t || void 0, e)))
                                        : vn(t, e);
                            };
                        function kn() {
                            const t = _t.innerParams.get(this);
                            if (!t) return;
                            const e = _t.domCache.get(this);
                            ct(e.loader),
                                Z() ? t.icon && at(L()) : Bn(e),
                                it([e.popup, e.actions], p.loading),
                                e.popup.removeAttribute("aria-busy"),
                                e.popup.removeAttribute("data-loading"),
                                (e.confirmButton.disabled = !1),
                                (e.denyButton.disabled = !1),
                                (e.cancelButton.disabled = !1);
                        }
                        const Bn = (t) => {
                            const e = t.popup.getElementsByClassName(
                                t.loader.getAttribute("data-button-to-replace")
                            );
                            e.length
                                ? at(e[0], "inline-block")
                                : pt() && ct(t.actions);
                        };
                        function xn() {
                            const t = _t.innerParams.get(this),
                                e = _t.domCache.get(this);
                            return e ? tt(e.popup, t.input) : null;
                        }
                        function En(t, e, n) {
                            const o = _t.domCache.get(t);
                            e.forEach((t) => {
                                o[t].disabled = n;
                            });
                        }
                        function Pn(t, e) {
                            const n = T();
                            if (n && t)
                                if ("radio" === t.type) {
                                    const t = n.querySelectorAll(
                                        '[name="'.concat(p.radio, '"]')
                                    );
                                    for (let n = 0; n < t.length; n++)
                                        t[n].disabled = e;
                                } else t.disabled = e;
                        }
                        function Tn() {
                            En(
                                this,
                                ["confirmButton", "denyButton", "cancelButton"],
                                !1
                            );
                        }
                        function Ln() {
                            En(
                                this,
                                ["confirmButton", "denyButton", "cancelButton"],
                                !0
                            );
                        }
                        function Sn() {
                            Pn(this.getInput(), !1);
                        }
                        function On() {
                            Pn(this.getInput(), !0);
                        }
                        function jn(t) {
                            const e = _t.domCache.get(this),
                                n = _t.innerParams.get(this);
                            J(e.validationMessage, t),
                                (e.validationMessage.className =
                                    p["validation-message"]),
                                n.customClass &&
                                    n.customClass.validationMessage &&
                                    ot(
                                        e.validationMessage,
                                        n.customClass.validationMessage
                                    ),
                                at(e.validationMessage);
                            const o = this.getInput();
                            o &&
                                (o.setAttribute("aria-invalid", "true"),
                                o.setAttribute(
                                    "aria-describedby",
                                    p["validation-message"]
                                ),
                                et(o),
                                ot(o, p.inputerror));
                        }
                        function Mn() {
                            const t = _t.domCache.get(this);
                            t.validationMessage && ct(t.validationMessage);
                            const e = this.getInput();
                            e &&
                                (e.removeAttribute("aria-invalid"),
                                e.removeAttribute("aria-describedby"),
                                it(e, p.inputerror));
                        }
                        const Hn = {
                                title: "",
                                titleText: "",
                                text: "",
                                html: "",
                                footer: "",
                                icon: void 0,
                                iconColor: void 0,
                                iconHtml: void 0,
                                template: void 0,
                                toast: !1,
                                showClass: {
                                    popup: "swal2-show",
                                    backdrop: "swal2-backdrop-show",
                                    icon: "swal2-icon-show",
                                },
                                hideClass: {
                                    popup: "swal2-hide",
                                    backdrop: "swal2-backdrop-hide",
                                    icon: "swal2-icon-hide",
                                },
                                customClass: {},
                                target: "body",
                                color: void 0,
                                backdrop: !0,
                                heightAuto: !0,
                                allowOutsideClick: !0,
                                allowEscapeKey: !0,
                                allowEnterKey: !0,
                                stopKeydownPropagation: !0,
                                keydownListenerCapture: !1,
                                showConfirmButton: !0,
                                showDenyButton: !1,
                                showCancelButton: !1,
                                preConfirm: void 0,
                                preDeny: void 0,
                                confirmButtonText: "OK",
                                confirmButtonAriaLabel: "",
                                confirmButtonColor: void 0,
                                denyButtonText: "No",
                                denyButtonAriaLabel: "",
                                denyButtonColor: void 0,
                                cancelButtonText: "Cancel",
                                cancelButtonAriaLabel: "",
                                cancelButtonColor: void 0,
                                buttonsStyling: !0,
                                reverseButtons: !1,
                                focusConfirm: !0,
                                focusDeny: !1,
                                focusCancel: !1,
                                returnFocus: !0,
                                showCloseButton: !1,
                                closeButtonHtml: "&times;",
                                closeButtonAriaLabel: "Close this dialog",
                                loaderHtml: "",
                                showLoaderOnConfirm: !1,
                                showLoaderOnDeny: !1,
                                imageUrl: void 0,
                                imageWidth: void 0,
                                imageHeight: void 0,
                                imageAlt: "",
                                timer: void 0,
                                timerProgressBar: !1,
                                width: void 0,
                                padding: void 0,
                                background: void 0,
                                input: void 0,
                                inputPlaceholder: "",
                                inputLabel: "",
                                inputValue: "",
                                inputOptions: {},
                                inputAutoFocus: !0,
                                inputAutoTrim: !0,
                                inputAttributes: {},
                                inputValidator: void 0,
                                returnInputValueOnDeny: !1,
                                validationMessage: void 0,
                                grow: !1,
                                position: "center",
                                progressSteps: [],
                                currentProgressStep: void 0,
                                progressStepsDistance: void 0,
                                willOpen: void 0,
                                didOpen: void 0,
                                didRender: void 0,
                                willClose: void 0,
                                didClose: void 0,
                                didDestroy: void 0,
                                scrollbarPadding: !0,
                            },
                            In = [
                                "allowEscapeKey",
                                "allowOutsideClick",
                                "background",
                                "buttonsStyling",
                                "cancelButtonAriaLabel",
                                "cancelButtonColor",
                                "cancelButtonText",
                                "closeButtonAriaLabel",
                                "closeButtonHtml",
                                "color",
                                "confirmButtonAriaLabel",
                                "confirmButtonColor",
                                "confirmButtonText",
                                "currentProgressStep",
                                "customClass",
                                "denyButtonAriaLabel",
                                "denyButtonColor",
                                "denyButtonText",
                                "didClose",
                                "didDestroy",
                                "footer",
                                "hideClass",
                                "html",
                                "icon",
                                "iconColor",
                                "iconHtml",
                                "imageAlt",
                                "imageHeight",
                                "imageUrl",
                                "imageWidth",
                                "preConfirm",
                                "preDeny",
                                "progressSteps",
                                "returnFocus",
                                "reverseButtons",
                                "showCancelButton",
                                "showCloseButton",
                                "showConfirmButton",
                                "showDenyButton",
                                "text",
                                "title",
                                "titleText",
                                "willClose",
                            ],
                            Dn = {},
                            qn = [
                                "allowOutsideClick",
                                "allowEnterKey",
                                "backdrop",
                                "focusConfirm",
                                "focusDeny",
                                "focusCancel",
                                "returnFocus",
                                "heightAuto",
                                "keydownListenerCapture",
                            ],
                            Vn = (t) =>
                                Object.prototype.hasOwnProperty.call(Hn, t),
                            _n = (t) => -1 !== In.indexOf(t),
                            Nn = (t) => Dn[t],
                            Fn = (t) => {
                                Vn(t) ||
                                    h('Unknown parameter "'.concat(t, '"'));
                            },
                            Rn = (t) => {
                                qn.includes(t) &&
                                    h(
                                        'The parameter "'.concat(
                                            t,
                                            '" is incompatible with toasts'
                                        )
                                    );
                            },
                            Un = (t) => {
                                const e = Nn(t);
                                e && v(t, e);
                            },
                            zn = (t) => {
                                !1 === t.backdrop &&
                                    t.allowOutsideClick &&
                                    h(
                                        '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'
                                    );
                                for (const e in t)
                                    Fn(e), t.toast && Rn(e), Un(e);
                            };
                        function Wn(t) {
                            const e = T(),
                                n = _t.innerParams.get(this);
                            if (!e || X(e, n.hideClass.popup))
                                return void h(
                                    "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
                                );
                            const o = Kn(t),
                                i = Object.assign({}, n, o);
                            ge(this, i),
                                _t.innerParams.set(this, i),
                                Object.defineProperties(this, {
                                    params: {
                                        value: Object.assign(
                                            {},
                                            this.params,
                                            t
                                        ),
                                        writable: !1,
                                        enumerable: !0,
                                    },
                                });
                        }
                        const Kn = (t) => {
                            const e = {};
                            return (
                                Object.keys(t).forEach((n) => {
                                    _n(n)
                                        ? (e[n] = t[n])
                                        : h(
                                              "Invalid parameter to update: ".concat(
                                                  n
                                              )
                                          );
                                }),
                                e
                            );
                        };
                        function Yn() {
                            const t = _t.domCache.get(this),
                                e = _t.innerParams.get(this);
                            e
                                ? (t.popup &&
                                      c.swalCloseEventFinishedCallback &&
                                      (c.swalCloseEventFinishedCallback(),
                                      delete c.swalCloseEventFinishedCallback),
                                  "function" == typeof e.didDestroy &&
                                      e.didDestroy(),
                                  Zn(this))
                                : $n(this);
                        }
                        const Zn = (t) => {
                                $n(t),
                                    delete t.params,
                                    delete c.keydownHandler,
                                    delete c.keydownTarget,
                                    delete c.currentInstance;
                            },
                            $n = (t) => {
                                t.isAwaitingPromise
                                    ? (Jn(_t, t), (t.isAwaitingPromise = !0))
                                    : (Jn(Se, t),
                                      Jn(_t, t),
                                      delete t.isAwaitingPromise,
                                      delete t.disableButtons,
                                      delete t.enableButtons,
                                      delete t.getInput,
                                      delete t.disableInput,
                                      delete t.enableInput,
                                      delete t.hideLoading,
                                      delete t.disableLoading,
                                      delete t.showValidationMessage,
                                      delete t.resetValidationMessage,
                                      delete t.close,
                                      delete t.closePopup,
                                      delete t.closeModal,
                                      delete t.closeToast,
                                      delete t.rejectPromise,
                                      delete t.update,
                                      delete t._destroy);
                            },
                            Jn = (t, e) => {
                                for (const n in t) t[n].delete(e);
                            };
                        var Xn = Object.freeze({
                            __proto__: null,
                            _destroy: Yn,
                            close: Ke,
                            closeModal: Ke,
                            closePopup: Ke,
                            closeToast: Ke,
                            disableButtons: Ln,
                            disableInput: On,
                            disableLoading: kn,
                            enableButtons: Tn,
                            enableInput: Sn,
                            getInput: xn,
                            handleAwaitingPromise: $e,
                            hideLoading: kn,
                            rejectPromise: Ze,
                            resetValidationMessage: Mn,
                            showValidationMessage: jn,
                            update: Wn,
                        });
                        const Gn = (t, e, n) => {
                                t.toast
                                    ? Qn(t, e, n)
                                    : (no(e), oo(e), io(t, e, n));
                            },
                            Qn = (t, e, n) => {
                                e.popup.onclick = () => {
                                    (t && (to(t) || t.timer || t.input)) ||
                                        n(we.close);
                                };
                            },
                            to = (t) =>
                                t.showConfirmButton ||
                                t.showDenyButton ||
                                t.showCancelButton ||
                                t.showCloseButton;
                        let eo = !1;
                        const no = (t) => {
                                t.popup.onmousedown = () => {
                                    t.container.onmouseup = function (e) {
                                        (t.container.onmouseup = void 0),
                                            e.target === t.container &&
                                                (eo = !0);
                                    };
                                };
                            },
                            oo = (t) => {
                                t.container.onmousedown = () => {
                                    t.popup.onmouseup = function (e) {
                                        (t.popup.onmouseup = void 0),
                                            (e.target === t.popup ||
                                                (e.target instanceof
                                                    HTMLElement &&
                                                    t.popup.contains(
                                                        e.target
                                                    ))) &&
                                                (eo = !0);
                                    };
                                };
                            },
                            io = (t, e, n) => {
                                e.container.onclick = (o) => {
                                    eo
                                        ? (eo = !1)
                                        : o.target === e.container &&
                                          C(t.allowOutsideClick) &&
                                          n(we.backdrop);
                                };
                            },
                            so = (t) => "object" == typeof t && t.jquery,
                            ro = (t) => t instanceof Element || so(t),
                            ao = (t) => {
                                const e = {};
                                return (
                                    "object" != typeof t[0] || ro(t[0])
                                        ? ["title", "html", "icon"].forEach(
                                              (n, o) => {
                                                  const i = t[o];
                                                  "string" == typeof i || ro(i)
                                                      ? (e[n] = i)
                                                      : void 0 !== i &&
                                                        b(
                                                            "Unexpected type of "
                                                                .concat(
                                                                    n,
                                                                    '! Expected "string" or "Element", got '
                                                                )
                                                                .concat(
                                                                    typeof i
                                                                )
                                                        );
                                              }
                                          )
                                        : Object.assign(e, t[0]),
                                    e
                                );
                            };
                        function co() {
                            const t = this;
                            for (
                                var e = arguments.length,
                                    n = new Array(e),
                                    o = 0;
                                o < e;
                                o++
                            )
                                n[o] = arguments[o];
                            return new t(...n);
                        }
                        function lo(t) {
                            class e extends this {
                                _main(e, n) {
                                    return super._main(
                                        e,
                                        Object.assign({}, t, n)
                                    );
                                }
                            }
                            return e;
                        }
                        const uo = () => c.timeout && c.timeout.getTimerLeft(),
                            po = () => {
                                if (c.timeout) return ht(), c.timeout.stop();
                            },
                            mo = () => {
                                if (c.timeout) {
                                    const t = c.timeout.start();
                                    return ft(t), t;
                                }
                            },
                            go = () => {
                                const t = c.timeout;
                                return t && (t.running ? po() : mo());
                            },
                            fo = (t) => {
                                if (c.timeout) {
                                    const e = c.timeout.increase(t);
                                    return ft(e, !0), e;
                                }
                            },
                            ho = () => !(!c.timeout || !c.timeout.isRunning());
                        let bo = !1;
                        const yo = {};
                        function wo() {
                            (yo[
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : "data-swal-template"
                            ] = this),
                                bo ||
                                    (document.body.addEventListener(
                                        "click",
                                        vo
                                    ),
                                    (bo = !0));
                        }
                        const vo = (t) => {
                            for (
                                let e = t.target;
                                e && e !== document;
                                e = e.parentNode
                            )
                                for (const t in yo) {
                                    const n = e.getAttribute(t);
                                    if (n)
                                        return void yo[t].fire({ template: n });
                                }
                        };
                        var Co = Object.freeze({
                            __proto__: null,
                            argsToParams: ao,
                            bindClickHandler: wo,
                            clickCancel: ye,
                            clickConfirm: he,
                            clickDeny: be,
                            enableLoading: tn,
                            fire: co,
                            getActions: F,
                            getCancelButton: q,
                            getCloseButton: z,
                            getConfirmButton: D,
                            getContainer: x,
                            getDenyButton: V,
                            getFocusableElements: K,
                            getFooter: R,
                            getHtmlContainer: j,
                            getIcon: L,
                            getIconContent: S,
                            getImage: M,
                            getInputLabel: _,
                            getLoader: N,
                            getPopup: T,
                            getProgressSteps: H,
                            getTimerLeft: uo,
                            getTimerProgressBar: U,
                            getTitle: O,
                            getValidationMessage: I,
                            increaseTimer: fo,
                            isDeprecatedParameter: Nn,
                            isLoading: $,
                            isTimerRunning: ho,
                            isUpdatableParameter: _n,
                            isValidParameter: Vn,
                            isVisible: fe,
                            mixin: lo,
                            resumeTimer: mo,
                            showLoading: tn,
                            stopTimer: po,
                            toggleTimer: go,
                        });
                        class Ao {
                            constructor(t, e) {
                                (this.callback = t),
                                    (this.remaining = e),
                                    (this.running = !1),
                                    this.start();
                            }
                            start() {
                                return (
                                    this.running ||
                                        ((this.running = !0),
                                        (this.started = new Date()),
                                        (this.id = setTimeout(
                                            this.callback,
                                            this.remaining
                                        ))),
                                    this.remaining
                                );
                            }
                            stop() {
                                return (
                                    this.started &&
                                        this.running &&
                                        ((this.running = !1),
                                        clearTimeout(this.id),
                                        (this.remaining -=
                                            new Date().getTime() -
                                            this.started.getTime())),
                                    this.remaining
                                );
                            }
                            increase(t) {
                                const e = this.running;
                                return (
                                    e && this.stop(),
                                    (this.remaining += t),
                                    e && this.start(),
                                    this.remaining
                                );
                            }
                            getTimerLeft() {
                                return (
                                    this.running && (this.stop(), this.start()),
                                    this.remaining
                                );
                            }
                            isRunning() {
                                return this.running;
                            }
                        }
                        const ko = ["swal-title", "swal-html", "swal-footer"],
                            Bo = (t) => {
                                const e =
                                    "string" == typeof t.template
                                        ? document.querySelector(t.template)
                                        : t.template;
                                if (!e) return {};
                                const n = e.content;
                                return (
                                    jo(n),
                                    Object.assign(
                                        xo(n),
                                        Eo(n),
                                        Po(n),
                                        To(n),
                                        Lo(n),
                                        So(n),
                                        Oo(n, ko)
                                    )
                                );
                            },
                            xo = (t) => {
                                const e = {};
                                return (
                                    Array.from(
                                        t.querySelectorAll("swal-param")
                                    ).forEach((t) => {
                                        Mo(t, ["name", "value"]);
                                        const n = t.getAttribute("name"),
                                            o = t.getAttribute("value");
                                        "boolean" == typeof Hn[n]
                                            ? (e[n] = "false" !== o)
                                            : "object" == typeof Hn[n]
                                            ? (e[n] = JSON.parse(o))
                                            : (e[n] = o);
                                    }),
                                    e
                                );
                            },
                            Eo = (t) => {
                                const e = {};
                                return (
                                    Array.from(
                                        t.querySelectorAll(
                                            "swal-function-param"
                                        )
                                    ).forEach((t) => {
                                        const n = t.getAttribute("name"),
                                            o = t.getAttribute("value");
                                        e[n] = new Function(
                                            "return ".concat(o)
                                        )();
                                    }),
                                    e
                                );
                            },
                            Po = (t) => {
                                const e = {};
                                return (
                                    Array.from(
                                        t.querySelectorAll("swal-button")
                                    ).forEach((t) => {
                                        Mo(t, ["type", "color", "aria-label"]);
                                        const n = t.getAttribute("type");
                                        (e["".concat(n, "ButtonText")] =
                                            t.innerHTML),
                                            (e["show".concat(f(n), "Button")] =
                                                !0),
                                            t.hasAttribute("color") &&
                                                (e[
                                                    "".concat(n, "ButtonColor")
                                                ] = t.getAttribute("color")),
                                            t.hasAttribute("aria-label") &&
                                                (e[
                                                    "".concat(
                                                        n,
                                                        "ButtonAriaLabel"
                                                    )
                                                ] =
                                                    t.getAttribute(
                                                        "aria-label"
                                                    ));
                                    }),
                                    e
                                );
                            },
                            To = (t) => {
                                const e = {},
                                    n = t.querySelector("swal-image");
                                return (
                                    n &&
                                        (Mo(n, [
                                            "src",
                                            "width",
                                            "height",
                                            "alt",
                                        ]),
                                        n.hasAttribute("src") &&
                                            (e.imageUrl =
                                                n.getAttribute("src")),
                                        n.hasAttribute("width") &&
                                            (e.imageWidth =
                                                n.getAttribute("width")),
                                        n.hasAttribute("height") &&
                                            (e.imageHeight =
                                                n.getAttribute("height")),
                                        n.hasAttribute("alt") &&
                                            (e.imageAlt =
                                                n.getAttribute("alt"))),
                                    e
                                );
                            },
                            Lo = (t) => {
                                const e = {},
                                    n = t.querySelector("swal-icon");
                                return (
                                    n &&
                                        (Mo(n, ["type", "color"]),
                                        n.hasAttribute("type") &&
                                            (e.icon = n.getAttribute("type")),
                                        n.hasAttribute("color") &&
                                            (e.iconColor =
                                                n.getAttribute("color")),
                                        (e.iconHtml = n.innerHTML)),
                                    e
                                );
                            },
                            So = (t) => {
                                const e = {},
                                    n = t.querySelector("swal-input");
                                n &&
                                    (Mo(n, [
                                        "type",
                                        "label",
                                        "placeholder",
                                        "value",
                                    ]),
                                    (e.input =
                                        n.getAttribute("type") || "text"),
                                    n.hasAttribute("label") &&
                                        (e.inputLabel =
                                            n.getAttribute("label")),
                                    n.hasAttribute("placeholder") &&
                                        (e.inputPlaceholder =
                                            n.getAttribute("placeholder")),
                                    n.hasAttribute("value") &&
                                        (e.inputValue =
                                            n.getAttribute("value")));
                                const o = Array.from(
                                    t.querySelectorAll("swal-input-option")
                                );
                                return (
                                    o.length &&
                                        ((e.inputOptions = {}),
                                        o.forEach((t) => {
                                            Mo(t, ["value"]);
                                            const n = t.getAttribute("value"),
                                                o = t.innerHTML;
                                            e.inputOptions[n] = o;
                                        })),
                                    e
                                );
                            },
                            Oo = (t, e) => {
                                const n = {};
                                for (const o in e) {
                                    const i = e[o],
                                        s = t.querySelector(i);
                                    s &&
                                        (Mo(s, []),
                                        (n[i.replace(/^swal-/, "")] =
                                            s.innerHTML.trim()));
                                }
                                return n;
                            },
                            jo = (t) => {
                                const e = ko.concat([
                                    "swal-param",
                                    "swal-function-param",
                                    "swal-button",
                                    "swal-image",
                                    "swal-icon",
                                    "swal-input",
                                    "swal-input-option",
                                ]);
                                Array.from(t.children).forEach((t) => {
                                    const n = t.tagName.toLowerCase();
                                    e.includes(n) ||
                                        h(
                                            "Unrecognized element <".concat(
                                                n,
                                                ">"
                                            )
                                        );
                                });
                            },
                            Mo = (t, e) => {
                                Array.from(t.attributes).forEach((n) => {
                                    -1 === e.indexOf(n.name) &&
                                        h([
                                            'Unrecognized attribute "'
                                                .concat(n.name, '" on <')
                                                .concat(
                                                    t.tagName.toLowerCase(),
                                                    ">."
                                                ),
                                            "".concat(
                                                e.length
                                                    ? "Allowed attributes are: ".concat(
                                                          e.join(", ")
                                                      )
                                                    : "To set the value, use HTML within the element."
                                            ),
                                        ]);
                                });
                            },
                            Ho = 10,
                            Io = (t) => {
                                const e = x(),
                                    n = T();
                                "function" == typeof t.willOpen &&
                                    t.willOpen(n);
                                const o = window.getComputedStyle(
                                    document.body
                                ).overflowY;
                                _o(e, n, t),
                                    setTimeout(() => {
                                        qo(e, n);
                                    }, Ho),
                                    Y() && (Vo(e, t.scrollbarPadding, o), Oe()),
                                    Z() ||
                                        c.previousActiveElement ||
                                        (c.previousActiveElement =
                                            document.activeElement),
                                    "function" == typeof t.didOpen &&
                                        setTimeout(() => t.didOpen(n)),
                                    it(e, p["no-transition"]);
                            },
                            Do = (t) => {
                                const e = T();
                                if (t.target !== e || !Lt) return;
                                const n = x();
                                e.removeEventListener(Lt, Do),
                                    (n.style.overflowY = "auto");
                            },
                            qo = (t, e) => {
                                Lt && gt(e)
                                    ? ((t.style.overflowY = "hidden"),
                                      e.addEventListener(Lt, Do))
                                    : (t.style.overflowY = "auto");
                            },
                            Vo = (t, e, n) => {
                                He(),
                                    e && "hidden" !== n && Re(n),
                                    setTimeout(() => {
                                        t.scrollTop = 0;
                                    });
                            },
                            _o = (t, e, n) => {
                                ot(t, n.showClass.backdrop),
                                    e.style.setProperty(
                                        "opacity",
                                        "0",
                                        "important"
                                    ),
                                    at(e, "grid"),
                                    setTimeout(() => {
                                        ot(e, n.showClass.popup),
                                            e.style.removeProperty("opacity");
                                    }, Ho),
                                    ot(
                                        [
                                            document.documentElement,
                                            document.body,
                                        ],
                                        p.shown
                                    ),
                                    n.heightAuto &&
                                        n.backdrop &&
                                        !n.toast &&
                                        ot(
                                            [
                                                document.documentElement,
                                                document.body,
                                            ],
                                            p["height-auto"]
                                        );
                            };
                        var No = {
                            email: (t, e) =>
                                /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(
                                    t
                                )
                                    ? Promise.resolve()
                                    : Promise.resolve(
                                          e || "Invalid email address"
                                      ),
                            url: (t, e) =>
                                /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
                                    t
                                )
                                    ? Promise.resolve()
                                    : Promise.resolve(e || "Invalid URL"),
                        };
                        function Fo(t) {
                            t.inputValidator ||
                                ("email" === t.input &&
                                    (t.inputValidator = No.email),
                                "url" === t.input &&
                                    (t.inputValidator = No.url));
                        }
                        function Ro(t) {
                            (!t.target ||
                                ("string" == typeof t.target &&
                                    !document.querySelector(t.target)) ||
                                ("string" != typeof t.target &&
                                    !t.target.appendChild)) &&
                                (h(
                                    'Target parameter is not valid, defaulting to "body"'
                                ),
                                (t.target = "body"));
                        }
                        function Uo(t) {
                            Fo(t),
                                t.showLoaderOnConfirm &&
                                    !t.preConfirm &&
                                    h(
                                        "showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"
                                    ),
                                Ro(t),
                                "string" == typeof t.title &&
                                    (t.title = t.title
                                        .split("\n")
                                        .join("<br />")),
                                xt(t);
                        }
                        let zo;
                        var Wo = new WeakMap();
                        class Ko {
                            constructor() {
                                if (
                                    (r(this, Wo, {
                                        writable: !0,
                                        value: void 0,
                                    }),
                                    "undefined" == typeof window)
                                )
                                    return;
                                zo = this;
                                for (
                                    var t = arguments.length,
                                        n = new Array(t),
                                        o = 0;
                                    o < t;
                                    o++
                                )
                                    n[o] = arguments[o];
                                const i = Object.freeze(
                                    this.constructor.argsToParams(n)
                                );
                                (this.params = i),
                                    (this.isAwaitingPromise = !1),
                                    e(this, Wo, this._main(zo.params));
                            }
                            _main(t) {
                                let e =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : {};
                                zn(Object.assign({}, e, t)),
                                    c.currentInstance &&
                                        (c.currentInstance._destroy(),
                                        Y() && je()),
                                    (c.currentInstance = zo);
                                const n = Zo(t, e);
                                Uo(n),
                                    Object.freeze(n),
                                    c.timeout &&
                                        (c.timeout.stop(), delete c.timeout),
                                    clearTimeout(c.restoreFocusTimeout);
                                const o = $o(zo);
                                return (
                                    ge(zo, n),
                                    _t.innerParams.set(zo, n),
                                    Yo(zo, o, n)
                                );
                            }
                            then(e) {
                                return t(this, Wo).then(e);
                            }
                            finally(e) {
                                return t(this, Wo).finally(e);
                            }
                        }
                        const Yo = (t, e, n) =>
                                new Promise((o, i) => {
                                    const s = (e) => {
                                        t.close({
                                            isDismissed: !0,
                                            dismiss: e,
                                        });
                                    };
                                    Se.swalPromiseResolve.set(t, o),
                                        Se.swalPromiseReject.set(t, i),
                                        (e.confirmButton.onclick = () => {
                                            gn(t);
                                        }),
                                        (e.denyButton.onclick = () => {
                                            fn(t);
                                        }),
                                        (e.cancelButton.onclick = () => {
                                            hn(t, s);
                                        }),
                                        (e.closeButton.onclick = () => {
                                            s(we.close);
                                        }),
                                        Gn(n, e, s),
                                        Ce(c, n, s),
                                        nn(t, n),
                                        Io(n),
                                        Jo(c, n, s),
                                        Xo(e, n),
                                        setTimeout(() => {
                                            e.container.scrollTop = 0;
                                        });
                                }),
                            Zo = (t, e) => {
                                const n = Bo(t),
                                    o = Object.assign({}, Hn, e, n, t);
                                return (
                                    (o.showClass = Object.assign(
                                        {},
                                        Hn.showClass,
                                        o.showClass
                                    )),
                                    (o.hideClass = Object.assign(
                                        {},
                                        Hn.hideClass,
                                        o.hideClass
                                    )),
                                    o
                                );
                            },
                            $o = (t) => {
                                const e = {
                                    popup: T(),
                                    container: x(),
                                    actions: F(),
                                    confirmButton: D(),
                                    denyButton: V(),
                                    cancelButton: q(),
                                    loader: N(),
                                    closeButton: z(),
                                    validationMessage: I(),
                                    progressSteps: H(),
                                };
                                return _t.domCache.set(t, e), e;
                            },
                            Jo = (t, e, n) => {
                                const o = U();
                                ct(o),
                                    e.timer &&
                                        ((t.timeout = new Ao(() => {
                                            n("timer"), delete t.timeout;
                                        }, e.timer)),
                                        e.timerProgressBar &&
                                            (at(o),
                                            Q(o, e, "timerProgressBar"),
                                            setTimeout(() => {
                                                t.timeout &&
                                                    t.timeout.running &&
                                                    ft(e.timer);
                                            })));
                            },
                            Xo = (t, e) => {
                                e.toast ||
                                    (C(e.allowEnterKey)
                                        ? Go(t, e) || Ae(-1, 1)
                                        : Qo());
                            },
                            Go = (t, e) =>
                                e.focusDeny && dt(t.denyButton)
                                    ? (t.denyButton.focus(), !0)
                                    : e.focusCancel && dt(t.cancelButton)
                                    ? (t.cancelButton.focus(), !0)
                                    : !(
                                          !e.focusConfirm ||
                                          !dt(t.confirmButton) ||
                                          (t.confirmButton.focus(), 0)
                                      ),
                            Qo = () => {
                                document.activeElement instanceof HTMLElement &&
                                    "function" ==
                                        typeof document.activeElement.blur &&
                                    document.activeElement.blur();
                            };
                        if (
                            "undefined" != typeof window &&
                            /^ru\b/.test(navigator.language) &&
                            location.host.match(/\.(ru|su|by|xn--p1ai)$/)
                        ) {
                            const t = new Date(),
                                e = localStorage.getItem("swal-initiation");
                            e
                                ? (t.getTime() - Date.parse(e)) / 864e5 > 3 &&
                                  setTimeout(() => {
                                      document.body.style.pointerEvents =
                                          "none";
                                      const t = document.createElement("audio");
                                      (t.src =
                                          "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3"),
                                          (t.loop = !0),
                                          document.body.appendChild(t),
                                          setTimeout(() => {
                                              t.play().catch(() => {});
                                          }, 2500);
                                  }, 500)
                                : localStorage.setItem(
                                      "swal-initiation",
                                      "".concat(t)
                                  );
                        }
                        (Ko.prototype.disableButtons = Ln),
                            (Ko.prototype.enableButtons = Tn),
                            (Ko.prototype.getInput = xn),
                            (Ko.prototype.disableInput = On),
                            (Ko.prototype.enableInput = Sn),
                            (Ko.prototype.hideLoading = kn),
                            (Ko.prototype.disableLoading = kn),
                            (Ko.prototype.showValidationMessage = jn),
                            (Ko.prototype.resetValidationMessage = Mn),
                            (Ko.prototype.close = Ke),
                            (Ko.prototype.closePopup = Ke),
                            (Ko.prototype.closeModal = Ke),
                            (Ko.prototype.closeToast = Ke),
                            (Ko.prototype.rejectPromise = Ze),
                            (Ko.prototype.update = Wn),
                            (Ko.prototype._destroy = Yn),
                            Object.assign(Ko, Co),
                            Object.keys(Xn).forEach((t) => {
                                Ko[t] = function () {
                                    return zo && zo[t]
                                        ? zo[t](...arguments)
                                        : null;
                                };
                            }),
                            (Ko.DismissReason = we),
                            (Ko.version = "11.7.28");
                        const ti = Ko;
                        return (ti.default = ti), ti;
                    })()),
                        void 0 !== this &&
                            this.Sweetalert2 &&
                            (this.swal =
                                this.sweetAlert =
                                this.Swal =
                                this.SweetAlert =
                                    this.Sweetalert2);
                },
            },
            e = {};
        function n(o) {
            var i = e[o];
            if (void 0 !== i) return i.exports;
            var s = (e[o] = { exports: {} });
            return t[o].call(s.exports, s, s.exports, n), s.exports;
        }
        (n.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return n.d(e, { a: e }), e;
        }),
            (n.d = function (t, e) {
                for (var o in e)
                    n.o(e, o) &&
                        !n.o(t, o) &&
                        Object.defineProperty(t, o, {
                            enumerable: !0,
                            get: e[o],
                        });
            }),
            (n.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (n.r = function (t) {
                "undefined" != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module",
                    }),
                    Object.defineProperty(t, "__esModule", { value: !0 });
            });
        var o = {};
        return (
            (function () {
                "use strict";
                n.r(o),
                    n.d(o, {
                        Swal: function () {
                            return e;
                        },
                    });
                var t = n(78764),
                    e = t.mixin({
                        buttonsStyling: !1,
                        customClass: {
                            confirmButton: "btn btn-primary",
                            cancelButton: "btn btn-label-danger",
                            denyButton: "btn btn-label-secondary",
                        },
                    });
            })(),
            o
        );
    })();
});
