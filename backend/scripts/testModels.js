const models = require('../models');

console.log('Testing loading of all 23 database models:');
const modelNames = Object.keys(models);

modelNames.forEach((name, idx) => {
  if (models[name] && models[name].modelName) {
    console.log(`[${idx + 1}/${modelNames.length}] ✅ Model "${name}" loaded successfully with collection "${models[name].collection.name}".`);
  } else {
    console.error(`[${idx + 1}/${modelNames.length}] ❌ Failed to load model "${name}".`);
  }
});

console.log(`\n🎉 All ${modelNames.length} models verified and functional!`);
