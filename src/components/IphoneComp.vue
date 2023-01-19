<script>
export default {
  name:'IphoneComp',
  methods: {
    mouseDown(e) {
      this.isMouseDown = true
      this.lastMouseX = e.clientX
      this.lastMouseY = e.clientY
      console.log(this.lastMouseX, this.lastMouseY)
    },
    mouseUp() {
      this.isMouseDown = false
    },
    rotate(e) {
      if(!this.isMouseDown) return
      // console.log(e.clientX, e.clientY)
      let changeX = e.clientX - this.lastMouseX
      this.lastMouseX += changeX
      let changeY = e.clientY - this.lastMouseY
      this.lastMouseY += changeY
      console.log("changes", changeX, changeY)
      // console.log(this.lastMouseY)
      // console.log(`rotateY(${this.lastMouseX}deg) rotateX(${this.lastMouseY}deg)`)
      this.currentRotateX += changeX
      this.currentRotateY += changeY
      this.$refs.phone.style.transform = `rotateY(${this.lastMouseX}deg) rotateX(${this.lastMouseY}deg)`
      // console.log(this.lastMouseX, this.lastMouseY)
      // console.log('rotate de fou', e)
    }
  },
  data() {
    return {
      isMouseDown: false,
      lastMouseX: 0,
      lastMouseY: 0,
      currentRotateX: 0,
      currentRotateY: 0,
    }
  }
}
</script>
<template lang="">
  <section class="container" @mousedown="mouseDown($event)" @mousemove="rotate($event)" @mouseup="mouseUp($event)">
    <div class="phone" ref="phone" style="--brPhone:2.5rem;">
      <div class="side top">7777</div>
      <div class="side front">
        <slot></slot>
        <!-- <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/IPhone_14_Pro_vector.svg/378px-IPhone_14_Pro_vector.svg.png" alt="" style="width:100%"> -->
      </div>
      <div class="side right">dd</div>
      <div class="side back">sdeqsdqsdqs</div>
      <div class="side left">dd</div>
      <div class="side bot">dd</div>

      <div class="corner tr">
        <div style="--i:1;"></div>
        <div style="--i:2;"></div>
        <div style="--i:3;"></div>
        <div style="--i:4;"></div>
        <div style="--i:5;"></div>
      </div>

      <div class="corner bl">
        <div style="--i:1;"></div>
        <div style="--i:2;"></div>
        <div style="--i:3;"></div>
        <div style="--i:4;"></div>
        <div style="--i:5;"></div>
      </div>

      <div class="corner br">
        <div style="--i:1;"></div>
        <div style="--i:2;"></div>
        <div style="--i:3;"></div>
        <div style="--i:4;"></div>
        <div style="--i:5;"></div>
      </div>

      <div class="corner tl">
        <div style="--i:1;"></div>
        <div style="--i:2;"></div>
        <div style="--i:3;"></div>
        <div style="--i:4;"></div>
        <div style="--i:5;"></div>
      </div>

      

    </div>
  </section>
</template>
<style lang="scss" scoped>
.container {
  width: 100%;
  min-height: 100vh;
  display: grid;
  place-items: center;

  .phone {
    transform-style: preserve-3d;
    height: 70vh;
    aspect-ratio: 90 / 183;
    // border: solid 1px;
    position: relative;
    // animation: rotate 10s linear infinite paused;
    // transform: rotateY(45deg) rotateX(45deg);
    // transform: rotateY(-10deg) rotateX(-10deg);
    display: grid;
    place-items: center;

    

    .side {
      height: 100%;
      position: absolute;
      &.front {
        background: red;
        transform: rotateY(90deg) translateX(-5.49%) rotateY(-90deg);
        width: 100%;
        border-radius: var(--brPhone);
      }

      &.back {
        width: 100%;
        background: red;
        transform: rotateY(90deg) translateX(5.49%) rotateY(-270deg);
        border-radius: var(--brPhone);
      }
  
      &.right {
        height: calc(100% - var(--brPhone) * 1.5);
        width: 10.98%;
        position: absolute;
        right: 0;
        transform: translate(50%) rotateY(90deg);
        background: blue;
      }

      &.left {
        height: calc(100% - var(--brPhone) * 1.5);
        width: 10.98%;
        position: absolute;
        left: 0;
        transform: translate(-50%) rotateY(90deg);
        background: blue;
      }

      &.top {
        background: yellow;
        top: 0;
        width: calc(100% - var(--brPhone) * 1.5);
        height: 5.32%;
        transform: translateY(-50%) rotateX(90deg);
        // transform: rotateX(90deg);
      }

      &.bot {
        background: yellow;
        bottom: 0;
        width: calc(100% - var(--brPhone) * 1.5);
        height: 5.32%;
        transform: translateY(50%) rotateX(90deg);
        // transform: rotateX(90deg);
      }
    }

    & > .corner {
      position: absolute;
      aspect-ratio: 1 / 1;
      height: var(--brPhone);
      width: 100%;
      transform-style: preserve-3d;


      
      & > div {
        height: 50%;
        width: 10.98%;
        position: absolute;
        background: black;
        // top: calc(0.15 * var(--brPhone));
        // left: calc(0.15 * var(--brPhone));
        
      }

      &.tr {
        top: 0;
        right: 0;
        & > div {
          top: calc(0.7 * var(--brPhone));
          right: calc(0.5 * var(--brPhone));
          transform: rotateZ(180deg) rotateX(-90deg) rotateZ(-90deg) rotateX(calc(90deg/7 * var(--i))) translateZ(calc(0.9 * var(--brPhone)));
        }
      }

      &.bl {
        bottom: 0;
        left: 0;

        & > div {
          bottom: calc(0.7 * var(--brPhone));
          left: calc(0.5 * var(--brPhone));
          transform: rotateZ(0deg) rotateX(-90deg) rotateZ(-90deg) rotateX(calc(90deg/7 * var(--i))) translateZ(calc(0.9 * var(--brPhone)));
        }
      }
      
      &.br {
        bottom: 0;
        right: 0;

        & > div {
          bottom: calc(0.7 * var(--brPhone));
          right: calc(0.5 * var(--brPhone));
          transform: rotateZ(-90deg) rotateX(-90deg) rotateZ(-90deg) rotateX(calc(90deg/7 * var(--i))) translateZ(calc(0.9 * var(--brPhone)));
        }
      }

      &.tl {
        top: 0;
        left: 0;
        & > div {
          top: calc(0.7 * var(--brPhone));
          left: calc(0.5 * var(--brPhone));
          transform: rotateZ(90deg) rotateX(-90deg) rotateZ(-90deg) rotateX(calc(90deg/7 * var(--i))) translateZ(calc(0.9 * var(--brPhone)));
        }
      }
    }
  }
}

@keyframes rotate {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}
</style>