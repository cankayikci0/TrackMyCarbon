const challenges = [
    {
      title: "Turn off lights when leaving a room",
      description: "Make it a habit to turn off the lights when you leave a room to save energy.",
      carbonReduction: 0.2, // kg CO2 per day
      points: 5 // points for daily action
    },
    {
      title: "Unplug devices when not in use",
      description: "Reduce energy consumption by unplugging devices that are not in use.",
      carbonReduction: 0.5, // kg CO2 per day
      points: 7
    },
    {
      title: "Use public transport once a week",
      description: "Opt for public transportation at least once a week to reduce carbon emissions.",
      carbonReduction: 2.5, // kg CO2 per week
      points: 10 // points for once a week
    },
    {
      title: "Carpool to work or school",
      description: "Share rides with others to decrease the number of vehicles on the road.",
      carbonReduction: 1.5, // kg CO2 per day
      points: 8
    },
    {
      title: "Go meatless one day a week",
      description: "Reduce your carbon footprint by not eating meat one day each week.",
      carbonReduction: 3.0, // kg CO2 per week
      points: 10
    },
    {
      title: "Reduce shower time by 2 minutes",
      description: "Shorten your shower time to save water and energy.",
      carbonReduction: 0.1, // kg CO2 per day
      points: 5
    },
    {
      title: "Switch to LED lights",
      description: "Replace traditional bulbs with LED lights to reduce energy usage.",
      carbonReduction: 0.3, // kg CO2 per day
      points: 6
    },
    {
      title: "Use reusable shopping bags",
      description: "Bring your own bags when shopping to cut down on plastic waste.",
      carbonReduction: 0.02, // kg CO2 per use
      points: 3
    },
    {
      title: "Wash clothes in cold water",
      description: "Save energy by washing clothes in cold water instead of hot.",
      carbonReduction: 0.4, // kg CO2 per wash
      points: 5
    },
    {
      title: "Limit heating/air conditioning use",
      description: "Be mindful of heating and cooling usage to conserve energy.",
      carbonReduction: 1.0, // kg CO2 per day
      points: 7
    },
    {
      title: "Buy local produce",
      description: "Support local farmers and reduce transportation emissions by buying local.",
      carbonReduction: 0.3, // kg CO2 per purchase
      points: 4
    },
    {
      title: "Opt for digital receipts",
      description: "Choose electronic receipts to reduce paper waste.",
      carbonReduction: 0.01, // kg CO2 per receipt
      points: 2
    },
    {
      title: "Avoid single-use plastics",
      description: "Reduce plastic waste by avoiding single-use plastic items.",
      carbonReduction: 0.05, // kg CO2 per use
      points: 3
    },
    {
      title: "Conduct a home energy audit",
      description: "Assess your home's energy usage to identify areas for improvement.",
      carbonReduction: 0.2, // kg CO2 per day
      points: 5
    },
    {
      title: "Lower your thermostat in winter",
      description: "Save energy by setting your thermostat lower during winter months.",
      carbonReduction: 0.8, // kg CO2 per day
      points: 6
    },
    {
      title: "Dry clothes on a clothesline",
      description: "Air dry your clothes instead of using a dryer to save energy.",
      carbonReduction: 0.5, // kg CO2 per load
      points: 6
    },
    {
      title: "Bike instead of drive for short trips",
      description: "Use a bicycle for short trips instead of driving.",
      carbonReduction: 1.0, // kg CO2 per trip
      points: 8
    },
    {
      title: "Plant a tree or shrub",
      description: "Contribute to the environment by planting trees or shrubs.",
      carbonReduction: 15.0, // kg CO2 per tree per year
      points: 20 // points for yearly action
    },
    {
      title: "Cook with a lid on pots and pans",
      description: "Use a lid to cook faster and save energy.",
      carbonReduction: 0.2, // kg CO2 per use
      points: 3
    },
    {
      title: "Switch to a low-flow showerhead",
      description: "Install a low-flow showerhead to reduce water usage.",
      carbonReduction: 0.3, // kg CO2 per day
      points: 6
    },
    {
      title: "Use reusable water bottles",
      description: "Avoid single-use plastic bottles by using reusable ones.",
      carbonReduction: 0.1, // kg CO2 per use
      points: 3
    },
    {
      title: "Reduce paper towel usage",
      description: "Limit the use of paper towels by using cloth alternatives.",
      carbonReduction: 0.1, // kg CO2 per day
      points: 4
    },
    {
      title: "Compost food scraps",
      description: "Reduce food waste by composting organic materials.",
      carbonReduction: 0.3, // kg CO2 per day
      points: 5
    },
    {
      title: "Bring your own coffee mug",
      description: "Carry a reusable coffee mug to reduce disposable cup waste.",
      carbonReduction: 0.05, // kg CO2 per use
      points: 3
    },
    {
      title: "Take shorter showers",
      description: "Be mindful of shower length to conserve water.",
      carbonReduction: 0.1, // kg CO2 per day
      points: 5
    },
    {
      title: "Buy products with minimal packaging",
      description: "Choose items that use less packaging to reduce waste.",
      carbonReduction: 0.05, // kg CO2 per purchase
      points: 3
    },
    {
      title: "Replace air filters in HVAC systems",
      description: "Keep your HVAC system efficient by regularly replacing air filters.",
      carbonReduction: 0.2, // kg CO2 per month
      points: 4
    },
    {
      title: "Use rechargeable batteries",
      description: "Opt for rechargeable batteries instead of disposable ones.",
      carbonReduction: 0.5, // kg CO2 per battery
      points: 5
    },
    {
      title: "Telecommute when possible",
      description: "Work from home to reduce commuting emissions.",
      carbonReduction: 2.0, // kg CO2 per day
      points: 10
    },
    {
      title: "Buy energy-efficient appliances",
      description: "Invest in appliances that use less energy.",
      carbonReduction: 1.5, // kg CO2 per appliance per year
      points: 8 // points for yearly action
    },
    {
      title: "Recycle electronics properly",
      description: "Dispose of electronic waste in an environmentally friendly manner.",
      carbonReduction: 0.3, // kg CO2 per device
      points: 5
    },
    {
      title: "Use public bike-sharing systems",
      description: "Take advantage of bike-sharing programs to reduce vehicle use.",
      carbonReduction: 0.5, // kg CO2 per use
      points: 4
    },
    {
      title: "Share books instead of buying new",
      description: "Exchange books with friends to minimize purchases.",
      carbonReduction: 0.1, // kg CO2 per book
      points: 2
    },
    {
      title: "Donate old clothes",
      description: "Give away clothes you no longer wear instead of throwing them away.",
      carbonReduction: 0.3, // kg CO2 per item
      points: 5
    },
    {
      title: "Avoid fast fashion",
      description: "Choose sustainable fashion options over fast fashion brands.",
      carbonReduction: 0.5, // kg CO2 per item
      points: 6
    },
    {
      title: "Use cloth napkins instead of paper",
      description: "Reduce waste by using reusable cloth napkins.",
      carbonReduction: 0.02, // kg CO2 per meal
      points: 3
    },
    {
      title: "Grow your own herbs or vegetables",
      description: "Cultivate your own food to reduce reliance on store-bought items.",
      carbonReduction: 0.5, // kg CO2 per week
      points: 5
    },
    {
      title: "Avoid products with palm oil",
      description: "Choose products that do not contain palm oil to protect ecosystems.",
      carbonReduction: 0.1, // kg CO2 per item
      points: 4
    },
    {
      title: "Support renewable energy",
      description: "Opt for green energy options for your home if available.",
      carbonReduction: 1.0, // kg CO2 per day
      points: 7
    },
    {
      title: "Use a broom instead of a vacuum",
      description: "Sweep instead of vacuuming to save energy.",
      carbonReduction: 0.2, // kg CO2 per use
      points: 3
    },
    {
      title: "Limit screen time",
      description: "Reduce the use of electronic devices to save energy.",
      carbonReduction: 0.1, // kg CO2 per day
      points: 4
    }
  ];

  export default challenges;