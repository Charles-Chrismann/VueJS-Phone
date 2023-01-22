<script>
export default {
  name:'IphoneComp',
  methods: {
    mouseDown(e) {
      this.isMouseDown = true
      this.lastMouseX = e.clientX
      this.lastMouseY = e.clientY
      // console.log(this.lastMouseX, this.lastMouseY)
    },
    mouseUp(e) {
      this.isMouseDown = false
      this.lastMouseX = e.clientX
      this.lastMouseY = e.clientY
    },
    rotate(e) {
      if(!this.isMouseDown) return
      let changeX = e.clientX - this.lastMouseX
      let changeY = e.clientY - this.lastMouseY
      this.lastMouseX = e.clientX
      this.lastMouseY = e.clientY
      this.currentRotateX += changeX
      this.currentRotateY -= changeY
      this.$refs.phone.style.transform = `rotateY(${this.currentRotateX}deg) rotateX(${this.currentRotateY}deg)`
    }
  },
  computed: {
    getClock() {
      let date = new Date()
      return `${date.getHours()}:${date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes()}`
    }
  },
  data() {
    return {
      isMouseDown: false,
      lastMouseX: 0,
      lastMouseY: 0,
      currentRotateX: 17,
      currentRotateY: 23,
    }
  }
}
</script>
<template lang="">
  <section class="container" @mousedown="mouseDown($event)" @mousemove="rotate($event)" @mouseup="mouseUp($event)">
    <div class="phone" ref="phone" style="--brPhone:2.5rem; transform: rotateY(17deg) rotateX(23deg)">
      <div class="side top"></div>
      <div class="side front">
        <div class="front__top">
          <div class="top__clock">{{ getClock }}</div>
          <div class="top__cam"></div>
          <div class="top__icons">

            <font-awesome-icon icon="fa-solid fa-signal" />
            <font-awesome-icon icon="fa-solid fa-wifi" />
            <font-awesome-icon icon="fa-solid fa-battery-full" />
          </div>
        </div>
        <div class="front__app">
          <slot></slot>
        </div>
        <!-- <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/IPhone_14_Pro_vector.svg/378px-IPhone_14_Pro_vector.svg.png" alt="" style="width:100%"> -->
      </div>
      <div class="side right"></div>
      <div class="side back">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496.255 608.728"><path d="M273.81 52.973C313.806.257 369.41 0 369.41 0s8.271 49.562-31.463 97.306c-42.426 50.98-90.649 42.638-90.649 42.638s-9.055-40.094 26.512-86.971zM252.385 174.662c20.576 0 58.764-28.284 108.471-28.284 85.562 0 119.222 60.883 119.222 60.883s-65.833 33.659-65.833 115.331c0 92.133 82.01 123.885 82.01 123.885s-57.328 161.357-134.762 161.357c-35.565 0-63.215-23.967-100.688-23.967-38.188 0-76.084 24.861-100.766 24.861C89.33 608.73 0 455.666 0 332.628c0-121.052 75.612-184.554 146.533-184.554 46.105 0 81.883 26.588 105.852 26.588z" fill="#999"/></svg>
      </div>
      <div class="side left"></div>
      <div class="side bot"></div>

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
    background: #000000;
    border-radius: var(--brPhone);

    

    .side {
      height: 100%;
      position: absolute;
      background: #000000;
      border: solid 1px #e5e5e5;
      &.front {
        background: #fff;
        border: solid 0.5rem #000000;
        transform: rotateY(90deg) translateX(-5.49%) rotateY(-90deg);
        width: 100%;
        border-radius: var(--brPhone);

        .front__top {
          height: 4%;
          width: 100%;
          display: flex;
          font-size: 0.75rem;
          
          .top__clock {
            width: 30%;
            text-align: center;
            display: grid;
            place-items: center;
            font-weight: 600;
          }

          .top__cam {
            width: 40%;
            height: 80%;
            background: #000000;
            border-bottom-right-radius: 1rem;
            border-bottom-left-radius: 1rem;
            position: relative;

            &::before {
              content: '';
              position: absolute;
              height: 25%;
              aspect-ratio: 1 / 1;
              top: 0;
              left: 0;
              box-shadow: 2px -2px 0px 2px #000000;
              transform: translateX(-100%);
              border-top-right-radius: 20px;
            }

            &::after {
              content: '';
              position: absolute;
              height: 25%;
              aspect-ratio: 1 / 1;
              top: 0;
              right: 0;
              box-shadow: -2px -2px 0px 2px #000000;
              transform: translateX(100%);
              border-top-left-radius: 20px;
            }
          }

          .top__icons {
            width: 30%;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.375rem;
          }
        }

        .front__app {
          height: 96%;

          & > :first-child {
            height: 90%;
          }
          & > :last-child {
            height: 10%;
          }
        }
      }

      &.back {
        width: 100%;
        transform: rotateY(90deg) translateX(5.49%) rotateY(-270deg);
        border-radius: var(--brPhone);

        & svg {
          position: absolute;
          width: 20%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: pulse 5s linear infinite;
        }
      }
  
      &.right {
        height: calc(100% - var(--brPhone) * 1.5);
        width: 10.98%;
        position: absolute;
        right: 0;
        transform: translate(50%) rotateY(90deg);
      }

      &.left {
        height: calc(100% - var(--brPhone) * 1.5);
        width: 10.98%;
        position: absolute;
        left: 0;
        transform: translate(-50%) rotateY(90deg);
      }

      &.top {
        top: 0;
        width: calc(100% - var(--brPhone) * 1.5);
        height: 5.32%;
        transform: translateY(-50%) rotateX(90deg);
        // transform: rotateX(90deg);
      }

      &.bot {
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

@keyframes pulse {
  from {
    filter: brightness(0.75);
  }
  50% {
    filter: brightness(1.25);
  }
  to {
    filter: brightness(0.75);
  }
}
</style>