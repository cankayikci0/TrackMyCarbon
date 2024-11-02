const iconPrompts = [
    { subtitle: "turnofflight", prompt: "An icon depicting a person exiting a room with a closed light bulb, symbolizing energy saving.", url: null },
    { subtitle: "unplugdevice", prompt: "An icon showing an electric plug being removed from a socket, illustrating reduced energy consumption.", url: null },
    { subtitle: "publictransport", prompt: "An icon of a bus or train with a person, representing the use of public transportation.", url: null },
    { subtitle: "carpool", prompt: "An icon of a car with multiple people inside, indicating ride-sharing and reduced vehicle use.", url: null },
    { subtitle: "meatlessday", prompt: "An icon showing a plate with vegetables and a 'no meat' symbol, promoting a plant-based meal.", url: null },
    { subtitle: "shortenshower", prompt: "An icon depicting a shower head with a timer, encouraging shorter showers.", url: null },
    { subtitle: "ledlights", prompt: "An icon of an LED light bulb with an energy-saving symbol.", url: null },
    { subtitle: "reusablebags", prompt: "An icon of a shopping bag with the 'no plastic' symbol, emphasizing sustainability.", url: null },
    { subtitle: "coldwaterwash", prompt: "An icon of a washing machine with a cold water symbol, promoting energy-efficient laundry.", url: null },
    { subtitle: "limithvac", prompt: "An icon showing a thermostat with a downward arrow, indicating reduced energy usage.", url: null },
    { subtitle: "localproduce", prompt: "An icon of a farmer's market with local produce, highlighting support for local farming.", url: null },
    { subtitle: "digitalreceipts", prompt: "An icon showing a smartphone displaying a digital receipt, reducing paper waste.", url: null },
    { subtitle: "singleuseplastics", prompt: "An icon depicting a crossed-out plastic bottle, symbolizing the reduction of plastic waste.", url: null },
    { subtitle: "energyaudit", prompt: "An icon showing a house with a magnifying glass, representing energy efficiency assessment.", url: null },
    { subtitle: "lowerthermostat", prompt: "An icon of a thermostat with a snowflake, indicating lower temperature settings in winter.", url: null },
    { subtitle: "clothesline", prompt: "An icon of a clothesline with hanging clothes, promoting air drying for energy savings.", url: null },
    { subtitle: "biketoinstead", prompt: "An icon of a bicycle, symbolizing choosing cycling over driving for short distances.", url: null },
    { subtitle: "plantatree", prompt: "An icon depicting a person planting a tree, contributing to environmental sustainability.", url: null },
    { subtitle: "cookwithlid", prompt: "An icon showing a pot with a lid, promoting energy-efficient cooking.", url: null },
    { subtitle: "lowflowshower", prompt: "An icon of a low-flow showerhead, highlighting water conservation.", url: null },
    { subtitle: "reusablebottle", prompt: "An icon of a reusable water bottle with a 'no plastic' symbol.", url: null },
    { subtitle: "reducepapertowel", prompt: "An icon of a cloth towel next to a paper towel, promoting less paper usage.", url: null },
    { subtitle: "compost", prompt: "An icon of a compost bin with organic waste, encouraging composting efforts.", url: null },
    { subtitle: "reusablemug", prompt: "An icon of a coffee mug with a heart, symbolizing eco-friendly habits.", url: null },
    { subtitle: "shortershower", prompt: "An icon depicting a timer with a showerhead, emphasizing quick showers.", url: null },
    { subtitle: "minimalpackaging", prompt: "An icon of a package with minimal waste, promoting sustainable shopping.", url: null },
    { subtitle: "replacehvacfilter", prompt: "An icon showing an air filter being replaced, indicating maintenance for efficiency.", url: null },
    { subtitle: "rechargeablebattery", prompt: "An icon of rechargeable batteries, promoting eco-friendly energy use.", url: null },
    { subtitle: "telecommute", prompt: "An icon of a person working on a laptop at home, indicating remote work.", url: null },
    { subtitle: "energyefficientappliances", prompt: "An icon of energy-efficient appliances with a star rating.", url: null },
    { subtitle: "recycleelectronics", prompt: "An icon of electronic waste being recycled, promoting proper disposal.", url: null },
    { subtitle: "bikesharing", prompt: "An icon of a bicycle with a sharing symbol, indicating shared cycling initiatives.", url: null },
    { subtitle: "sharebooks", prompt: "An icon of a stack of books with an arrow, symbolizing sharing literature.", url: null },
    { subtitle: "donateclothes", prompt: "An icon of clothes with a donation box, promoting clothing donations.", url: null },
    { subtitle: "avoidfastfashion", prompt: "An icon of a crossed-out shopping bag, symbolizing sustainable fashion choices.", url: null },
    { subtitle: "clothnapkins", prompt: "An icon of cloth napkins on a table, promoting reusable dining products.", url: null },
    { subtitle: "growyourown", prompt: "An icon of a person tending to a garden, emphasizing self-sustainability.", url: null },
    { subtitle: "avoidpalmoil", prompt: "An icon of a palm tree with a cross, promoting palm oil avoidance.", url: null },
    { subtitle: "renewableenergy", prompt: "An icon of a solar panel with a sun, promoting clean energy sources.", url: null },
    { subtitle: "usebroom", prompt: "An icon of a broom, emphasizing manual cleaning over electric tools.", url: null },
    { subtitle: "limitscreentime", prompt: "An icon showing a clock and a smartphone, promoting less screen time.", url: null },
];


const axios = require('axios');
const fs = require('fs');
const path = require('path');

const apiKey = 'test';


// Assets klasörü yolu
const assetsPath = path.join(__dirname, '../src/assets/icons');

// İkonları indirme fonksiyonu
const downloadIconToAssets = async (icon) => {
    try {
        const response = await axios.post('https://api.openai.com/v1/images/generations', {
            prompt: icon.prompt,
            n: 1,
            size: '512x512'
        }, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });

        const imageUrl = response.data.data[0].url;

        // assetsPath klasörünü oluşturun (yoksa)
        if (!fs.existsSync(assetsPath)){
            fs.mkdirSync(assetsPath, { recursive: true });
        }
        
        const imagePath = path.join(assetsPath, `${icon.subtitle}.png`);

        // Görseli indir ve kaydet
        const imageResponse = await axios({
            url: imageUrl,
            responseType: 'stream',
        });
        
        await new Promise((resolve, reject) => {
            const writer = fs.createWriteStream(imagePath);
            imageResponse.data.pipe(writer);
            writer.on('finish', resolve);
            writer.on('error', reject);
        });

        console.log(`Icon saved to assets: ${imagePath}`);
    } catch (error) {
        console.error(`Error downloading icon for ${icon.subtitle}:`, error.message);
    }
};

// Tüm ikonları indirme işlemi
const downloadAllIcons = async () => {
    for (const icon of iconPrompts) {
        await downloadIconToAssets(icon);
    }
};

// Başlat
downloadAllIcons();
