<script>
  export let data;

  let translateX = -50; // Initial translateX value
  let carElement;

  // Function to handle the keydown event
  function handleKeydown(event) {
    // Check if the pressed key is the right arrow or 'd' key
    if (event.key === 'ArrowRight' || event.key === 'd') {
      translateX = Math.min(translateX + 10, 100); // Increase by 10%, max 100%
    }

    // Check if the pressed key is the left arrow or 'a' key
    if (event.key === 'ArrowLeft' || event.key === 'a') {
      translateX = Math.max(translateX - 10, -200); // Decrease by 10%, min -200%
    }

    // Check if the spacebar is pressed
    if (event.code === 'Space') {
      carElement.classList.add('jump'); // Add the 'jump' class
      setTimeout(() => {
        carElement.classList.remove('jump'); // Remove the 'jump' class after 500ms
      }, 500); // Adjust the duration as needed
    }
  };
  
  $: if (carElement) {
    carElement.style.setProperty('--translateX', `${translateX}%`);
  }

  function showProfileInfo(event) {
    const profileInfo = document.querySelector('.profile-info');
    profileInfo.classList.toggle('show');
  };
</script>

<svelte:window on:keydown={handleKeydown}/>

<main>
  <div class="sky">

    <div class="cloud">
      <div class="cloud-inner">
        <div class="small"></div>
        <div class="large"></div>
      </div>
    </div>

    <div class="cloud">
      <div class="cloud-inner">
        <div class="small"></div>
        <div class="large"></div>
      </div>
    </div>

    <article class="car" bind:this={carElement}> 
      <div class="car-inner">
        <div class="car-window"></div>
        <div class="car-steer"></div>
        <div class="car-seat"></div>
        <div class="car-base"></div>
        <div class="head-light"></div>
        <div class="rear-light"></div>
        <div class="car-exhaust"></div>
        <button on:click={showProfileInfo} aria-label="show-profile-info" class="profile-picture-container">
          <img class="profile-picture" src="/profiel-foto.svg" alt="profiel foto" width="50" height="50"/>
        </button>
        <div class="profile-info">
          <img class="mugshot" src="/mugshot.jpg" alt="mugshot" width="100" height="100"/>
          <h1 class="name">{data.persons.name} {data.persons.surname}</h1>
          <p class="nickname">{data.persons.nickname}</p>
          <a class="github" href={data.persons.website} target="_blank">Github</a>
        </div>
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

    <div class="tree">
      <div class="tree-inner">
        <div class="tree-top"></div>
        <div class="tree-bottom"></div>
      </div>
    </div>

    <div class="tree small">
      <div class="tree-inner">
        <div class="tree-top"></div>
        <div class="tree-bottom"></div>
      </div>
    </div>
    <div class="mountain-container">
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
    </div>

  </div>
  <div class="ground">
    <div class="keys-container">
      <p class="left-arrow">←</p>
      <p class="right-arrow">→</p>
      <p class="spacebar">Space</p>
    </div>
  </div>
</main>

<style>
  div.keys-container {
    position: absolute;
    bottom: 30px;
    right: 50px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    font-family: 'Comic Neue', sans-serif;
  }

  p.left-arrow, p.right-arrow {
    font-size: 25px;
    background-color: #f8f8f8;
    padding: 10px;
    margin: 0;
  }

  p.spacebar {
    font-size: 25px;
    background-color: #f8f8f8;
    padding: 10px 80px;
    margin: 0;
  }

  main {
    max-height: 100vh;
    max-width: 100vw;
    overflow-x: hidden;
  }

  div.cloud {
    background: #fff;
    border-radius: 60px;
    height: 100px;
    position: absolute;
    width: 300px;
    top: 15%;
    left: 10%;
  }

  div.cloud:nth-of-type(2) {
    right: 10%;
    left: unset;
  }

  div.cloud div.cloud-inner {
    position: relative;
  }

  div.cloud div.small {
    background: #fff;
    border-radius: 100%;
    height: 90px;
    position: absolute;
    width: 90px;
    top: -45px;
    left: 50px;
  }

  div.cloud div.large {
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
    --translateX: -50%;
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

  button.profile-picture-container {
    position: absolute;
    top: -50px;
    right: 130px;
    z-index: -1;
    cursor: pointer;
    transition: 0.3s;
    background-color: transparent;
    border: none;
  }

  img.profile-picture {
    transform: scaleX(-1);
    position: relative;
    transition: 0.3s;
  }

  button.profile-picture-container::after {
    width: 55px;
    height: 55px;
    content: "";
    border-radius: 100%;
    box-shadow: 0px 5px 5px yellow;
    animation: rotateWheel 1.7s infinite linear;
    position: absolute;
    left: 5px;
    top: -8px;
    z-index: -1;
  }

  img.profile-picture:hover {
    transform: scaleX(-1) scale(1.2);
  }

  .profile-info {
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    background: #ffd;
    font-family: "Comic Neue", sans-serif;
    position: absolute;
    background-color: #ffd;
    border-radius: 100%;
    border: solid 5px #000;
    bottom: 220px;
    cursor: initial;
    opacity: 0;
    transition: 0.3s;
    left: 90px;
  }

  :global(div.profile-info.show) {
    opacity: 1 !important;
  }


  .profile-info::before {
    width: 40%;
    height: 100%;
    bottom: -51%;
    border-radius: 50%;
    left: 10%;
    box-shadow: 1px 0, 8px -1px #ffd, 8px -1px 0 1px;
    clip-path: polygon(0% 49%, 150% 48%, 150% 100%, 0% 100%);
    content: "";
    display: block;
    position: absolute;
  }

  div.profile-info p, div.profile-info a {
    font-size: 16px;
    text-decoration: none;
    padding: 0;
    margin: 0;
  }

  div.profile-info h1 {
    font-size: 20px;
    margin: 0;
    padding: 0;
  }

  div.profile-info img {
    border-radius: 100%;
    object-fit: cover;
    height: 120px;
    width: 120px;
    margin-bottom: 10px;
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

  div.car-exhaust {
    width: 20px;
    height: 10px;
    position: absolute;
    left: -20px;
    bottom: 10px;
    background-color: gray;
  box-shadow: -1px 0px 3px #000;
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
    border: 1px solid black;
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

  div.tree {
    position: absolute;
    bottom: 0;
    right: -20%;
    animation: moveTrees 5s infinite linear;
    z-index: 2;
  }

  div.tree.small {
    margin-right: 70px;
  }

  div.tree div.tree-inner{
    position: relative;
  }

  div.tree div.tree-top{
    background: #228B22;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    bottom: 100px;
    left: -25px;
  }

  div.tree div.tree-bottom{
    background: #8B4513;
    width: 20px;
    height: 100px;
    position: absolute;
    bottom: 0;
    left: 15px;
  }

  div.tree.small div.tree-top{
    background: #228B22;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    position: absolute;
    bottom: 70px;
    left: -25px;
  }

  div.tree.small div.tree-bottom{
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

  div.mountain-container {
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

@media screen and (max-width: 768px) {
  div.keys-container {
    display: none;
  }
}
</style>