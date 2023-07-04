<script>
  import Button from "./Button.svelte";
  import { pause, cancel } from "$lib/tauri";
</script>

<section>
  <div style="display: flex; margin-top: 10px;">
    <Button
      name="Pause"
      handleClick={pause}
      style="display: inline-block;"
    />
    <Button
      name="Cancel"
      handleClick={cancel}
      style="display: inline-block; margin-left: 10px;"
    />
    <p style="margin: 10px 10px 0px 50px">Speed: </p>
    <Button
      name="++"
      handleClick={() => {}}
      style="display: inline-block;"
    />
    <Button
      name="--"
      handleClick={() => {}}
      style="display: inline-block; margin-left: 10px;"
    />
  </div>
</section>
