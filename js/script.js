import * as THREE from "three";
import { Timer } from "three/addons/misc/Timer.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

// utility to place the screenshot on the texture
const positionCanvasOnTexture = (sourceCanvas, left, top, width, height) => {
  let destCanvas = document.createElement("canvas");
  const size = Math.max(width, height);
  destCanvas.width = size;
  destCanvas.height = size;

  const dx = width > height ? 0 : (height - width) / 2;
  const dy = width > height ? (width - height) / 2 : 0;

  const ctx = destCanvas.getContext("2d");
  ctx.fillStyle = "white"; // NOTE: THIS DEPENDS ON THE WEBSITE BACKGROUND
  ctx.fillRect(0, 0, size, size);
  ctx.drawImage(
    sourceCanvas,
    left,
    top,
    width,
    height, // source rect with content to crop
    dx,
    dy,
    width,
    height
  );
  return destCanvas;
};

async function crumple() {
  document.querySelector("#canvasContainer").style = "display: block";

  const timer = new Timer();
  const loader = new GLTFLoader();

  const scene = new THREE.Scene();
  const aspect = window.innerWidth / window.innerHeight;
  const frustumSize = 1.33; // no idea why this isn't just 1 lol; original value 1.095
  const camera = new THREE.OrthographicCamera(
    (frustumSize * aspect) / -2,
    (frustumSize * aspect) / 2,
    frustumSize / 2,
    frustumSize / -2,
    0.1,
    100
  );

  // light
  const light = new THREE.DirectionalLight(0xffffff, 3.125);
  scene.add(light);

  // create canvas element from screen
  const html2CanvasResult = await html2canvas(document.querySelector("#about"));
  const croppedCanvas = positionCanvasOnTexture(
    html2CanvasResult,
    0, // window.scrollX * window.devicePixelRatio
    0, // window.scrollY * window.devicePixelRatio
    window.innerWidth * window.devicePixelRatio,
    window.innerHeight * window.devicePixelRatio
  );

  // TODO: now that screenshot has been taken, you can toggle divs

  // set up material using the html2canvas object
  const material = new THREE.MeshStandardMaterial();
  const oldPageTexture = new THREE.CanvasTexture(croppedCanvas);
  oldPageTexture.flipY = false;
  oldPageTexture.colorSpace = THREE.SRGBColorSpace;
  material.map = oldPageTexture;

  // load GLB of paper
  const gltf = await loader.loadAsync("crumple.glb");
  const paper = gltf.scene;
  paper.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, -1, 0));
  paper.quaternion.setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI);
  paper.children[0].material = material;
  scene.add(paper);
  // prepare to play animations
  const mixer = new THREE.AnimationMixer(paper);
  const clips = gltf.animations;
  const actions = clips.map((clip) => {
    const action = mixer.clipAction(clip);
    action.loop = THREE.LoopOnce;
    action.clampWhenFinished = true;
    return action;
  });
  setTimeout(() => actions.forEach((action) => action.play()), 2500); // original value 250

  // position camera
  camera.position.y = 4.5;
  camera.quaternion.setFromEuler(new THREE.Euler(-Math.PI / 2, 0, 0));

  // renderer
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  // add renderer to page
  document.querySelector("#canvasContainer").appendChild(renderer.domElement);

  // animation loop
  function animate(timestamp) {
    timer.update(timestamp);
    const delta = timer.getDelta();

    mixer.update(delta);
    renderer.render(scene, camera);
  }
  renderer.setAnimationLoop(animate);

  setTimeout(() => {
    document.querySelector("#canvasContainer").style = "display: none";
  }, 200000);
}

/*
html2canvas(document.querySelector("#about")).then(canvas => {
  document.querySelector("#canvasContainer").replaceWith(canvas);
  canvas.id = "canvasContainer";
  canvas.style.display = "none";
});
*/

$('#favbooks-show').click(function(){ showFavBooks(); });

function showFavBooks() {
   document.getElementById('favbooks').style.display = "block";
   document.getElementById('favbooks-hr-hidden').style.display = "block";
}

$('#favbooks-hide').click(function(){ hideFavBooks(); });

function hideFavBooks() {
   document.getElementById('favbooks').style.display = "none";
   document.getElementById('favbooks-hr-hidden').style.display = "none";
}

$('#about-show').click(function(){ showAbout(); });

