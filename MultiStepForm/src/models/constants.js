const plans = {
  ARCADE: {
    title: "Arcade",
    yearly: 90,
    monthly: 9,
    icon: "icon-arcade.svg",
  },
  ADVANCED: {
    title: "Advanced",
    yearly: 120,
    monthly: 12,
    icon: "icon-advanced.svg",
  },
  PRO: {
    title: "Pro",
    yearly: 150,
    monthly: 15,
    icon: "icon-pro.svg",
  },
};

const addons = {
  ONLINE_SERVICE: {
    title: "Online Service",
    description: "Access to multiplayer games",
    yearly: 10,
    monthly: 1,
  },
  LARGER_STORAGE: {
    title: "Larger Storage",
    description:"Extra 1TB of cloud save",
    yearly: 20,
    monthly: 2,
  },
  CUSTOMIZABLE_PROFILE: {
    title: "Customizable Profile",
    description:"Custom theme on your profile",
    yearly: 20,
    monthly: 2,
  },
};

const steps = {
  STEP_1 : {
    path: "/",
    nextPath : "/step-2",
    description:"YOUR INFO"
  },
  STEP_2 : {
    path: "/step-2",
    prevPath : "/",
    nextPath : "/step-3",
    description:"SELECT PLAN"
  },
  STEP_3 : {
    path: "/step-3",
    prevPath : "/step-2",
    nextPath : "/summary",
    description:"ADD-ONS"
  },
  STEP_4 : {
    path: "/summary",
    prevPath : "/step-3",
    nextPath : "/confirm",
    description:"SUMMARY"
  },
}

export { plans, addons,steps };
