"use strict";
!async function() {
    let e;
    const t = document.querySelector(".kanban-update-item-sidebar")
      , a = document.querySelector(".kanban-wrapper")
      , n = document.querySelector(".comment-editor")
      , d = document.querySelector(".kanban-add-new-board")
      , i = [].slice.call(document.querySelectorAll(".kanban-add-board-input"))
      , o = document.querySelector(".kanban-add-board-btn")
      , s = document.querySelector("#due-date")
      , r = $(".select2")
      , l = document.querySelector("html").getAttribute("data-assets-path")
      , c = new bootstrap.Offcanvas(t)
      , u = await fetch(l + "json/kanban.json");
    if (u.ok || console.error("error", u),
    e = await u.json(),
    s && s.flatpickr({
        monthSelectorType: "static",
        altInput: !0,
        altFormat: "j F, Y",
        dateFormat: "Y-m-d"
    }),
    r.length) {
        function A(e) {
            return e.id ? "<div class='badge " + $(e.element).data("color") + " rounded-pill'> " + e.text + "</div>" : e.text
        }
        r.each((function() {
            var e = $(this);
            e.wrap("<div class='position-relative'></div>").select2({
                placeholder: "Select Label",
                dropdownParent: e.parent(),
                templateResult: A,
                templateSelection: A,
                escapeMarkup: function(e) {
                    return e
                }
            })
        }
        ))
    }
    function p(e, t, a, n, d) {
        var i = t ? " pull-up" : ""
          , o = a ? "avatar-" + a : ""
          , s = null == d ? " " : d.split(",");
        return null == e ? " " : e.split(",").map((function(e, t, a) {
            var d = n && t !== a.length - 1 ? " me-" + n : "";
            return "<div class='avatar " + o + d + "'data-bs-toggle='tooltip' data-bs-placement='top'title='" + s[t] + "'><img src='" + l + "img/avatars/" + e + "' alt='Avatar' class='rounded-circle " + i + "'></div>"
        }
        )).join(" ")
    }
    n && new Quill(n,{
        modules: {
            toolbar: ".comment-toolbar"
        },
        placeholder: "Write a Comment... ",
        theme: "snow"
    });
    const m = new jKanban({
        element: ".kanban-wrapper",
        gutter: "15px",
        widthBoard: "250px",
        dragItems: !0,
        boards: e,
        dragBoards: !0,
        addItemButton: !0,
        buttonContent: "+ Add Item",
        itemAddOptions: {
            enabled: !0,
            content: "+ Add New Item",
            class: "kanban-title-button btn",
            footer: !1
        },
        click: function(e) {
            let a = e
              , n = a.getAttribute("data-eid") ? a.querySelector(".kanban-text").textContent : a.textContent
              , d = a.getAttribute("data-due-date")
              , i = new Date
              , o = i.getFullYear()
              , s = d ? d + ", " + o : i.getDate() + " " + i.toLocaleString("en", {
                month: "long"
            }) + ", " + o
              , l = a.getAttribute("data-badge-text")
              , u = a.getAttribute("data-assigned");
            c.show(),
            t.querySelector("#title").value = n,
            t.querySelector("#due-date").nextSibling.value = s,
            $(".kanban-update-item-sidebar").find(r).val(l).trigger("change"),
            t.querySelector(".assigned").innerHTML = "",
            t.querySelector(".assigned").insertAdjacentHTML("afterbegin", p(u, !1, "xs", "1", e.getAttribute("data-members")) + "<div class='avatar avatar-xs ms-1'><span class='avatar-initial rounded-circle bg-label-secondary'><i class='ti ti-plus ti-xs text-heading'></i></span></div>")
        },
        buttonClick: function(e, t) {
            const a = document.createElement("form");
            a.setAttribute("class", "new-item-form"),
            a.innerHTML = '<div class="mb-3"><textarea class="form-control add-new-item" rows="2" placeholder="Add Content" autofocus required></textarea></div><div class="mb-3"><button type="submit" class="btn btn-primary btn-sm me-2">Add</button><button type="button" class="btn btn-label-secondary btn-sm cancel-add-item">Cancel</button></div>',
            m.addForm(t, a),
            a.addEventListener("submit", (function(e) {
                e.preventDefault();
                const n = [].slice.call(document.querySelectorAll(".kanban-board[data-id=" + t + "] .kanban-item"));
                m.addElement(t, {
                    title: "<span class='kanban-text'>" + e.target[0].value + "</span>",
                    id: t + "-" + n.length + 1
                });
                [].slice.call(document.querySelectorAll(".kanban-board[data-id=" + t + "] .kanban-text")).forEach((function(e) {
                    e.insertAdjacentHTML("beforebegin", "<div class='dropdown kanban-tasks-item-dropdown'><i class='dropdown-toggle ti ti-dots-vertical' id='kanban-tasks-item-dropdown' data-bs-toggle='dropdown' aria-haspopup='true' aria-expanded='false'></i><div class='dropdown-menu dropdown-menu-end' aria-labelledby='kanban-tasks-item-dropdown'><a class='dropdown-item' href='javascript:void(0)'>Copy task link</a><a class='dropdown-item' href='javascript:void(0)'>Duplicate task</a><a class='dropdown-item delete-task' href='javascript:void(0)'>Delete</a></div></div>")
                }
                ));
                const d = [].slice.call(document.querySelectorAll(".kanban-item .kanban-tasks-item-dropdown"));
                d && d.forEach((function(e) {
                    e.addEventListener("click", (function(e) {
                        e.stopPropagation()
                    }
                    ))
                }
                ));
                [].slice.call(document.querySelectorAll(".kanban-board[data-id=" + t + "] .delete-task")).forEach((function(e) {
                    e.addEventListener("click", (function() {
                        const e = this.closest(".kanban-item").getAttribute("data-eid");
                        m.removeElement(e)
                    }
                    ))
                }
                )),
                a.remove()
            }
            )),
            a.querySelector(".cancel-add-item").addEventListener("click", (function(e) {
                a.remove()
            }
            ))
        }
    });
    a && new PerfectScrollbar(a);
    const b = document.querySelector(".kanban-container")
      , v = [].slice.call(document.querySelectorAll(".kanban-title-board"))
      , g = [].slice.call(document.querySelectorAll(".kanban-item"));
    g && g.forEach((function(e) {
        const t = "<span class='kanban-text'>" + e.textContent + "</span>";
        let a = "";
        var n, d, i, o, s, r;
        null !== e.getAttribute("data-image") && (a = "<img class='img-fluid rounded mb-2' src='" + l + "img/elements/" + e.getAttribute("data-image") + "'>"),
        e.textContent = "",
        void 0 !== e.getAttribute("data-badge") && void 0 !== e.getAttribute("data-badge-text") && e.insertAdjacentHTML("afterbegin", (n = e.getAttribute("data-badge"),
        d = e.getAttribute("data-badge-text"),
        "<div class='d-flex justify-content-between flex-wrap align-items-center mb-2 pb-1'><div class='item-badges'> <div class='badge rounded-pill bg-label-" + n + "'> " + d + "</div></div><div class='dropdown kanban-tasks-item-dropdown'><i class='dropdown-toggle ti ti-dots-vertical' id='kanban-tasks-item-dropdown' data-bs-toggle='dropdown' aria-haspopup='true' aria-expanded='false'></i><div class='dropdown-menu dropdown-menu-end' aria-labelledby='kanban-tasks-item-dropdown'><a class='dropdown-item' href='javascript:void(0)'>Copy task link</a><a class='dropdown-item' href='javascript:void(0)'>Duplicate task</a><a class='dropdown-item delete-task' href='javascript:void(0)'>Delete</a></div></div></div>" + a + t)),
        void 0 === e.getAttribute("data-comments") && void 0 === e.getAttribute("data-due-date") && void 0 === e.getAttribute("data-assigned") || e.insertAdjacentHTML("beforeend", (i = e.getAttribute("data-attachments"),
        o = e.getAttribute("data-comments"),
        s = e.getAttribute("data-assigned"),
        r = e.getAttribute("data-members"),
        "<div class='d-flex justify-content-between align-items-center flex-wrap mt-2 pt-1'><div class='d-flex'> <span class='d-flex align-items-center me-2'><i class='ti ti-paperclip ti-xs me-1'></i><span class='attachments'>" + i + "</span></span> <span class='d-flex align-items-center ms-1'><i class='ti ti-message-dots ti-xs me-1'></i><span> " + o + " </span></span></div><div class='avatar-group d-flex align-items-center assigned-avatar'>" + p(s, !0, "xs", null, r) + "</div></div>"))
    }
    ));
    [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map((function(e) {
        return new bootstrap.Tooltip(e)
    }
    ));
    const f = [].slice.call(document.querySelectorAll(".kanban-tasks-item-dropdown"));
    f && f.forEach((function(e) {
        e.addEventListener("click", (function(e) {
            e.stopPropagation()
        }
        ))
    }
    )),
    o && o.addEventListener("click", (()=>{
        i.forEach((e=>{
            e.value = "",
            e.classList.toggle("d-none")
        }
        ))
    }
    )),
    b && b.appendChild(d),
    v && v.forEach((function(e) {
        e.addEventListener("mouseenter", (function() {
            this.contentEditable = "true"
        }
        )),
        e.insertAdjacentHTML("afterend", "<div class='dropdown'><i class='dropdown-toggle ti ti-dots-vertical cursor-pointer' id='board-dropdown' data-bs-toggle='dropdown' aria-haspopup='true' aria-expanded='false'></i><div class='dropdown-menu dropdown-menu-end' aria-labelledby='board-dropdown'><a class='dropdown-item delete-board' href='javascript:void(0)'> <i class='ti ti-trash ti-xs' me-1></i> <span class='align-middle'>Delete</span></a><a class='dropdown-item' href='javascript:void(0)'><i class='ti ti-edit ti-xs' me-1></i> <span class='align-middle'>Rename</span></a><a class='dropdown-item' href='javascript:void(0)'><i class='ti ti-archive ti-xs' me-1></i> <span class='align-middle'>Archive</span></a></div></div>")
    }
    ));
    const w = [].slice.call(document.querySelectorAll(".delete-board"));
    w && w.forEach((function(e) {
        e.addEventListener("click", (function() {
            const e = this.closest(".kanban-board").getAttribute("data-id");
            m.removeBoard(e)
        }
        ))
    }
    ));
    const k = [].slice.call(document.querySelectorAll(".delete-task"));
    k && k.forEach((function(e) {
        e.addEventListener("click", (function() {
            const e = this.closest(".kanban-item").getAttribute("data-eid");
            m.removeElement(e)
        }
        ))
    }
    ));
    const h = document.querySelector(".kanban-add-board-cancel-btn");
    h && h.addEventListener("click", (function() {
        i.forEach((e=>{
            e.classList.toggle("d-none")
        }
        ))
    }
    )),
    d && d.addEventListener("submit", (function(e) {
        e.preventDefault();
        const t = this.querySelector(".form-control").value
          , a = t.replace(/\s+/g, "-").toLowerCase();
        m.addBoards([{
            id: a,
            title: t
        }]);
        const n = document.querySelectorAll(".kanban-board:last-child")[0];
        if (n) {
            n.querySelector(".kanban-title-board").insertAdjacentHTML("afterend", "<div class='dropdown'><i class='dropdown-toggle ti ti-dots-vertical cursor-pointer' id='board-dropdown' data-bs-toggle='dropdown' aria-haspopup='true' aria-expanded='false'></i><div class='dropdown-menu dropdown-menu-end' aria-labelledby='board-dropdown'><a class='dropdown-item delete-board' href='javascript:void(0)'> <i class='ti ti-trash ti-xs' me-1></i> <span class='align-middle'>Delete</span></a><a class='dropdown-item' href='javascript:void(0)'><i class='ti ti-edit ti-xs' me-1></i> <span class='align-middle'>Rename</span></a><a class='dropdown-item' href='javascript:void(0)'><i class='ti ti-archive ti-xs' me-1></i> <span class='align-middle'>Archive</span></a></div></div>"),
            n.querySelector(".kanban-title-board").addEventListener("mouseenter", (function() {
                this.contentEditable = "true"
            }
            ))
        }
        const o = n.querySelector(".delete-board");
        o && o.addEventListener("click", (function() {
            const e = this.closest(".kanban-board").getAttribute("data-id");
            m.removeBoard(e)
        }
        )),
        i && i.forEach((e=>{
            e.classList.add("d-none")
        }
        )),
        b && b.appendChild(d)
    }
    )),
    t.addEventListener("hidden.bs.offcanvas", (function() {
        t.querySelector(".ql-editor").firstElementChild.innerHTML = ""
    }
    )),
    t && t.addEventListener("shown.bs.offcanvas", (function() {
        [].slice.call(t.querySelectorAll('[data-bs-toggle="tooltip"]')).map((function(e) {
            return new bootstrap.Tooltip(e)
        }
        ))
    }
    ))
}();
