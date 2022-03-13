<script>
    import { onMount } from "svelte";
    let currency;
    const url =
        "https://dashboard.genuka.com/api/2021-10/companies/details/468";
    //const url = "https://dashboard.genuka.com/api/2021-10/companies/byurl?url=http://localhost:2974"
    onMount(async function () {
        const response = await fetch(url);
        const data = await response.json();
        currency = data.currency.symbol;

    });
</script>

<section class="l-cart">
    <div class="l-rl">
        <div class="l-tb">
            <div class="w--grid">
                <div class="w-bag-items">
                    <h3 class="c-header bag-items c-br">
                        <span>Mon panier</span>
                    </h3>
                    <div class="w-bag-items-list" />
                    <div class="w-bag-sub-total c-br">
                        <p>
                            <strong>Sous-total</strong><span>{currency}</span>
                        </p>
                    </div>
                </div>
                <div class="w-bag-total c-br">
                    <h3 class="c-header bag-total">
                        <span>Total</span> <span>{currency}</span>
                    </h3>
                    <div class="w-bag-total-detail">
                        <p class="w-flex--sb">
                            <strong>Sous-total</strong><span>{currency}</span>
                        </p>
                        <p class="w-flex--sb">
                            <strong>Livraison</strong><span>{currency}</span>
                        </p>
                    </div>
                    <button class="cta-btn"
                        ><a href="/caisse">PROCEDER AU PAIMENT</a></button
                    >
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    @import "./../styles/settings";
    strong {
        font-weight: 700;
    }
    .c-br {
        background: #eff3f1;
        border-radius: 10px;
    }
    .l-cart {
        color: $darker;
        .l-rl {
            padding: 0 50px;
        }
        .l-tb {
            padding: 150px 0;
        }
    }
    .w-flex--sb {
        display: flex;
        justify-content: space-between;
    }
    .w--grid {
        display: grid;
        grid-template: auto / 60% 1fr;
        gap: 12px;
        > div {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
    }
    .c-header {
        &.bag-items {
            padding: 24px 30px;
        }
        &.bag-total {
            display: flex;
            justify-content: space-between;
            padding: 0 0 24px 0;
            border-bottom: 1px solid #fff;
        }
    }
    .w-bag-sub-total {
        padding: 30px 24px;
        p {
            text-align: right;
        }
        span {
            min-width: 95px;
        }
    }
    .w-bag-total {
        position: sticky;
        top: 12px;
        padding: 24px 0;
        > * {
            margin: 0 30px;
        }
    }
    .cta-btn {
        background: $orange;
        color: #fff;
        border-radius: 50px;
        display: flex;
        align-items: stretch;
        a {
            width: 100%;
            display: inline-block;
            padding: 15px;
        }
    }
</style>
