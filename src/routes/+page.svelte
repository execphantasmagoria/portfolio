<script>
  let { data } = $props();

import { getPublicFileUrl } from '$lib/storage'

  const bgUrl = getPublicFileUrl('portfolio-assets', 'bg/bg1.png')
</script>

<h1>My Portfolio (to be implemented)</h1>

<ul>
  {#each data.instruments as instrument}
    <li>{instrument.name}</li>
  {/each}
</ul>

<img src={bgUrl} alt="Test Bg" />