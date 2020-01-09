const components = {
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
    routes: [...Object.values(components)],
    redirect: ['/home']
  },
  staff: {
    routes: [
      components.login,
      components.home,
      components.import,
      components.export
    ],
    redirect: ['/home']
  },
  guest: {
    routes: [components.login],
    redirect: ['/login']
  }
};

