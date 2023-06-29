<script lang="ts">
  interface Config {
    isSelected: boolean;
    mouseName: string;
    buildPath: string;
    buildComand: string;
    exePath: string;
  }
  let configs: Config[] = [
    {
      isSelected: true,
      mouseName: "mouse1",
      buildPath: "path1",
      buildComand: "comand1",
      exePath: "exe1",
    },
    {
      isSelected: false,
      mouseName: "mouse2",
      buildPath: "path2",
      buildComand: "comand2",
      exePath: "exe2",
    },
  ];
</script>

<section class="grid-container">
<div class="grid-item">Selected</div>
  <div class="grid-item">Mouse Name</div>
  <div class="grid-item">Build Path</div>
  <div class="grid-item">Build Command</div>
  <div class="grid-item">Exe Path</div>
  
  {#each configs as config}
 <div class="grid-item"><input type="checkbox" checked={config.isSelected} /></div>
    <div class="grid-item">{config.mouseName}</div>
    <div class="grid-item">{config.buildPath}</div>
    <div class="grid-item">{config.buildComand}</div>
    <div class="grid-item">{config.exePath}</div>
   
  {/each}
</section>
