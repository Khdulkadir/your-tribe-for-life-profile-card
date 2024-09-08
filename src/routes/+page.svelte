<script>
  export let data;
  import { onMount } from 'svelte';

  onMount(() => {
    const script = document.createElement('script');
    script.src = '/car.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up if the component is destroyed
    };
  });
</script>

<main>
  <div class="sky">

    <article class="cloud">
      <div class="cloud-inner">
        <div class="small"></div>
        <div class="large"></div>
      </div>
    </article>

    <article class="cloud">
      <div class="cloud-inner">
        <div class="small"></div>
        <div class="large"></div>
      </div>
    </article>

    <article class="car"> 
      <div class="car-inner">
        <div class="car-window"></div>
        <div class="car-steer"></div>
        <div class="car-seat"></div>
        <div class="car-base"></div>
        <div class="head-light"></div>
        <div class="rear-light"></div>
      </div>
      <div class="wheel-left wheel">
        <div class="wheel-spike"></div> 
        <div class="wheel-center"></div>
      </div>
      <div class="wheel-right wheel">
        <div class="wheel-spike"></div> 
        <div class="wheel-center"></div>
      </div>
    </article>

    <article class="tree">
      <div class="tree-inner">
        <div class="tree-top"></div>
        <div class="tree-bottom"></div>
      </div>
    </article>

    <article class="tree small">
      <div class="tree-inner">
        <div class="tree-top"></div>
        <div class="tree-bottom"></div>
      </div>
    </article>
  <article class="mountain-container">
    <div class="mountain">
      <div class="mountain-top">
        <div class="mountain-cap-1"></div>
        <div class="mountain-cap-2"></div>
        <div class="mountain-cap-3"></div>
      </div>
    </div>
    <div class="mountain-two">
      <div class="mountain-top">
        <div class="mountain-cap-1"></div>
        <div class="mountain-cap-2"></div>
        <div class="mountain-cap-3"></div>
      </div>
    </div>
    <div class="mountain-three">
      <div class="mountain-top">
        <div class="mountain-cap-1"></div>
        <div class="mountain-cap-2"></div>
        <div class="mountain-cap-3"></div>
      </div>
    </div>
  </article>

  </div>
  <div class="ground">
  </div>
</main>

