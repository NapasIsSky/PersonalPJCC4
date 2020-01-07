const component = {
  login: {
    component: "Login",
    url: "/login"
  },
  home: {
    component: "Home",
    url: "/home"
  },
  import: {
    component: "Import",
    url: "/import"
  },
  export: {
    component: "Export",
    url: "/export"
  }
};

export default {
  //role name as a key.
  manager: {
    routes: [...Object.values(component)]
  },
  staff: {
    routes: [
      component.login,
      component.home,
      component.import,
      component.export
    ]
  },
  guest: {
    routes: [component.login, component.logout]
  }
};
