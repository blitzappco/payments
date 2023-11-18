<script>
  import { onMount } from "svelte"

  let token = '';

  onMount(() => {
    token = localStorage.getItem("token")
  })
</script>

<div style="margin-top: 20vh">
  <a href="/topup">TOPUP</a>

  <h3>{token}</h3>
</div>