<script lang="ts">
  import Login from "./pages/Login.svelte";
  import Register from "./pages/Register.svelte";

  import { currentPage, Page } from "./lib/stores";
</script>

<main>
  {#if $currentPage === Page.LOGIN}
    <Login />
  {:else if $currentPage === Page.REGISTER}
    <Register />
  {/if}
</main>