<style>
  main {
    max-height: 100vh;
    max-width: 100vw;
    overflow-x: hidden;
  }

  article.cloud {
    background: #fff;
    border-radius: 60px;
    height: 100px;
    position: absolute;
    width: 300px;
    top: 15%;
    left: 10%;
  }

  article.cloud:nth-of-type(2) {
    right: 10%;
    left: unset;
  }

  article.cloud div.cloud-inner {
    position: relative;
  }

  article.cloud div.small {
    background: #fff;
    border-radius: 100%;
    height: 90px;
    position: absolute;
    width: 90px;
    top: -45px;
    left: 50px;
  }

  article.cloud div.large {
    background: #fff;
    border-radius: 100%;
    height: 120px;
    position: absolute;
    width: 120px;
    top: -60px;
    right: 50px;
  }

  div.sky {
    background: linear-gradient(180deg, #87CEEB, #4682B4);
    height: 70vh;
    position: relative;
    width: 100%;
  }

  div.ground {
    background: linear-gradient(180deg, #228B22, #006400);
    height: 30vh;
    position: relative;
    width: 100%;
  }

  article.car{
    width: 300px;
    position: absolute;
    bottom: 30px;
    left: 50%;
    --translateX: -50%; /* Default value for translateX */
    transform: translateX(var(--translateX)) translateY(0);
    z-index: 3;
    transition: 0.3s;
  }

  :global(article.car.jump) {
    animation: jumpAnimation 0.5s ease;
  }

@keyframes jumpAnimation {
  0% {
    transform: translateX(var(--translateX)) translateY(0);
  }
  50% {
    transform: translateX(var(--translateX)) translateY(-100px); /* Jump up */
  }
  100% {
    transform: translateX(var(--translateX)) translateY(0); /* Return to ground */
  }
}

  div.car-window{
    background: darkred;
    width: 10px;
    height: 50px;
    border-radius: 10px;
    transform: rotate(330deg);
    position: absolute;
    top: -45px;
    right: 90px;
  }

  div.car-steer {
    background: black;
    width: 5px;
    height: 15px;
    border-radius: 10px;
    position: absolute;
    top: -12px;
    right: 105px;
    transform: rotate(30deg);
  }

  div.car-seat {
    background: black;
    width: 10px;
    height: 30px;
    border-radius: 10px;
    position: absolute;
    top: -28px;
    right: 180px;
    transform: rotate(330deg);
  }

  .car-base{
    background: darkred;
    width: 100%;
    height: 50px;
    border-radius: 5px 25px 10px 10px;
    border-bottom: 5px solid #000;
  }

  @keyframes suspensionCar {
    0% {transform: translateY(0);}
    50% {transform: translateY(8px);}
    100% {transform: translateY(0);}
  }

  div.car-inner {
    animation: suspensionCar 1s infinite linear;
  }

  .head-light{
    position: absolute;
    background: #e2dfcb;
    right: 1px;
    top: 6px;
    border-radius: 50% 15px 15px 50%;
    width: 10px;
    height: 20px;
  }

  .rear-light{
    position: absolute;
    background: red;
    left: 1px;
    top: 6px;
    border-radius: 50% 15px 15px 50%;
    width: 10px;
    height: 20px;
  }

  @keyframes rotateWheel {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }

  .wheel {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: black;
    position: absolute;
    border: 4px solid black;
    animation: rotateWheel 0.7s infinite linear;
  }

  .wheel::before{
    content:'';
    width: 40px;
    height: 40px;
    top: 5px;
    left: 5px;
    border-radius: 50%;
    background: white;
    position: absolute;
  }

  .wheel:after{
    content: '';
    position: absolute;
    top: 4px;
    bottom: 4px;
    width: 3px;
    left: 50%;
    transform: translateX(-50%);
    background: #4a4a4a;
  }

  .wheel-left{
    left: 20px;
    bottom: -40px;
  }

  .wheel-right{
    right: 20px;
    bottom: -40px;
  }

  .wheel-spike{
    position: absolute;
    top: 50%;
    bottom: 4px;
    width: calc(100% - 8px);
    left: 4px;
    height: 3px;
    transform: translateY(-50%);
    background: #4a4a4a;
  }

  .wheel-center{
    position: absolute;
    top: 50%;
    left:50%;
    width: 5px;
    height: 5px;
      border-radius: 50%;
    background:white;
    z-index: 2;
      transform: translate(-50%, -50%);
  }

  article.tree {
    position: absolute;
    bottom: 0;
    right: -20%;
    animation: moveTrees 5s infinite linear;
    z-index: 2;
  }

  article.tree.small {
    margin-right: 70px;
  }

  article.tree div.tree-inner{
    position: relative;
  }

  article.tree div.tree-top{
    background: #228B22;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    bottom: 100px;
    left: -25px;
  }

  article.tree div.tree-bottom{
    background: #8B4513;
    width: 20px;
    height: 100px;
    position: absolute;
    bottom: 0;
    left: 15px;
  }

  article.tree.small div.tree-top{
    background: #228B22;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    position: absolute;
    bottom: 70px;
    left: -25px;
  }

  article.tree.small div.tree-bottom{
    background: #8B4513;
    width: 16px;
    height: 70px;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  @keyframes moveTrees {
    from {right: -20%;}
    to {right: 200%;}
  } 

  article.mountain-container {
    position: absolute;
    bottom: 0;
    right: -20%;
    animation: moveTrees 10s infinite linear;
  }

.mountain, .mountain-two, .mountain-three {
    position: absolute;
    bottom: 0;
    border-left: 250px solid transparent;
    border-right: 250px solid transparent;
    border-bottom: 280px solid #7ac1e4;
    z-index: 1;
}
.mountain-two { 
    left: 80px;
    bottom: -20px;
    opacity: .3;
    z-index: 0;
}
.mountain-three {
    left: -60px;
    bottom:-10px;
    opacity: .5;
    z-index: 0;
}
.mountain-top {
    position: absolute;
    right: -65px;
    border-left: 65px solid transparent;
    border-right: 65px solid transparent;
    border-bottom: 77px solid #ceeaf6;
    z-index: 2;
}
.mountain-cap-1, .mountain-cap-2, .mountain-cap-3 {
    position: absolute;
    top: 70px;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-top: 25px solid #ceeaf6;
}
.mountain-cap-1 { left: -55px; }
.mountain-cap-2 { left: -25px; }
.mountain-cap-3 { left: 5px; }
</style>