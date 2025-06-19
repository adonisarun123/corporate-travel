<template>
  <section class="bg-gradient-to-br from-[#FF7043] to-[#FF8A65] py-20 relative overflow-hidden">
    <!-- Bubbles Animation -->
    <div class="bubbles">
      <div v-for="n in 20" :key="n" class="bubble" 
           :style="{ 
             '--size': `${Math.random() * 4 + 2}rem`,
             '--distance': `${Math.random() * 6 + 4}rem`,
             '--position': `${Math.random() * 100}%`,
             '--time': `${Math.random() * 2 + 2}s`,
             '--delay': `${Math.random() * -2}s`,
           }">
      </div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-black mb-8 glow-text">
          Ready to Lead the Future of Corporate Travel?
        </h2>
        <p class="text-xl text-black mb-12">
          Join us in revolutionizing the corporate travel industry with cutting-edge technology and unmatched service.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-white text-[#FF7043] px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all transform hover:scale-105">
            Schedule a Demo
          </button>
          <button class="bg-[#E64A19] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#D84315] transition-all transform hover:scale-105">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No script needed
</script>

<style scoped>
.glow-text {
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.4),
               0 0 40px rgba(0, 0, 0, 0.3),
               0 0 60px rgba(0, 0, 0, 0.2);
}

.bubbles {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}

.bubble {
  position: absolute;
  left: var(--position);
  bottom: -10rem;
  display: block;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  animation: float var(--time) var(--delay) ease-in infinite;
}

.bubble::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  backdrop-filter: blur(5px);
}

@keyframes float {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  50% {
    transform: translateY(-100vh) translateX(var(--distance));
    opacity: 0.8;
  }
  100% {
    transform: translateY(-200vh) translateX(calc(var(--distance) * 2));
    opacity: 0;
  }
}

/* Add hover effect to buttons */
button {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

button:hover {
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}
</style>