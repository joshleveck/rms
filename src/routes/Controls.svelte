<script>
  import StatusRunner from "./StatusRunner.svelte";

  import { build, run } from "$lib/tauri";
</script>

<section style="width: 175px;">
  <h3>Controls</h3>
  <StatusRunner
    name="Build"
    status="Success"
    statusColour="#187330"
    handleClick={build}
  />
  <StatusRunner
    name="Run"
    status="Success"
    statusColour="#187330"
    handleClick={run}
  />
</section>
