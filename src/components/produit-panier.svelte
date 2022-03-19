<script>
</script>

<div class="w-bag-items c-br">
    <div class="w-img">
        <div class="c-img c-br">
            <img src="" alt="" />
        </div>
    </div>
    <div class="w-bag-item-content">
        <div class="w-bag-item-description">
            <strong class="bag-item-price"><span>1000 FCFA</span></strong>
            <h3 class="bag-item-name"><span>Title</span></h3>
        </div>
    </div>

    <div class="w-bag-item-cross c-br" />
</div>

<style lang="scss">
    // c : component
    // w : wrapper
    // cta : call to action (btn/input)
    // -br : border-radius; -sp : space-between
    .c-br {
        background: #eff3f1;
        border-radius: 10px;
    }
    .w-img {
        width: 25%;
    }
    .c-img {
        position: relative;
        padding-bottom: 100%;
        background: #fff;
        img {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            object-fit: cover;
        }
    }
    .w-bag-items {
        display: flex;
        padding: 20px 30px;
        gap: 20px;
        span {
            color: #000;
        }
    }
    .w-bag-item-content {
        width: 70%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .w-bag-item-description {
        display: flex;
        flex-direction: column;
        gap: 12.5px;
        strong {
            span {
                font-weight: 700;
                letter-spacing: 1.7px;
                font-size: 16px;
            }
        }
        h3 {
            span {
                font-size: 15.75px;
            }
        }
    }

    .w-bag-item-cross {
        width: 32px;
        height: 32px;
        background: #fff;
        margin: 10px 20px 0 0;
    }
</style>
