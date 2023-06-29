<script lang=ts>
    export let name: String;
    export let handleClick: () => void;
    export let style: string = "";
</script>
<!-- Generic Button -->
<section>
    <button on:click={handleClick} {style}>{name}</button>
</section>

<style>
    button {
        border: none;
        background-color: #ccc;
        padding: 6px 12px;
        border-radius: 4px;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
    }
</style>