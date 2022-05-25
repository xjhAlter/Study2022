<template>
    <div class="home-page">
        <div class="hello">
            <svg viewBox="0 0 400 200">
                <text x="0" y="50%">Hello World!</text>
            </svg>
        </div>
    </div>
</template>

<script lang="ts" setup>
    console.log('test')
</script>

<style lang="scss" scoped>
    .home-page {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.5rem;
        font-weight: bold;
    }

    .hello {
        width: 9rem;
        svg {
            width: 9rem;
            height: 3rem;
            margin: auto;
        }

        svg text {
            // text-transform: uppercase;
            animation: stroke 5s infinite alternate;
            letter-spacing: 0.1rem;
            font-size: 0.5rem;
            font-weight: bold;
        }
        @keyframes stroke {
            0% {
                fill: rgba(72, 138, 20, 0);
                stroke: #333;
                stroke-dashoffset: 25%;
                stroke-dasharray: 0 50%;
                stroke-width: 0.2;
            }
            50% {
                fill: rgba(72, 138, 20, 0);
                stroke: #333;
                stroke-width: 0.5;
            }
            70% {
                fill: rgba(72, 138, 20, 0);
                stroke: #333;
                stroke-width: 1;
            }
            90%,
            100% {
                stroke: #333;
                stroke: rgba(54, 95, 160, 0);
                stroke-dashoffset: -25%;
                stroke-dasharray: 50% 0;
                stroke-width: 0;
            }
        }
    }
</style>
