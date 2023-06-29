<script lang="ts">
  import { Canvas, Layer } from "svelte-canvas";
  type RenderParams = {
    context: CanvasRenderingContext2D;
    width: number;
    height: number;
  };

  $: render = (renderParams: RenderParams) => {
    let { context, width, height } = renderParams;
    context.fillStyle = "#000";
    context.fillRect(0, 0, width, height);
  };
</script>

<section>
  <Canvas height={576} width={576} style="margin-top: 15px"><Layer {render} /></Canvas>
</section>
