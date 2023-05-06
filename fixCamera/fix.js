const fs = require("fs")

console.log('Menjalankan Fix Camera');

for (let index = 0; index < 100; index++) {
    console.log('Sabar dulu ya gaes');
}

fs.copyFile("fixCamera/RNCamera.js", "node_modules/react-native-camera/src/RNCamera.js", err => {
    if (err) {
        console.log("Error Found:", err);
    }
})

console.log("Selesai fix Camera");