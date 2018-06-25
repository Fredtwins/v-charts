export default [
  {
    path: "/",
    name: "首页",
    component: () => import("../pages/front-page")
  },
  {
    path: "/line",
    name: "折线图",
    component: () => import("../pages/chart-line")
  },
  {
    path: "/columns-rows",
    name: "data",
    component: () => import("../pages/columns-rows")
  },
  {
    path: "/custom-props",
    name: "options",
    component: () => import("../pages/custom-props")
  },
  {
    path: "/events",
    name: "events",
    component: () => import("../pages/events")
  },
  {
    path: "/extend",
    name: "extend",
    component: () => import("../pages/extend")
  },
  {
    path: "/hook",
    name: "hook",
    component: () => import("../pages/hook")
  },
  {
    path: "/init",
    name: "init",
    component: () => import("../pages/init")
  },
  {
    path: "/judge-width",
    name: "judge-width",
    component: () => import("../pages/judge-width")
  },
  {
    path: "/loading-dataempty",
    name: "loading-empty",
    component: () => import("../pages/loading-dataempty")
  },
  {
    path: "/mark",
    name: "mark",
    component: () => import("../pages/mark")
  },
  {
    path: "/resize",
    name: "resize",
    component: () => import("../pages/resize")
  },
  {
    path: "/set-option",
    name: "set-option",
    component: () => import("../pages/set-option")
  },
  {
    path: "/number-format",
    name: "number-format",
    component: () => import("../pages/number-format")
  }
];
