const iconPrompts = [
    {
        title: "Turn off lights when leaving a room",
        prompt: "An icon depicting a person exiting a room with a closed light bulb, symbolizing energy saving."
    },
    {
        title: "Unplug devices when not in use",
        prompt: "An icon showing an electric plug being removed from a socket, illustrating reduced energy consumption."
    },
    {
        title: "Use public transport once a week",
        prompt: "An icon of a bus or train with a person, representing the use of public transportation."
    },
    {
        title: "Carpool to work or school",
        prompt: "An icon of a car with multiple people inside, indicating ride-sharing and reduced vehicle use."
    },
    {
        title: "Go meatless one day a week",
        prompt: "An icon showing a plate with vegetables and a 'no meat' symbol, promoting a plant-based meal."
    },
    {
        title: "Reduce shower time by 2 minutes",
        prompt: "An icon depicting a shower head with a timer, encouraging shorter showers."
    },
    {
        title: "Switch to LED lights",
        prompt: "An icon of an LED light bulb with an energy saving symbol."
    },
    {
        title: "Use reusable shopping bags",
        prompt: "An icon of a shopping bag with the 'no plastic' symbol, emphasizing sustainability."
    },
    {
        title: "Wash clothes in cold water",
        prompt: "An icon of a washing machine with a cold water symbol, promoting energy-efficient laundry."
    },
    {
        title: "Limit heating/air conditioning use",
        prompt: "An icon showing a thermostat with a downward arrow, indicating reduced energy usage."
    },
    {
        title: "Buy local produce",
        prompt: "An icon of a farmer's market with local produce, highlighting support for local farming."
    },
    {
        title: "Opt for digital receipts",
        prompt: "An icon showing a smartphone displaying a digital receipt, reducing paper waste."
    },
    {
        title: "Avoid single-use plastics",
        prompt: "An icon depicting a crossed-out plastic bottle, symbolizing the reduction of plastic waste."
    },
    {
        title: "Conduct a home energy audit",
        prompt: "An icon showing a house with a magnifying glass, representing energy efficiency assessment."
    },
    {
        title: "Lower your thermostat in winter",
        prompt: "An icon of a thermostat with a snowflake, indicating lower temperature settings in winter."
    },
    {
        title: "Dry clothes on a clothesline",
        prompt: "An icon of a clothesline with hanging clothes, promoting air drying for energy savings."
    },
    {
        title: "Bike instead of drive for short trips",
        prompt: "An icon of a bicycle, symbolizing choosing cycling over driving for short distances."
    },
    {
        title: "Plant a tree or shrub",
        prompt: "An icon depicting a person planting a tree, contributing to environmental sustainability."
    },
    {
        title: "Cook with a lid on pots and pans",
        prompt: "An icon showing a pot with a lid, promoting energy-efficient cooking."
    },
    {
        title: "Switch to a low-flow showerhead",
        prompt: "An icon of a low-flow showerhead, highlighting water conservation."
    },
    {
        title: "Use reusable water bottles",
        prompt: "An icon of a reusable water bottle with a 'no plastic' symbol."
    },
    {
        title: "Reduce paper towel usage",
        prompt: "An icon of a cloth towel next to a paper towel, promoting reusable alternatives."
    },
    {
        title: "Compost food scraps",
        prompt: "An icon of a compost bin with food scraps, encouraging organic waste recycling."
    },
    {
        title: "Bring your own coffee mug",
        prompt: "An icon of a reusable coffee mug with a 'no disposable' symbol."
    },
    {
        title: "Take shorter showers",
        prompt: "An icon depicting a person in a shower with a timer, promoting water conservation."
    },
    {
        title: "Buy products with minimal packaging",
        prompt: "An icon of a product with minimal packaging, emphasizing waste reduction."
    },
    {
        title: "Replace air filters in HVAC systems",
        prompt: "An icon of an air filter being replaced, promoting HVAC efficiency."
    },
    {
        title: "Use rechargeable batteries",
        prompt: "An icon of rechargeable batteries with a recycling symbol."
    },
    {
        title: "Telecommute when possible",
        prompt: "An icon showing a person working from home, reducing commuting emissions."
    },
    {
        title: "Buy energy-efficient appliances",
        prompt: "An icon of an energy-efficient appliance with a green energy symbol."
    },
    {
        title: "Recycle electronics properly",
        prompt: "An icon depicting electronic devices with a recycling symbol."
    },
    {
        title: "Use public bike-sharing systems",
        prompt: "An icon showing a bike with a shared symbol, encouraging bike-sharing."
    },
    {
        title: "Share books instead of buying new",
        prompt: "An icon depicting two people exchanging books, promoting sharing and sustainability."
    },
    {
        title: "Donate old clothes",
        prompt: "An icon of a clothing donation box, encouraging recycling of textiles."
    },
    {
        title: "Avoid fast fashion",
        prompt: "An icon showing a sustainable fashion symbol with a crossed-out fast fashion logo."
    },
    {
        title: "Use cloth napkins instead of paper",
        prompt: "An icon of a cloth napkin next to a paper napkin, promoting reusability."
    },
    {
        title: "Grow your own herbs or vegetables",
        prompt: "An icon depicting a garden with herbs and vegetables, promoting home gardening."
    },
    {
        title: "Avoid products with palm oil",
        prompt: "An icon of a palm tree with a 'no palm oil' symbol, supporting sustainable choices."
    },
    {
        title: "Support renewable energy",
        prompt: "An icon depicting a solar panel and wind turbine, symbolizing green energy."
    },
    {
        title: "Use a broom instead of a vacuum",
        prompt: "An icon of a broom with a vacuum cleaner crossed out, promoting energy-saving cleaning methods."
    },
    {
        title: "Limit screen time",
        prompt: "An icon depicting a person with a timer next to a screen, encouraging reduced electronic use."
    }
];

// Example of how to send prompts to DALL-E
const axios = require('axios'); // Axios'u yükleyin (npm install axios)

const apiKey = 'YOUR_API_KEY'; // Buraya DALL-E API anahtarınızı koyun.

const createIcon = async (prompt) => {
    try {
        const response = await axios.post('https://api.openai.com/v1/images/generations', {
            prompt: prompt,
            n: 1,
            size: '1024x1024' // İstenilen boyut
        }, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });
        const imageUrl = response.data.data[0].url;
        console.log('Icon created:', imageUrl);
    } catch (error) {
        console.error('Error creating icon:', error);
    }
};

// Örnek ikon yaratma çağrısı
iconPrompts.forEach(icon => {
    console.log(`Creating icon for: ${icon.title}`);
    createIcon(icon.prompt);
});
