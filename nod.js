let model;

async function loadModel() {
  // Load a pre-trained TensorFlow.js model
  model = await tf.loadLayersModel('https://your-model-url/model.json');
  console.log("Model Loaded");
}

async function classifyImage() {
  const image = document.getElementById('selectedImage');
  if (!image.src) {
    alert("Please upload an image first!");
    return;
  }

  const tensor = tf.browser.fromPixels(image).resizeNearestNeighbor([224, 224]).expandDims(0).toFloat().div(tf.scalar(255));
  const predictions = await model.predict(tensor).data();
  
  const outputElement = document.getElementById('output');
  outputElement.innerHTML = `Predicted Class: ${predictions[0]}`;
}

document.getElementById('imageInput').addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const imgElement = document.getElementById('selectedImage');
      imgElement.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Load the model when the page loads
window.onload = loadModel;
