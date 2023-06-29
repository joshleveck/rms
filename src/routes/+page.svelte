<script>
  import Canvas from "./Canvas.svelte";
  import Config from "./Config.svelte";
  import ConfigModal from "./ConfigModal.svelte"
  import Controls from "./Controls.svelte";
  import Output from "./Output.svelte";
  import Runner from "./Runner.svelte";

  let showConfig = false;
</script>

<section>
  <h1>Rust Micromouse Simulator</h1>
  <div style="width: 575px; float: left">
    <Canvas />
  </div>
  <div style="margin-left: 590px">
    <div style="display: flex">
      <Controls />
      <Config openConfig={() => (showConfig = true)}/>
    </div>
    <Runner />
    <Output />
  </div>
</section>