function showAbout() {
   document.getElementById('about-hr').style.display = "block";
   document.getElementById('about').style.display = "block";

   document.getElementById('portfolio-en').style.display = "none";
   document.getElementById('portfolio-en-hr-hidden').style.display = "none";

   document.getElementById('misc-hr').style.display = "none";
   document.getElementById('misc').style.display = "none";

   var aboutHiLite = document.getElementById("about-show");
   aboutHiLite.style.color = "#2f4858";

   var aboutHiLite = document.getElementById("about-show");
   aboutHiLite.style.color = "#9fb3bf";

   var aboutHiLite = document.getElementById("misc-show");
   aboutHiLite.style.color = "#9fb3bf";
}

document.querySelector("#work-show").addEventListener("click", crumple);

/*
$('#about-show').click(function(){ showPortfolioEn(); });

function showPortfolioEn() {

  crumple();

  document.getElementById('misc-hr').style.display = "none";
  document.getElementById('misc').style.display = "none";

  var aboutHiLite = document.getElementById("about-show");
  aboutHiLite.style.color = "#9fb3bf";

  var aboutHiLite = document.getElementById("about-show");
  aboutHiLite.style.color = "#2f4858";

  var aboutHiLite = document.getElementById("misc-show");
  aboutHiLite.style.color = "#9fb3bf";
}
*/
$('#misc-show').click(function(){ showMisc(); });

function showMisc() {
   document.getElementById('misc-hr').style.display = "block";
   document.getElementById('misc').style.display = "block";

   document.getElementById('about-hr').style.display = "none";
   document.getElementById('about').style.display = "none";

   document.getElementById('portfolio-en').style.display = "none";
   document.getElementById('portfolio-en-hr-hidden').style.display = "none";

   var aboutHiLite = document.getElementById("about-show");
   aboutHiLite.style.color = "#9fb3bf";

   var aboutHiLite = document.getElementById("about-show");
   aboutHiLite.style.color = "#9fb3bf";

   var aboutHiLite = document.getElementById("misc-show");
   aboutHiLite.style.color = "#2f4858";
}

$('#portfolio-en-hide').click(function(){ hidePortfolioEn(); });

function hidePortfolioEn() {
   document.getElementById('portfolio-en').style.display = "none";
   document.getElementById('portfolio-en-hr-hidden').style.display = "none";
}

$('#language-toggle').click(function(){ changeLanguage(); });

function changeLanguage() {
  if( $('#english-ver').css('display') == 'block' ) {
    $(document).ready(function() {
        $('#language-toggle').text(function(i, oldText) {
            return oldText === '中文' ? 'EN' : oldText;
            /*
            if (oldText === 'Details.') {
              return 'TL;DR';
            }
            else {
              return oldText;
            }
            */
        });
    });
    document.getElementById('english-ver').style.display = "none";
    document.getElementById('chinese-ver').style.display = "block";

  } else if( $('#english-ver').css('display') == 'none' ) {
    $(document).ready(function() {
        $('#language-toggle').text(function(i, oldText) {
            return oldText === 'EN' ? '中文' : oldText;
        });
    });
    document.getElementById('chinese-ver').style.display = "none";
    document.getElementById('english-ver').style.display = "block";
  }
}

function flashHover() {
  setTimeout(() => { document.getElementById('nameHover').style.background = "#cccccc"; }, 300);
  setTimeout(() => { document.getElementById('nameHover').style.removeProperty('background'); }, 600);
  setTimeout(() => { document.getElementById('nameHover').style.background = "#cccccc"; }, 900);
  setTimeout(() => { document.getElementById('nameHover').style.removeProperty('background'); }, 1200);
  setTimeout(() => { document.getElementById('nameHover').style.background = "#cccccc"; }, 1500);
  setTimeout(() => { document.getElementById('nameHover').style.removeProperty('background'); }, 1800);
}

$('#details-show').click(function(){ showDetails(); });

function showDetails() {
  if( $('#shown-content').css('display') == 'block' ) {
    $(document).ready(function() {
        $('#details-show').text(function(i, oldText) {
            return oldText === 'Details.' ? 'TL;DR' : oldText;
            /*
            if (oldText === 'Details.') {
              return 'TL;DR';
            }
            else {
              return oldText;
            }
            */
        });
    });
    document.getElementById('shown-content').style.display = "none";
    document.getElementById('details').style.display = "block";
    document.getElementById('details-hr-hidden').style.display = "block";
  } else if( $('#shown-content').css('display') == 'none' ) {
    $(document).ready(function() {
        $('#details-show').text(function(i, oldText) {
            return oldText === 'TL;DR' ? 'Details.' : oldText;
        });
    });
    document.getElementById('shown-content').style.display = "block";
    document.getElementById('details').style.display = "none";
    document.getElementById('details-hr-hidden').style.display = "none";
  }
}
