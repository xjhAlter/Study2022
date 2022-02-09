<template>
    <div class="error-page">
        <span>404 Not Found</span>
        <a class="btn" href="/">Return</a>
    </div>
</template>

<style lang="scss" scoped>
    .error-page {
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 0.6rem;
        font-weight: bold;
        background-color: #fff;
        .btn {
            width: 3rem;
            height: 1rem;
            text-align: center;
            border-radius: 0.04rem;
            border: 0.02rem solid #409eff;
            margin-top: 1rem;
            line-height: 1rem;
            color: #409eff;
            cursor: pointer;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
        }
    }
</style>
