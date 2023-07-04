<script lang="ts">
  import Button from "./Button.svelte";

  export let handleClick: () => void;
  export let name: String;
  export let status: String;
  export let statusColour: string;

  let style = "padding: 10px 15px 0px 15px; float: right; border-radius: 2px; background-color: " + statusColour + ";";
</script>

<section>
  <div style="display: flex;justify-content: space-between; margin-bottom: 10px">
    <Button {name} {handleClick} />
    <div {style}>
      <p style="margin:0;">{status}</p>
    </div>
  </div>
</section>
