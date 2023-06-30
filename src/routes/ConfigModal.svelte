<script>
  import AddModal from "./AddModal.svelte";
import Button from "./Button.svelte";
  import ConfigTable from "./ConfigTable.svelte";
  import { isConfigOpen, toggleAdd, toggleConfig } from "./modal";
</script>

<section class={$isConfigOpen ? "open" : "closed"}>
  <div class="blur">
    <div class="modal">
      <h2>Config</h2>
      <div class="closeButton">
        <Button
          handleClick={toggleConfig}
          name="X"
          style="background-color: transparent; color: #fff;"
        />
      </div>
      <Button handleClick={toggleAdd} name="Add" />
      <ConfigTable />
      <div class="saveButton">
        <Button
          handleClick={() => {}}
          name="Save"
          style="background-color: #0000FF; color: #fff"
        />
      </div>
    </div>
  </div>
</section>

<AddModal />