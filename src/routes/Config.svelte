<script>
  import Button from "./Button.svelte";
  import { toggleConfig } from "./modal"
  
  let mouse = "Mouse";
</script>

<section style="margin-left: 35px">
  <h3>Config</h3>
  <div style="display: flex">
    <p>Mouse: {mouse}</p>
    <Button
      name="✏️"
      handleClick={toggleConfig}
      style="margin-left: 10px; margin-top: 12px; padding: 3px 5px 4px 5px"
    />
  </div>
  <div style="display: flex">
    <p>Maze:</p>
    <select
      name="cars"
      id="cars"
      style="height: 20px; margin-top: 15px; margin-left: 10px;"
    >
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
    <Button
      name="+"
      handleClick={() => {}}
      style="margin-left: 10px; margin-top: 15px; padding: 3px 5px 3px 5px"
    />
  </div>
</section>
