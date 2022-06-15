if (!0 === document.currentScript.hasAttribute("for")) {
    const i = document.currentScript.getAttribute("for"),
        d = window[i.replaceAll("-", "_")];
    let s = document.getElementById(i);
    if ("object" == typeof s && null !== s && "object" == typeof d && null !== d) {
        const mth = {
            p_m(m) {
                let sga = "show-goal-amount" in d,
                    spp = "show-progress-percentage" in d,
                    spa = "show-progress-amount" in d,
                    apf = "animate-progress-fill" in d,
                    dbm = "dark-background-mode" in d;
                "fill-color" in d == !0 && (m.querySelector(".svg-thermometer-fill-filled").style.fill = d["fill-color"]);
                let ga = 0;
                "goal-amount" in d == !0 && (ga = parseInt(d["goal-amount"]), !0 === isNaN(ga) && (ga = 0));
                let pa = 0;
                !1 === apf && "progress-amount" in d == !0 && (pa = parseInt(d["progress-amount"]), !0 === isNaN(pa) && (pa = 0)), ga < pa && (ga = pa);
                let pfh = 443;
                if (0 !== ga && (pfh = 443 - Math.round(pa / ga * 370)), m.querySelector(".svg-thermometer-fill-empty").style.height = pfh + "px", !0 === sga ? (m.querySelector(".svg-goal-textarea").innerHTML = "GOAL: " + ga.toString().split(/(?=(?:...)*$)/).join(","), m.querySelector(".svg-goal-textarea").style.display = "block") : m.querySelector(".svg-goal-textarea").style.display = "none", m.className.baseVal = !0 === dbm ? "style-2" : "style-1", !0 === apf && m.classList.add("animate"), !0 === spp) {
                    let vpp = 0;
                    0 !== ga && (vpp = Math.round(pa / ga * 100)), m.querySelector(".svg-percent").style.display = "block", m.querySelector(".svg-percent").style.transform = "translateY(" + (pfh - 443) + "px)", mth.a_l(m.querySelector(".svg-percent-textarea"), vpp, 20)
                } else m.querySelector(".svg-percent").style.display = "none";
                !0 === spa ? (m.querySelector(".svg-amount").style.display = "block", m.querySelector(".svg-amount").style.transform = "translateY(" + (pfh - 443) + "px)", mth.a_l(m.querySelector(".svg-amount-textarea"), pa, 20)) : m.querySelector(".svg-amount").style.display = "none"
            },
            m_l(t) {
                setTimeout(() => {
                    let p = "right";
                    t.classList.contains("svg-percent-textarea") && (p = "left");
                    let il = !1,
                        ia = !1,
                        l = t.parentNode.querySelector("." + t.parentNode.getAttribute("class") + "-label"),
                        a = t.parentNode.querySelector("." + t.parentNode.getAttribute("class") + "-arrow");
                    null === l && (il = !0, l = document.createElementNS("http://www.w3.org/2000/svg", "rect"), l.setAttribute("class", t.parentNode.getAttribute("class") + "-label"));
                    const b = t.getBBox(),
                        st = getComputedStyle(t),
                        p_t = parseInt(st["padding-top"]),
                        p_l = parseInt(st["padding-left"]),
                        p_r = parseInt(st["padding-right"]),
                        p_b = parseInt(st["padding-bottom"]),
                        f = st["background-color"],
                        p_x = b.x - p_l,
                        p_y = b.y - p_r,
                        w = b.width + p_l + p_r,
                        h = b.height + p_t + p_b;
                    l.setAttribute("x", p_x), l.setAttribute("y", p_y), l.setAttribute("width", w), l.setAttribute("height", h), l.setAttribute("fill", f), l.setAttribute("rx", parseInt(st["border-top-left-radius"])), null === a && (ia = !0, a = document.createElementNS("http://www.w3.org/2000/svg", "polygon"), a.setAttribute("class", t.parentNode.getAttribute("class") + "-arrow")), "left" === p ? a.setAttribute("points", p_x + w - 1 + "," + (p_y + h / 2 + 10) + " " + (p_x + w - 1) + "," + (p_y + h / 2 - 10) + " " + (p_x + w + 19) + "," + (p_y + h / 2)) : a.setAttribute("points", p_x + 1 + "," + (p_y + h / 2 + 10) + " " + (p_x + 1) + "," + (p_y + h / 2 - 10) + " " + (p_x - 21) + "," + (p_y + h / 2)), a.setAttribute("fill", f), !0 === il && t.parentNode.insertBefore(l, t), !0 === ia && t.parentNode.insertBefore(a, t)
                }, 10)
            },
            a_l(l, f, sp = 1, st = !0) {
                if ("a_t" in l == !0 && null !== l.a_t && clearTimeout(l.a_t), sp < 20) {
                    !0 === st && (st = "l_v" in l == !0 ? l.l_v : l.l_v = 0);
                    let cv = Math.round((f - st) / 20 * sp) + st;
                    l.l_v = cv, l.classList.contains("svg-percent-textarea") ? l.innerHTML = cv + "%" : l.innerHTML = "" + cv.toString().split(/(?=(?:...)*$)/).join(","), l.a_t = setTimeout(() => {
                        mth.a_l(l, f, sp + 1, st)
                    }, 50)
                } else l.classList.contains("svg-percent-textarea") ? l.innerHTML = f + "%" : l.innerHTML = "" + f.toString().split(/(?=(?:...)*$)/).join(","), l.l_v = f;
                mth.m_l(l)
            },
            c_v(e) {
                const b = s.getBoundingClientRect(),
                    c_x = b.left + b.width / 2,
                    c_y = b.top + b.height / 2;
                if (c_x >= 0 && c_x <= window.innerWidth && c_y >= 0 && c_y <= window.innerHeight) {
                    document.removeEventListener("scroll", mth.c_v), document.body.removeEventListener("scroll", mth.c_v);
                    let spp = "show-progress-percentage" in d,
                        spa = "show-progress-amount" in d,
                        ga = 0;
                    "goal-amount" in d == !0 && (ga = parseInt(d["goal-amount"]), !0 === isNaN(ga) && (ga = 0));
                    let pa = 0;
                    "progress-amount" in d == !0 && (pa = parseInt(d["progress-amount"]), !0 === isNaN(pa) && (pa = 0)), ga < pa && (pa = ga);
                    let pfh = 443;
                    if (0 !== ga && (pfh = 443 - Math.round(pa / ga * 370)), s.querySelector(".svg-thermometer-fill-empty").style.height = pfh + "px", !0 === spp) {
                        let vpp = 0;
                        0 !== ga && (vpp = Math.round(pa / ga * 100)), s.querySelector(".svg-percent").style.transform = "translateY(" + (pfh - 443) + "px)", mth.a_l(s.querySelector(".svg-percent-textarea"), vpp, 1)
                    }!0 === spa && (s.querySelector(".svg-amount").style.transform = "translateY(" + (pfh - 443) + "px)", mth.a_l(s.querySelector(".svg-amount-textarea"), pa, 1))
                }
            }
        };
        let ts = document.createElement("style");
        ts.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@600;800&display=swap");#%id%{width:100%;}#%id% .svg-thermometer-fill-empty{height:443px;-webkit-transition:fill 0.3s ease-in-out;transition:fill 0.3s ease-in-out}#%id%.animate .svg-thermometer-fill-empty{-webkit-transition:fill 0.3s ease-in-out, height 1s ease-in-out;transition:fill 0.3s ease-in-out, height 1s ease-in-out}#%id% .svg-thermometer-fill-filled{-webkit-transition:fill 0.3s ease-in-out;transition:fill 0.3s ease-in-out}#%id% .svg-thermometer-background{-webkit-transition:fill 0.3s ease-in-out;transition:fill 0.3s ease-in-out}#%id% .svg-thermometer-reflection{-webkit-transition:fill 0.3s ease-in-out;transition:fill 0.3s ease-in-out}#%id% .svg-thermometer-unit{-webkit-transition:fill 0.3s ease-in-out;transition:fill 0.3s ease-in-out}#%id% .svg-thermometer-border{-webkit-transition:fill 0.3s ease-in-out;transition:fill 0.3s ease-in-out}#%id% .svg-powered-letter{-webkit-transition:fill 0.3s ease-in-out;transition:fill 0.3s ease-in-out}#%id% .svg-logo-text-primary{-webkit-transition:fill 0.3s ease-in-out;transition:fill 0.3s ease-in-out}#%id% .svg-logo-text-secondary{-webkit-transition:fill 0.3s ease-in-out;transition:fill 0.3s ease-in-out}#%id% .svg-logo-icon-primary{-webkit-transition:fill 0.3s ease-in-out;transition:fill 0.3s ease-in-out}#%id% .svg-logo-icon-secondary{-webkit-transition:fill 0.3s ease-in-out;transition:fill 0.3s ease-in-out}#%id% .svg-goal-textarea{font-family:"Nunito";font-weight:800;font-size:50px;-webkit-transition:fill 0.3s ease-in-out;transition:fill 0.3s ease-in-out}#%id%.animate .svg-percent{-webkit-transition:-webkit-transform 1s ease-in-out;transition:-webkit-transform 1s ease-in-out;transition:transform 1s ease-in-out;transition:transform 1s ease-in-out, -webkit-transform 1s ease-in-out}#%id%.animate .svg-amount{-webkit-transition:-webkit-transform 1s ease-in-out;transition:-webkit-transform 1s ease-in-out;transition:transform 1s ease-in-out;transition:transform 1s ease-in-out, -webkit-transform 1s ease-in-out}#%id% .svg-percent-textarea{padding:17px 15px 13px;border-radius:14px;font-family:"Nunito";font-weight:600;font-size:27px;-webkit-transition:fill 0.3s ease-in-out;transition:fill 0.3s ease-in-out}#%id% .svg-amount-textarea{padding:17px 15px 13px;border-radius:15px;font-family:"Nunito";font-weight:600;font-size:27px;-webkit-transition:fill 0.3s ease-in-out;transition:fill 0.3s ease-in-out}#%id%.style-1 .svg-thermometer-fill-empty{fill:#ecf0f1}#%id%.style-1 .svg-thermometer-fill-filled{fill:#e75f51}#%id%.style-1 .svg-thermometer-background{fill:#ffffff}#%id%.style-1 .svg-thermometer-reflection{fill:rgba(255,255,255,0.5)}#%id%.style-1 .svg-thermometer-unit{fill:#1d1d1b}#%id%.style-1 .svg-thermometer-border{fill:#304a63}#%id%.style-1 .svg-powered-letter{fill:#c9c9c9}#%id%.style-1 .svg-logo-text-primary{fill:#f37b57}#%id%.style-1 .svg-logo-text-secondary{fill:#2fbdd0}#%id%.style-1 .svg-logo-icon-primary{fill:#2fbdd0}#%id%.style-1 .svg-logo-icon-secondary{fill:#f37b57}#%id%.style-1 .svg-goal-textarea{fill:#304a63}#%id%.style-1 .svg-percent-textarea{background-color:#304a63;fill:#ffffff}#%id%.style-1 .svg-amount-textarea{background-color:#304a63;fill:#ffffff}#%id%.style-2 .svg-thermometer-fill-empty{fill:#19263a}#%id%.style-2 .svg-thermometer-fill-filled{fill:#e75f51}#%id%.style-2 .svg-thermometer-background{fill:#19263a}#%id%.style-2 .svg-thermometer-reflection{fill:rgba(255,255,255,0.5)}#%id%.style-2 .svg-thermometer-unit{fill:rgba(255,255,255,0.5)}#%id%.style-2 .svg-thermometer-border{fill:#ffffff}#%id%.style-2 .svg-powered-letter{fill:#555555}#%id%.style-2 .svg-logo-text-primary{fill:#ffffff}#%id%.style-2 .svg-logo-text-secondary{fill:#d0d0d0}#%id%.style-2 .svg-logo-icon-primary{fill:#ffffff}#%id%.style-2 .svg-logo-icon-secondary{fill:#d0d0d0}#%id%.style-2 .svg-goal-textarea{fill:#ffffff}#%id%.style-2 .svg-percent-textarea{background-color:#ffffff;fill:#19263a}#%id%.style-2 .svg-amount-textarea{background-color:#ffffff;fill:#19263a}'.replaceAll("%id%", i), document.head.appendChild(ts), ts = null;
        let tsv = document.createElement("div");
        tsv.innerHTML = '<svg id="' + i + '" viewBox="0 0 800 1050" xmlns="http://www.w3.org/2000/svg"><g class="svg-thermometer-fill"><rect class="svg-thermometer-fill-filled" x="293.81" y="173.58" width="212.4" height="680.29"/><rect class="svg-thermometer-fill-empty" x="293.81" y="173.58" width="212.4"/></g><path class="svg-thermometer-background" d="m0 0v1050h800l-2e-3 -1050h-800zm400 882.36c-74.386 0-134.69-60.301-134.69-134.69 1e-3 -40.934 18.617-79.645 50.594-105.2v-415.6c1e-3 -46.443 37.649-84.093 84.094-84.093 46.443 0 84.092 37.651 84.09 84.095v415.6c31.979 25.563 50.596 64.271 50.596 105.2 2e-3 74.383-60.301 134.69-134.69 134.69z"/><g class="svg-thermometer"><path class="svg-thermometer-reflection" d="m377.48 837.76c-0.524 0-1.052-0.067-1.561-0.207-24.003-6.432-44.069-21.828-56.497-43.354-12.426-21.523-15.728-46.6-9.296-70.607 0.703-2.625 3.094-4.461 5.813-4.461 0.523 0 1.046 0.068 1.554 0.203 3.209 0.859 5.118 4.166 4.261 7.371-5.602 20.904-2.728 42.736 8.093 61.479 10.82 18.74 28.29 32.146 49.191 37.744 3.207 0.861 5.113 4.168 4.255 7.371-0.704 2.627-3.094 4.461-5.813 4.461z"/><g class="svg-thermometer"><path class="svg-thermometer-unit" d="m374.59 619.63h-30.171c-1.781 0-3.229-1.449-3.229-3.229 0-1.781 1.446-3.23 3.229-3.23h30.171c1.781 0 3.229 1.447 3.229 3.23 1e-3 1.78-1.449 3.229-3.229 3.229z"/><path class="svg-thermometer-unit" d="m362.29 600.37h-30.171c-1.335 0-2.421-1.086-2.421-2.422 0-1.334 1.086-2.42 2.421-2.42h30.171c1.335 0 2.422 1.086 2.422 2.42-1e-3 1.336-1.086 2.422-2.422 2.422z"/><path class="svg-thermometer-unit" d="m374.59 582.72h-30.171c-1.781 0-3.229-1.446-3.229-3.229s1.446-3.229 3.229-3.229h30.171c1.781 0 3.229 1.447 3.229 3.229s-1.449 3.229-3.229 3.229zm1e-3 -3.229h-30.173 30.173z"/><path class="svg-thermometer-unit" d="m362.29 563.46h-30.171c-1.335 0-2.421-1.086-2.421-2.422 0-1.334 1.086-2.422 2.421-2.422h30.171c1.335 0 2.422 1.088 2.422 2.422-1e-3 1.336-1.086 2.422-2.422 2.422z"/><path class="svg-thermometer-unit" d="m374.59 545.82h-30.171c-1.781 0-3.229-1.449-3.229-3.229 0-1.781 1.446-3.229 3.229-3.229h30.171c1.781 0 3.229 1.446 3.229 3.229s-1.449 3.229-3.229 3.229zm1e-3 -3.228h-30.173 30.173z"/><path class="svg-thermometer-unit" d="m362.29 526.56h-30.171c-1.335 0-2.421-1.088-2.421-2.422 0-1.336 1.086-2.422 2.421-2.422h30.171c1.335 0 2.422 1.086 2.422 2.422-1e-3 1.333-1.086 2.422-2.422 2.422z"/><path class="svg-thermometer-unit" d="m374.59 508.91h-30.171c-1.781 0-3.229-1.447-3.229-3.229 0-1.78 1.446-3.229 3.229-3.229h30.171c1.781 0 3.229 1.447 3.229 3.229 1e-3 1.779-1.449 3.229-3.229 3.229zm1e-3 -3.229h-30.173 30.173z"/><path class="svg-thermometer-unit" d="m362.29 489.66h-30.171c-1.335 0-2.421-1.087-2.421-2.422 0-1.336 1.086-2.424 2.421-2.424h30.171c1.335 0 2.422 1.088 2.422 2.424s-1.086 2.422-2.422 2.422z"/><path class="svg-thermometer-unit" d="m374.59 472.01h-30.171c-1.781 0-3.229-1.446-3.229-3.229 0-1.78 1.446-3.229 3.229-3.229h30.171c1.781 0 3.229 1.448 3.229 3.229 1e-3 1.78-1.449 3.229-3.229 3.229zm1e-3 -3.229h-30.173 30.173z"/><path class="svg-thermometer-unit" d="m362.29 452.75h-30.171c-1.335 0-2.421-1.086-2.421-2.422 0-1.335 1.086-2.421 2.421-2.421h30.171c1.335 0 2.422 1.086 2.422 2.421-1e-3 1.336-1.086 2.422-2.422 2.422z"/><path class="svg-thermometer-unit" d="m374.59 435.11h-30.171c-1.781 0-3.229-1.448-3.229-3.229s1.446-3.229 3.229-3.229h30.171c1.781 0 3.229 1.446 3.229 3.229s-1.449 3.229-3.229 3.229zm1e-3 -3.229h-30.173 30.173z"/><path class="svg-thermometer-unit" d="m362.29 415.86h-30.171c-1.335 0-2.421-1.09-2.421-2.424 0-1.336 1.086-2.422 2.421-2.422h30.171c1.335 0 2.422 1.086 2.422 2.422s-1.086 2.424-2.422 2.424z"/><path class="svg-thermometer-unit" d="m374.59 398.21h-30.171c-1.781 0-3.229-1.448-3.229-3.229s1.446-3.229 3.229-3.229h30.171c1.781 0 3.229 1.448 3.229 3.229 1e-3 1.782-1.449 3.229-3.229 3.229zm1e-3 -3.228h-30.173 30.173z"/><path class="svg-thermometer-unit" d="m362.29 378.96h-30.171c-1.335 0-2.421-1.087-2.421-2.422s1.086-2.421 2.421-2.421h30.171c1.335 0 2.422 1.086 2.422 2.421s-1.086 2.422-2.422 2.422z"/><path class="svg-thermometer-unit" d="m374.59 361.32h-30.171c-1.781 0-3.229-1.448-3.229-3.229s1.446-3.229 3.229-3.229h30.171c1.781 0 3.229 1.447 3.229 3.229s-1.449 3.229-3.229 3.229zm1e-3 -3.23h-30.173 30.173z"/><path class="svg-thermometer-unit" d="m362.29 342.06h-30.171c-1.335 0-2.421-1.086-2.421-2.421s1.086-2.422 2.421-2.422h30.171c1.335 0 2.422 1.086 2.422 2.422-1e-3 1.333-1.086 2.421-2.422 2.421z"/><path class="svg-thermometer-unit" d="m374.59 324.42h-30.171c-1.781 0-3.229-1.448-3.229-3.229 0-1.78 1.446-3.229 3.229-3.229h30.171c1.781 0 3.229 1.448 3.229 3.229 1e-3 1.78-1.449 3.229-3.229 3.229zm1e-3 -3.23h-30.173 30.173z"/><path class="svg-thermometer-unit" d="m362.29 305.16h-30.171c-1.335 0-2.421-1.087-2.421-2.422s1.086-2.422 2.421-2.422h30.171c1.335 0 2.422 1.086 2.422 2.422-1e-3 1.335-1.086 2.422-2.422 2.422z"/><path class="svg-thermometer-unit" d="m374.59 287.52h-30.171c-1.781 0-3.229-1.448-3.229-3.229s1.446-3.229 3.229-3.229h30.171c1.781 0 3.229 1.448 3.229 3.229 1e-3 1.78-1.449 3.229-3.229 3.229zm1e-3 -3.228h-30.173 30.173z"/><path class="svg-thermometer-unit" d="m362.29 268.26h-30.171c-1.335 0-2.421-1.086-2.421-2.422 0-1.335 1.086-2.422 2.421-2.422h30.171c1.335 0 2.422 1.087 2.422 2.422s-1.086 2.422-2.422 2.422z"/><path class="svg-thermometer-unit" d="m374.59 250.62h-30.171c-1.781 0-3.229-1.448-3.229-3.229s1.446-3.229 3.229-3.229h30.171c1.781 0 3.229 1.447 3.229 3.229s-1.449 3.229-3.229 3.229zm1e-3 -3.23h-30.173 30.173z"/></g><path class="svg-thermometer-border" d="m400 142.78c-46.444 0-84.093 37.649-84.094 84.093v415.6c-31.978 25.562-50.593 64.271-50.594 105.2 0 74.388 60.302 134.69 134.69 134.69 74.385 0 134.69-60.304 134.69-134.69 0-40.934-18.614-79.645-50.596-105.2v-415.6c4e-3 -46.442-37.647-84.094-84.09-84.094zm-0.1 30.805h0.1c29.43 0 53.289 23.86 53.289 53.292v428.94c32.756 18.998 52.92 54 52.92 91.869 0 58.658-47.553 106.21-106.21 106.21-58.659 0-106.21-47.551-106.21-106.21v-2e-3c0-37.867 20.163-72.869 52.919-91.871v-428.94c0-29.393 23.797-53.236 53.191-53.29z"/></g><text class="svg-goal-textarea" x="50%" y="90" dominant-baseline="middle" text-anchor="middle"/><g class="svg-percent"><text class="svg-percent-textarea" x="270" y="620" dominant-baseline="middle" text-anchor="end" data-value="0"/></g><g class="svg-amount"><text class="svg-amount-textarea" x="530" y="620" dominant-baseline="middle" data-value="0"/></g></svg>', mth.p_m(tsv.querySelector("svg")), s.replaceWith(tsv.querySelector("svg")), s = document.getElementById(i), tsv = null, "animate-progress-fill" in d == !0 && (document.addEventListener("scroll", mth.c_v), document.body.addEventListener("scroll", mth.c_v))
    }
}