const routes = {
  forgetPassword: {
    label: "Recover Your Password",
    link: route("password.request"),
    permission: null
  },
  postForgetPassword: {
    label: "Send Forget Password Email",
    link: route("password.email"),
    permission: null
  },
  postResetPassword: {
    label: "Send Reset Password",
    link: route("password.store"),
    permission: null
  },
  login: {
    label: "Login",
    link: route("login"),
    permission: null
  },
  passwordUpdate: {
    label: "Update Password",
    link: route("password.update"),
    permission: null
  },
  logout: {
    label: "Logout",
    link: route("logout"),
    permission: null
  },
  orderMaterials: {
    add: {
      label: "Add Order Material",
      link: route("order-materials.store"),
      permission: " OrderMaterials.Add"
    },
    update: {
      label: "Edit Order Material",
      link: (id) => route("order-materials.update", id),
      permission: " OrderMaterials.Edit"
    },
    list: {
      label: "Order Material List",
      link: route("order-materials.index"),
      permission: "OrderMaterials.Index"
    }
  },
  sampleTypes: {
    add: {
      label: "Add Sample Type",
      link: route("admin.sample-types.store"),
      permission: " SampleType.Add"
    },
    update: {
      label: "Edit Sample Type",
      link: (id) => route("admin.sample-types.update", id),
      permission: " SampleType.Edit"
    },
    list: {
      label: " Sample Type List",
      link: route("admin.sample-types.index"),
      permission: " SampleType.Index"
    },
    api: {
      list: {
        label: " Sample Type List",
        link: route("api.sample-types.index")
      }
    },
    show: {
      label: " Sample Type Show",
      link: (id) => route("api.sample-types.show", id),
      permission: " SampleType.Show"
    }
  },
  symptomGroups: {
    add: {
      label: "Add Symptom Group",
      link: route("admin.symptom-groups.store"),
      permission: " SymptomGroup.Add"
    },
    update: {
      label: "Edit Symptom Group",
      link: (id) => route("admin.symptom-groups.update", id),
      permission: " SymptomGroup.Edit"
    },
    list: {
      label: " Symptom Group List",
      link: route("admin.symptom-groups.index"),
      permission: " SymptomGroup.Index"
    },
    api: {
      list: {
        label: " Symptom Group List",
        link: route("api.symptom-groups.index")
      }
    },
    show: {
      label: " Symptom Group Show",
      link: (id) => route("api.symptom-groups.show", id),
      permission: " SymptomGroup.Show"
    }
  },
  symptoms: {
    add: {
      label: "Add Symptom",
      link: route("admin.symptoms.store"),
      permission: " Symptom.Add"
    },
    update: {
      label: "Edit Symptom",
      link: (id) => route("admin.symptoms.update", id),
      permission: " Symptom.Edit"
    },
    list: {
      label: " Symptom List",
      link: route("admin.symptoms.index"),
      permission: " Symptom.Index"
    },
    // api: {
    //     list: {
    //         label: " Symptom Group List",
    //         link: route("api.symptoms.index"),
    //     }
    // },
    show: {
      label: " Symptom Show",
      link: (id) => route("api.symptoms.show", id),
      permission: " Symptom.Show"
    }
  },
  diseases: {
    add: {
      label: "Add Disease",
      link: route("admin.diseases.store"),
      permission: " Disease.Add"
    },
    update: {
      label: "Edit Disease",
      link: (id) => route("admin.diseases.update", id),
      permission: " Disease.Edit"
    },
    list: {
      label: " Disease List",
      link: route("admin.diseases.index"),
      permission: " Disease.Index"
    },
    // api: {
    //     list: {
    //         label: " Symptom Group List",
    //         link: route("api.diseases.index"),
    //     }
    // },
    show: {
      label: " Disease Show",
      link: (id) => route("api.diseases.show", id),
      permission: " Disease.Show"
    }
  },
  consents: {
    add: {
      label: "Add Consent",
      link: route("admin.consents.store"),
      permission: " Consent.Add"
    },
    update: {
      label: "Edit Consent",
      link: (id) => route("admin.consents.update", id),
      permission: " Consent.Edit"
    },
    list: {
      label: " Consent List",
      link: route("admin.consents.index"),
      permission: " Consent.Index"
    },
    // api: {
    //     list: {
    //         label: " Consent List",
    //         link: route("api.consents.index"),
    //     }
    // },
    show: {
      label: " Consent Show",
      link: (id) => route("api.consents.show", id),
      permission: " Consent.Show"
    }
  },
  tests: {
    add: {
      label: "Add Test",
      link: route("admin.tests.create"),
      permission: "Tests Add"
    },
    store: {
      label: "Add Test",
      link: route("admin.tests.store"),
      permission: "Tests Add"
    },
    edit: {
      label: "Edit Test",
      link: (id) => route("admin.tests.edit", id),
      permission: "Test Edit"
    },
    update: {
      label: "Edit Test",
      link: (id) => route("admin.tests.update", id),
      permission: "Test Edit"
    },
    delete: {
      label: "Delete Test",
      link: (id) => route("admin.tests.destroy", id),
      permission: "Delete Edit"
    },
    list: {
      label: "Test List",
      link: route("admin.tests.index"),
      permission: "Tests Index"
    },
    api: {
      list: {
        label: "Test List",
        link: route("api.tests.index"),
        permission: "Test Index"
      }
    }
    // show: {
    //     label: "Test Show",
    //     link: (id) => route("api.tests.show", id),
    //     permission: "Test Show"
    // },
  },
  orders: {
    add: {
      label: "Add Order",
      link: route("orders.create"),
      permission: "Order Add"
    },
    store: {
      label: "Add Order",
      link: route("orders.store"),
      permission: "Order Add"
    },
    show: {
      label: "Show Order",
      link: (id) => route("orders.show", id),
      permission: "Order Show"
    },
    edit: {
      label: "Edit Package",
      link: (id, step) => route("orders.edit", { order: id, step }),
      permission: "Package Edit"
    },
    update: {
      label: "Package Test",
      link: (id, step) => route("orders.update", { order: id, step }),
      permission: "Package Edit"
    },
    delete: {
      label: "Package Test",
      link: (id) => route("orders.destroy", id),
      permission: "Package Edit"
    },
    list: {
      label: "Package List",
      link: route("orders.index"),
      permission: "Packages Index"
    }
    // api: {
    //     list: {
    //         label: "Test List",
    //         link: route("api.tests.index"),
    //         permission: "Test Index"
    //     }
    // },
    // show: {
    //     label: "Test Show",
    //     link: (id) => route("api.tests.show", id),
    //     permission: "Test Show"
    // },
  },
  users: {
    add: {
      label: "Add User",
      link: route("admin.users.store"),
      permission: " User.Add"
    },
    update: {
      label: "Edit User",
      link: (id) => route("admin.users.update", id),
      permission: " User.Edit"
    },
    updatePassword: {
      label: "Edit User",
      link: (id) => route("admin.users.updatePassword", id),
      permission: " User.ChangePassword"
    },
    list: {
      label: " User List",
      link: route("admin.users.index"),
      permission: " User.Index"
    },
    show: {
      label: " User Show",
      link: (id) => route("api.users.show", id),
      permission: " User.Show"
    },
    api: {
      list: {
        label: "Users List",
        link: route("api.users.index"),
        permission: "Users Index"
      }
    }
  }
};
const routes$1 = routes;
export {
  routes$1 as r
};
