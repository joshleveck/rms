<script>
  import Button from "./Button.svelte";
  import { isConfigCreateOpen, toggleAdd } from "./modal";
</script>

<section class={$isConfigCreateOpen ? "open" : "closed"}>
  <div class="blur">
    <div class="addModal">
      <h2>Add</h2>
      <div style="margin-top: 20px">
        <div>
          <label for="name">Name</label><br />
          <input type="text" id="name" name="name" size="45" />
        </div>
        <div>
          <label for="build-cmd">Build Cmd</label><br />
          <input type="text" id="build-cmd" name="build-cmd" size="45" />
        </div>
        <div>
          <label for="build-folder">Build Folder</label><br />
          <input type="text" id="build-folder" name="build-folder" size="45" />
        </div>
        <div>
          <label for="run-cmd">Run Cmd</label><br />
          <input type="text" id="run-cmd" name="run-cmd" size="45" />
        </div>
      </div>
      <div class="addCloseButton">
        <Button
          handleClick={toggleAdd}
          name="X"
          style="background-color: transparent; color: #fff;"
        />
      </div>
      <div class="addSaveButton">
        <Button
          handleClick={() => {}}
          name="Save"
          style="background-color: #0000FF; color: #fff"
        />
      </div>
    </div>
  </div>
</section>
